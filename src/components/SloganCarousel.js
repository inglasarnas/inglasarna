import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { carouselImages } from "../assets/assets";
import Logo from "../assets/media/logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "70vh",
    overflow: 'clip',
  },
  carouselImage: {
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logotypeContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: 3,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: theme.spacing(4),
    backdropFilter: "blur(4px)",
    height: "40%",
  },
  logo: {
    height: "70%",
  },
}));
const SloganCarousel = () => {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={false}
      indicators={false}
      interval={7000}
      className={classes.container}
    >
      {carouselImages.map((image, i) => {
        return (
          <Grid
            container
            key={i}
            style={{
              background: `url(${image.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat",
            }}
            className={classes.carouselImage}
          >
            <Grid
              item
              sm={6}
              md={6}
              lg={4}
              xl={4}
              className={classes.logotypeContainer}
            >
              <img
                src={Logo}
                alt="Inglasarnas Logotyp"
                className={classes.logo}
              />
              <Typography variant="h2" color="primary">
                Vi kan inglasning!
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Carousel>
  );
};

export default SloganCarousel;
