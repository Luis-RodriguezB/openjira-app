import { useContext } from 'react';
import { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';

import { Layout } from '@/components/layouts';
import { EntryList, NewEntry } from '@/components/ui';
import { UIContext } from '@/context/ui';
import { EntryStatus } from '@/interfaces';

const HomePage: NextPage = () => {
  const { openModal } = useContext(UIContext);

  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' sx={{ textAlign: 'center' }} />

            <NewEntry />

            <CardContent>
              <EntryList status={EntryStatus.PENDING} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' sx={{ textAlign: 'center' }} />

            <CardContent>
              <EntryList status={EntryStatus.INPROGRESS} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' sx={{ textAlign: 'center' }} />

            <CardContent>
              <EntryList status={EntryStatus.FINISHED} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        size='large'
        color='success'
        sx={{
          position: 'fixed',
          bottom: 10,
          right: 10,
          zIndex: 999,
        }}
        onClick={openModal}
      >
        <AddCircleOutlineOutlined sx={{ fontSize: 60 }} />
      </IconButton>
    </Layout>
  );
};

export default HomePage;
