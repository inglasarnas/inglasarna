import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SloganCarousel from "../components/SloganCarousel";
import InfoIconCards from "../components/InfoIconCard/InfoIconCards";
import ThreeColInfoBox from "../components/ThreeColInfoBox/ThreeColInfoBox";
import ContactForm from "../components/Form/FormContainer";
import RetailerInfoBox from "../components/RetailerInfoBox";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Start = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <SloganCarousel />
      </Grid>
      <Grid item xs={11}>
        <InfoIconCards />
      </Grid>
      <Grid item xs={11}>
        <ThreeColInfoBox />
      </Grid>
      <Grid item xs={11}>
        <ContactForm />
      </Grid>
      <Grid item xs={11}>
        <RetailerInfoBox />
      </Grid>
    </Grid>
  );
};
export default Start;
