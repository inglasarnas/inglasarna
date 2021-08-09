import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import {Parallax} from 'react-parallax';
import InfoColumn from "./InfoColumn";
import {threeColInfoBoxes} from '../../assets/assets';
import background from '../../assets/media/Carousel03.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  headingContainer: {
    maxHeight: 100,
    marginTop: theme.spacing(4),
},
columns: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "3px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: theme.spacing(2),
    width: "100%",
  },
  columnSize: {
    minHeight: 300,
  },
  columnsContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    marginBottom: theme.spacing(4),
  },
}));
const ThreeColInfoBox = () => {
  const classes = useStyles();
  return (
    <Parallax bgImage={background} strength={-200}>
    <Grid container spacing={3} className={classes.container}>
      <Grid
        item
        md={10}
        className={[classes.columns, classes.headingContainer]}
      >
        <Typography variant="h2">RUBRIK</Typography>
      </Grid>
      <Grid item md={10} className={classes.columnsContainer}>
        {threeColInfoBoxes.map((box) => {
          return (
            <Grid item md={3} className={[classes.columns, classes.columnSize]} key={box.rubrik}>
              <InfoColumn rubrik={box.rubrik} text={box.text} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
    </Parallax>
  );
};

export default ThreeColInfoBox;
