import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    textAlign: "center",
    minHeight: 300,
  },
}));

const InfoColumn = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item m={10}>
        <Typography variant="h4">{props.rubrik}</Typography>
      </Grid>
      <Grid item m={10}>
        <Typography variant="body1">{props.text}</Typography>
      </Grid>
    </Grid>
  );
};
export default InfoColumn;
