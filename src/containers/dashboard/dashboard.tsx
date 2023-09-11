import { Box, CssBaseline } from '@mui/material';
import Applications from '../../components/application/applications';
import TopBar from '../../components/commons/topbar/topbar';

import styles from './dashboard.module.css';
import Events from '../../components/events/events';
import Notifications from '../../components/notifications/notifications';
import { useState } from 'react';

const DashboardContainer = () => {
  const ApplicationData = [
    {
      id: 1,
      name: 'ETS',
      description: 'this is an application',
      isActive: true,
    },
    {
      id: 3,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 4,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 5,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 6,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 7,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 8,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
  ];
  return (
    <>
      <CssBaseline />
      <TopBar />
      <div className={styles.gutterMargins}>
        <Box
          bgcolor='white'
          display='flex'
          minHeight='100vh'
          flexDirection='column'
        >
          <Applications Propdata={ApplicationData} />
          <Events />
          <Notifications />
        </Box>
      </div>
    </>
  );
};

export default DashboardContainer;
