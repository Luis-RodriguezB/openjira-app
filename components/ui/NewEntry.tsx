import { TextField, Box, Modal, Typography, Button } from '@mui/material';
import { SaveOutlined, CancelOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { UIContext } from '@/context/ui';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const NewEntry = () => {
  const { modalOpen, closeModal } = useContext(UIContext);

  const handleClose = (event: {}, reason: string) => {
    if (reason && reason == 'backdropClick') return;
    closeModal();
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
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
          fullWidth
          autoFocus
          multiline
          minRows={3}
          label='Nueva tarea'
          placeholder='Ingrese la nueva entrada'
          helperText='Ingrese un valor'
          sx={{ marginBottom: 2 }}
        />

        <Box display='flex' justifyContent='space-between'>
          <Button variant='text' endIcon={<CancelOutlined />}>
            Cancelar
          </Button>

          <Button
            variant='outlined'
            color='secondary'
            endIcon={<SaveOutlined />}
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
