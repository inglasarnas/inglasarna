import React from 'react';
import { Button, Grid, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import background from '../assets/media/Finansbox.jpeg'
const useStyles = makeStyles((theme) => ({
  container : {
    background: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(10),
    width: '100%',
  },
  margin: {
    margin: '2vw'
  },
  text: {
    maxWidth: '60vw',
  },
  textContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxSizing: 'border-box',
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: 3,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: theme.spacing(),
    backdropFilter: "blur(4px)",
    width: "70vw",
  },
  wasaContainer : {
    background: 'url("https://avatars.githubusercontent.com/u/14995184?s=280&v=4")',
    backgroundSize: 'contain',
    height: '15vw',
    backgroundRepeat: 'no-repeat',
}

}))
const FinanceBox = () => {
const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item xs={10} className={classes.textContainer}>
        <Typography variant='h2' className={classes.margin}>Vi hjälper dig med finansiering</Typography>
        <Typography variant='body1' className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo
          commodo, malesuada odio vitae, euismod ante. Mauris quis sem laoreet,
          lacinia neque eget, venenatis ligula. Maecenas pharetra tincidunt
          sapien vel mattis. Fusce in faucibus nunc. Integer et velit pulvinar,
          ultrices odio interdum, mattis tellus. Duis nisl orci, porta vel nisi
          sit amet, sollicitudin consequat est. Aenean fermentum id arcu in
          suscipit.
        </Typography>
        <div className={classes.wasaContainer}></div>
        <Button variant='contained' color='primary' className={classes.margin}>
          Räkna på finansiering
        </Button>
      </Grid>
    </Grid>
  );
};
export default FinanceBox;
