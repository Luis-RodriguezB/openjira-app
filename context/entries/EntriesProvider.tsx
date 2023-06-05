import { FC, useReducer } from 'react';
import { EntriesContext, EntriesState, entriesReducer } from './';
import { EntryStatus } from '@/interfaces';

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: crypto.randomUUID(),
      description: 'Elit minim tempor consectetur duis officia culpa ea.',
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      _id: crypto.randomUUID(),
      description: 'Occaecat nostrud ut id esse do nulla id Lorem sit.',
      status: EntryStatus.INPROGRESS,
      createdAt: Date.now() - 100000,
      updatedAt: Date.now() - 100000,
    },
    {
      _id: crypto.randomUUID(),
      description: 'Veniam ea dolor in consequat officia pariatur proident dolor Lorem veniam commodo velit elit.',
      status: EntryStatus.FINISHED,
      createdAt: Date.now() - 150000,
      updatedAt: Date.now() - 150000,
    },
  ],
};

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
