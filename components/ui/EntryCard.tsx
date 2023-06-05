import { FC } from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { Entry } from '@/interfaces';

interface Props extends Entry {}

export const EntryCard: FC<Props> = ({ description, createdAt }) => {

  return (
    <Card sx={{ marginBottom: 1 }} className='card-shadow'>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            { description }
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
