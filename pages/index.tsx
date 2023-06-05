import { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { Layout } from '@/components/layouts';
import { EntryList } from '@/components/ui';
import { EntryStatus } from '@/interfaces';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' sx={{ textAlign: 'center' }} />

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
    </Layout>
  );
};

export default HomePage;
