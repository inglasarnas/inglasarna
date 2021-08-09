import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    padding: 0,
    top: 0,
  },
}));
const NavbarContainer = () => {
  const classes = useStyles();
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setMobileScreen(true);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 900) {
        setMobileScreen(true);
      } else {
        setMobileScreen(false);
      }
    });
  }, []);
  return (
    <Grid container className={classes.container}>
      {mobileScreen ? <MobileNavbar /> : <DesktopNavbar />}
    </Grid>
  );
};

export default NavbarContainer;
