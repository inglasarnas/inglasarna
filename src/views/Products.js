import React from "react";
import CardWithBgImg from "../components/CardsWithBgImgs/CardWithBgImg";
import RetailerInfoBox from "../components/RetailerInfoBox";
import { fadedImgBoxes } from "../assets/assets";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5vh",
  },
  marginContainer: {
    marginBottom: "5vh",
  },
  textContainer: {
    marginBottom: "5vh",
    textAlign: "center",
  },
}));
const Products = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.textContainer}>
        <Typography variant="h1">Våra Produkter</Typography>
        <Typography variant="body1">
          Om ni har fler frågor angående våra produkter, välkomna att kontakta
          oss!
        </Typography>
      </Grid>
      {fadedImgBoxes.map((box, index) => {
        return (
          <Grid key={index} item xs={11} className={classes.marginContainer}>
            <CardWithBgImg
              backgroundImage={box.image}
              title={box.title}
              text={box.text}
            />
          </Grid>
        );
      })}
      <Grid item xs={11}>
        <RetailerInfoBox />
      </Grid>
    </Grid>
  );
};
export default Products;
