import { DragEvent, FC, useContext, useMemo } from 'react';

import { List, Paper } from '@mui/material';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';
import { EntryCard } from './';
import { EntryStatus } from '@/interfaces';

import styles from './EntryList.module.css';
interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { getEntryById, updateEntry, getEntriesByStatus } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => getEntriesByStatus(status),
    [status, getEntriesByStatus]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry = getEntryById(id);
    entry!.status = status;

    updateEntry(entry!);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={`entry-list-wrapper ${isDragging ? styles.dragging : ''}`}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'auto',
          background: 'transparent',
          padding: '8px 12px',
        }}
      >
        <List sx={{ opacity: isDragging ? 0.3 : 1, transition: 'all 0.3s' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
