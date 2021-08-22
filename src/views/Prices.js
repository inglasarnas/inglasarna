import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import BoxWithSideImg from "../components/BoxWithSideImg";
import FinanceBox from "../components/FinanceBox";
import { fadedImgBoxes } from "../assets/assets";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "cemter",
    marginTop: "5vh",
  },
  spacing: {
    padding: "1vh",
  },
  marginContainer: {
    marginBottom: "5vw",
  },
  textContainer: {
    textAlign: "center",
    marginBottom: "5vh",
  },
}));

const Prices = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={[classes.textContainer, classes.marginContainer]}>
        <Typography variant="h1">Priser</Typography>
        <Typography variant="body1">
          Om ni har fler frågor angående priser eller vill ha en offert,
          kontakta oss!
        </Typography>
      </Grid>
      <div className={classes.spacing} />
      {fadedImgBoxes.map((box, index) => {
        return (
          <Grid key={index} item xs={11} className={classes.marginContainer}>
            <BoxWithSideImg
              img={box.image}
              imgAlt={box.title}
              title={box.title}
              text={box.text}
            />
          </Grid>
        );
      })}
      <Grid item xs={11}>
        <FinanceBox />
      </Grid>
    </Grid>
  );
};

export default Prices;
