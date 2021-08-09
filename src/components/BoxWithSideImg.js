
import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "row",

    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",


    },
  },
  image: {
    height: 500,
    width: 750,

    float: "left",
    margin: theme.spacing(3),
    borderRadius: theme.spacing(4),

    [theme.breakpoints.between("xs", "sm")]: {
      float: "none",
      width: "100%",
      height: "auto",
    },
  },
  textContainer: {
    marginTop: theme.spacing(4),
  },
  heading: {
    marginBottom: theme.spacing(4),
  },
}));

const BoxWithSideImg = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img src={props.img} alt={props.imgAlt} className={classes.image} />
      <Box className={classes.textContainer}>
        <Typography variant="h2" className={classes.heading}>
          {props.title}
        </Typography>
        <Typography variant="body1">{props.text}</Typography>
      </Box>
    </Box>
  );
};
export default BoxWithSideImg;
