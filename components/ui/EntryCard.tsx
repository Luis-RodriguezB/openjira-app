import { DragEvent, FC, useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Entry } from '@/interfaces';
import { UIContext } from '@/context/ui';
interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text/plain', entry._id);
    event.currentTarget.classList.add('is-dragging-card');
    startDragging();
  };
  
  const onDragEnd = (event: DragEvent) => {
    endDragging();
    event.currentTarget.classList.remove('is-dragging-card');
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      className='card-shadow'
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
