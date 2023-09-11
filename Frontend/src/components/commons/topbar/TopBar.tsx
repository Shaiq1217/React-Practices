import { AppBar, Toolbar, Typography } from '@mui/material';
import gslogo from '../../../assets/gslogo-white.svg';
import styles from './TopBar.module.css';
const TopBar = () => {
  return (
    <AppBar
      position='static'
      className={styles.topBar}
      sx={{ backgroundColor: '#007fff' }}
    >
      <Toolbar>
        <img src={gslogo} alt='AlertWave Icon' />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
