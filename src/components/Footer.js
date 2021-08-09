import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    zIndex: 1100,
    top: "calc(100vh-10vh)",
    left: 0,
    padding: theme.spacing(4),
    backgroundColor: "#003595",
    color: "#FFFFFF",
    width: "100%",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={4}>
        <Typography variant="subtitle1">RUBRIK</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          sodales nulla elementum.
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography variant="subtitle1">RUBRIK</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          sodales nulla elementum.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
