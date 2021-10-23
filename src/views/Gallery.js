import React from "react";
import GridGallery from "../components/GridGallery";
import { Grid, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { fullBalconyGallery, fullTerassGallery, fullTillbehorGallery } from "../assets/assets";


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5vh",
  },
  marginContainer: {
    marginBottom: "5vw",
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
      <Grid item xs={12} className={[classes.textContainer, classes.marginContainer]}>
        <Typography variant="h1" className={classes.title}>
          <strong>Galleri</strong>
        </Typography>
        <Typography variant="body1">
        Tveka inte att kontakta oss om ni ser en lösning ni gillar.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <GridGallery images={fullBalconyGallery} title="Balkonger" />
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <GridGallery images={fullTerassGallery} title="Terrasser" />
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <GridGallery images={fullTillbehorGallery} title="Tillbehör" />
      </Grid>
    </Grid>
  );
};
export default Gallery;
