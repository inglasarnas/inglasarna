import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
  },
  informationContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 3,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    margin: theme.spacing(5),
    backdropFilter: 'blur(4px)',
  },
  spacing: {
    padding: theme.spacing(4),
  },
}));
const CardWithBgImg = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={10} className={classes.informationContainer}>
        <Typography variant='h2'>{props.title}</Typography>
        <div className={classes.spacing} />
        <Typography variant='body1'>{props.text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CardWithBgImg;
