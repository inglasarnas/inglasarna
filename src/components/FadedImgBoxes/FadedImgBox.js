import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: (props) =>
      `linear-gradient(270deg, rgba(255, 255, 255, 0) -2%, #FFFFFF 67.34%), url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    textAlign: 'left',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  textContainer: {
    marginLeft: theme.spacing(2),
  },
}));
const FadedImgBox = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={6} className={classes.textContainer}>
        <Typography variant='h2'>{props.title}</Typography>
      </Grid>
      <Grid item xs={6} className={classes.textContainer}>
        <Typography variant='body1'>{props.text}</Typography>
      </Grid>
    </Grid>
  );
};
export default FadedImgBox;
