
import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import PrivateContactForm from "./PrivateContactForm";
import BRFContactForm from "./BRFContactForm";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage:
      "url('https://lumon.com/sites/default/files/styles/large_gallery/public/images/sv/lumon-balkonginglasning-701.jpg?itok=l8oWvTok')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: theme.spacing(2),
  },
  buttonGroup: {
    marginBottom: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(5),
  },
  brfTitle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  li: {
    padding: theme.spacing(1),
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  center: {
    "@media (max-width: 959px)": {
      textAlign: "center",
    },
  },
}));

const FormContainer = ({ from }) => {
  const classes = useStyles();

  const [toggleView, setToggleView] = useState(false);

  useEffect(() => {
    if (from === "brf") {
      setToggleView(true);
    }
    if (from === "privat") {
      setToggleView(false);
    }
  }, [from]);

  return (
    <>
      <Typography className={classes.title} variant="h2">
        Kontakta oss som privat person eller BRF här
      </Typography>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <ButtonGroup
            fullWidth={true}
            className={classes.buttonGroup}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                setToggleView(false);
              }}
              color={!toggleView ? "primary" : ""}
            >
              Privat Person
            </Button>
            <Button
              onClick={() => {
                setToggleView(true);
              }}
              color={toggleView ? "primary" : ""}
            >
              BRF
            </Button>
          </ButtonGroup>
        </Grid>
        {toggleView ? <BRFContactForm /> : <PrivateContactForm />}
      </Grid>
      {toggleView && (
        <Grid container className={classes.textContainer}>
          <Grid item xs={12} md={6} lg={6} className={classes.center}>
            <Typography className={classes.brfTitle} variant="h2">
              Balkong inglasning för brf
            </Typography>
            <Typography variant="body1">
              Det finns många fördelar med att beställa balkonginglasning för er
              bostadsrättsförening. En inglasad balkong blir ett nytt utrymme
              för din bostad, ett extra rum för middagar, avkoppling eller vad
              du helst skulle vilja göra av ditt nya rum! Förutom att
              bostadsrättsföreningens område blir en vackrare och mer social
              plats bidrar inglasning till att hålla kvar värmen och minska
              energiförbrukningen. För att nämna några favoriter bland alla
              fördelar har vi gjort en lista nedan.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.flexCenter}>
            <div>
              <Typography variant="h3" className={classes.brfTitle}>
                Fördelar med en inglasad balkong
              </Typography>
              <ul className={classes.ul}>
                <li className={classes.li}>Bostadens värde ökar</li>
                <li className={classes.li}>Skyddar mot pollen, vind, regn</li>
                <li className={classes.li}>Stänger ute oljud och buller</li>
                <li className={classes.li}>
                  Bidrar till att spara energi för dig och hela fastigheten
                </li>
                <li className={classes.li}>
                  Du kan använda balkongen under en längre säsong
                </li>
                <li className={classes.li}>
                  Du skapar ett extra rum för din bostad
                </li>
                <li className={classes.li}>
                  Det blir mindre slit på bostadens fasad och din balkong
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default FormContainer;
