import { Box, CssBaseline } from '@mui/material';
import Applications from '../../components/application/applications';
import TopBar from '../../components/commons/topbar/TopBar';

import styles from './dashboard.module.css';
import Events from '../../components/events/events';
import Notifications from '../../components/notifications/notifications';

const DashboardContainer = () => {
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
          <Applications />
          <Events />
          <Notifications />
        </Box>
      </div>
    </>
  );
};

export default DashboardContainer;