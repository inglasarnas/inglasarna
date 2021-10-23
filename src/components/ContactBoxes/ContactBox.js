
import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: theme.spacing(5),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "90%",
    "@media (max-width: 600px)": {
      flexFlow: "column",
    },
    "@media (min-width: 1280px)": {
      width: "100%",
    },
  },
  imageContainer: {
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    width: 300,
    "@media (max-width: 900px)": {
      height: 200,
      width: 200,
    },
    "@media (max-width: 600px)": {
      height: 200,
      width: 200,
    },
  },
  textContainer: {
    height: "50%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
  },
  marginBottom: {
    marginBottom: '1vw',
  },
}));
const ContactBox = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={4}>
        <div className={classes.imageContainer} />
      </Grid>
      <Grid item xs={12} md={6} className={classes.textContainer}>
        <Typography variant="h1" className={classes.marginBottom}>Kontaktuppgifter</Typography>
        <Typography variant="h3" className={classes.marginBottom}>{props.name}</Typography>
        <Typography variant="h3" className={classes.marginBottom}>{props.number}</Typography>
        <Typography variant="h3" className={classes.marginBottom}>{props.email}</Typography>
      </Grid>
    </Grid>
  );
};

export default ContactBox;
