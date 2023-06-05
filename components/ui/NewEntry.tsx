import { TextField, Box, Modal, Typography, Button } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { SaveOutlined, CancelOutlined } from '@mui/icons-material';
import { UIContext } from '@/context/ui';
import { EntriesContext } from '@/context/entries';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  width: '100%',
  bgcolor: 'rgba(30, 30, 30, 1)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { modalOpen, closeModal } = useContext(UIContext);
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onCancelModal = () => {
    setInputValue('');
    setIsTouched(false);
    closeModal();
  };

  const onSave = () => {
    if (inputValue.trim().length <= 0) {
      setIsTouched(true);
      return;
    };

    onCancelModal();
    addNewEntry(inputValue);
  };

  return (
    <Modal
      open={modalOpen}
      aria-labelledby='Create new entry'
      aria-describedby='Modal work to create new task'
    >
      <Box sx={style}>
        <Typography
          variant='h2'
          fontWeight={900}
          fontSize={28}
          align='center'
          marginBottom={5}
        >
          Crear nueva tarea
        </Typography>

        <TextField
          value={inputValue}
          onChange={onInputChange}
          onBlur={() => setIsTouched(true)}
          error={inputValue.trim().length === 0 && isTouched}
          helperText={
            inputValue.trim().length === 0 && isTouched && 'Ingrese un valor'
          }
          fullWidth
          multiline
          minRows={3}
          label='Nueva tarea'
          placeholder='Ingrese la nueva entrada'
          sx={{ marginBottom: 2 }}
        />

        <Box display='flex' justifyContent='space-between'>
          <Button
            variant='text'
            endIcon={<CancelOutlined />}
            onClick={onCancelModal}
          >
            Cancelar
          </Button>

          <Button
            variant='outlined'
            color='secondary'
            type='submit'
            endIcon={<SaveOutlined />}
            onClick={onSave}
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
