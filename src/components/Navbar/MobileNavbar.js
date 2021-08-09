import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  Typography,
  makeStyles,
  Grid,
  Drawer,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, withRouter } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Logo from "../../assets/media/responsiveLogo.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "10vh",
    position: "fixed",

    zIndex: 1100,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  nestedListContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "start",
  },
  logo: {
    height: "7vh",
    marginTop: theme.spacing(5),
  },
  menuIcon: {
    fontSize: "5vh",
  },
  btn: {
    marginLeft: "7%",
  },
}));
const MobileNavbar = (props) => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <AppBar color="secondary" className={classes.container}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Link to="/">
              <img
                src={Logo}
                alt="inglasarnas logotyp"
                className={classes.logo}
              />
            </Link>
            <MenuIcon
              onClick={() => setDrawer(true)}
              className={classes.menuIcon}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} anchor="right" onClose={() => setDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => setDrawer(false)}
          onKeyDown={() => setDrawer(false)}
        >
          <IconButton>
            <FiX />
          </IconButton>
          <List>
            <ListItem button divider onClick={() => props.history.push("/how")}>
              <Typography variant="h4" color="primary">
                Hur går det till?
              </Typography>
            </ListItem>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/products")}
            >
              <Typography variant="h4" color="primary">
                Produkter
              </Typography>
            </ListItem>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/prices")}
            >
              <Typography variant="h4" color="primary">
                Kostnad
              </Typography>
            </ListItem>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/gallery")}
            >
              <Typography variant="h4" color="primary">
                Galleri
              </Typography>
            </ListItem>

            <ListItem
              button
              divider
              onClick={() => props.history.push("/contact")}
            >
              <Typography variant="h4" color="primary">
                Kontakta oss
              </Typography>
            </ListItem>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/contact/brf")}
            >
              <Typography variant="h4" color="primary">
                BRF
              </Typography>
            </ListItem>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/contact/om")}
            >
              <Typography variant="h4" color="primary">
                Om Oss
              </Typography>
            </ListItem>
          </List>
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            onClick={() => props.history.push("/contact")}
          >
            Gratis offert
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default withRouter(MobileNavbar);
