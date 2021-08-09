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
      <Grid item xs={10} className={classes.textContainer}>
        <Typography variant="h3">
          Vi arbetar bara med produkter från de bästa företagen på marknaden!
        </Typography>
      </Grid>
      <Grid item xs={8} className={classes.textContainer}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo
          commodo, malesuada odio vitae, euismod ante. Mauris quis sem laoreet,
          lacinia neque eget, venenatis ligula. Maecenas pharetra tincidunt
          sapien vel mattis. Fusce in faucibus nunc. Integer et velit pulvinar,
          ultrices odio interdum, mattis tellus. Duis nisl orci, porta vel nisi
          sit amet, sollicitudin consequat est. Aenean fermentum id arcu in
          suscipit.
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.lumonContainer} />
    </Grid>
  );
};

export default RetailerInfoBox;
