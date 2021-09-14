import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btn: {
    position: "fixed",
    top: "80%",
    left: "70%",
    width: "30%",
    "@media (min-width: 733px)": {
      left: "calc(100% - 220px)",
      top: "65%",
    },
    maxWidth: "220px",
    borderRadius: "10px 0 0 10px",
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
    textAlign: "left",
    zIndex: "100",
  },
}));

const BookingBtn = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btn}
      variant="contained"
      color="primary"
      onClick={() => props.history.push("/contact/privat")}
    >
      Boka gratis hembesök
    </Button>
  );
};
export default withRouter(BookingBtn);
