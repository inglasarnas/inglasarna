import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    textAlign: "center",
    minHeight: '15vw',
  },
}));

const InfoColumn = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={7} className={classes.container}>
      <Grid item m={10}>
        <Typography variant="h2">{props.rubrik}</Typography>
      </Grid>
      <Grid item m={10}>
        <Typography variant="body1">{props.text1}</Typography>

      </Grid>
      <Grid item m={10}>
      <Typography variant="body2">{props.text2}</Typography>
      </Grid>
    </Grid>
  );
};
export default InfoColumn;
