import React from "react";
import GridGallery from "../components/GridGallery";
import { carouselImages } from "../assets/assets";
import { Grid, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5vh",
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
const Gallery = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.textContainer}>
        <Typography variant="h1" className={classes.title}>
          Galleri
        </Typography>
        <Typography variant="body1">
          Om ni ser en lösning ni gillar, tveka inte att kontakta oss!
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <GridGallery images={carouselImages} title="Rubrik1" />
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <GridGallery images={carouselImages} title="Rubrik2" />
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <GridGallery images={carouselImages} title="Rubrik3" />
      </Grid>
    </Grid>
  );
};
export default Gallery;
