import React from "react";
import HowToStepper from "../components/HowToStepper";
import GridGallery from "../components/GridGallery";
import FormContainer from "../components/Form/FormContainer";
import WhyGlass from '../components/WhyGlass';
import { carouselImages } from "../assets/assets";
import { Grid, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5vh",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  marginContainer: {
    marginBottom: "5vh",
  },
  textContainer: {
    marginBottom: "5vh",
    textAlign: "center",
  },
  title: {
    marginBottom: "1vh",
  },
}));

const How = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>

<Grid item xs={12} className={classes.textContainer}>
        <Typography variant="h1" className={classes.title}>
          Hur går det till?
        </Typography>
        <Typography variant="body1">
          Om ni har fler frågor angående hur en inglasning går till, kontakta
          oss gärna!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <WhyGlass />
      </Grid>
      <Grid item xs={10} className={classes.marginContainer}>
        <HowToStepper />
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <GridGallery images={carouselImages} title="Våra balkonginglasningar" />
      </Grid>
      <Grid item xs={12}>
        <FormContainer />
      </Grid>
    </Grid>
  );
};
export default How;
