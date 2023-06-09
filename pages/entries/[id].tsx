import { ChangeEvent, FC, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layouts';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { EntryStatus } from '@/interfaces';

import { isValidObjectId } from 'mongoose';

const validStatus: EntryStatus[] = [
  EntryStatus.PENDING,
  EntryStatus.INPROGRESS,
  EntryStatus.FINISHED,
];

interface Props {
  id: string;
}

const EntryPage: FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<EntryStatus>(EntryStatus.PENDING);

  const isNotValidField = useMemo(
    () => inputValue.trim().length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {};

  return (
    <Layout title='....'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title='Entrada'
              subheader={`Creada hace: .... minutos`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Nueva entrada'
                multiline
                label='Nueva entrada'
                value={inputValue}
                onChange={onTextFieldChanged}
                helperText={isNotValidField && 'Ingrese un valor'}
                error={isNotValidField}
                onBlur={() => setTouched(true)}
              />

              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {validStatus.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      value={opt}
                      control={<Radio />}
                      label={opt}
                      sx={{ textTransform: 'capitalize' }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
                onClick={onSave}
                disabled={inputValue.trim().length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark',
        }}
      >
        <DeleteOutlinedIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  if (!isValidObjectId(id)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      id,
    },
  };
};

export default EntryPage;
