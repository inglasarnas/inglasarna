import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import LumonLogo from "../assets/media/lumonlogo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "center",
  },
  lumonContainer: {
    backgroundImage: `url(${LumonLogo})`,

    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "15vh",

  },
}));
const RetailerInfoBox = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={10} xs={12} className={classes.textContainer}>
        <Typography variant="h3">
          Vi arbetar bara med produkter från de bästa företagen på marknaden!
        </Typography>
      </Grid>
      <Grid item md={8} xs={12} className={classes.textContainer}>
        <Typography variant="body1">
          Lumon är ett av de främsta företagen på den europeiska balkong- och terassmarknaden, och är specialiserade på konstruktioner i glas och aluminium samt hållbarhet.
          De har ett brett sortiment med allt från balkongglas till glasterrasser, avgränsare och lösningar för olika balkong- och terassfasader.<br/>
          Form, funktion och service håller alltid absolut högsta standard.
        </Typography>
        <Typography variant="body1">
          <br/>
          Lumons huvudkontor ligger i Kouvola, Finland och de har dotterbolag i Sverige, Norge, Spanien, Tyskland, Schweiz, Frankrike, Ryssland och Kanada.
        </Typography>
      </Grid>
      <Grid item md={6} xs={12} className={classes.lumonContainer} />
    </Grid>
  );
};

export default RetailerInfoBox;
