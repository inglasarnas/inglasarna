import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ArrowForwardsIosIcon from '@material-ui/icons/ArrowForwardIos';

const LinkBox = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant='h2' color='primary'>
          <ArrowForwardsIosIcon /> Glasa in balkong
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h2' color='primary'>
          <ArrowForwardsIosIcon /> Glasa in altan
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h2' color='primary'>
          <ArrowForwardsIosIcon /> Glasa in tak
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h2' color='primary'>
          <ArrowForwardsIosIcon /> Ställ en fråga till oss
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkBox;
