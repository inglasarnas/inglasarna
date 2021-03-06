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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter, Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Logo from "../../assets/media/logo_responsive.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "10vh",
    position: "fixed",
    zIndex: 1100,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  drawer: {
    height: '90vh',
  },
  list: {
    height: 'inherit',
    display: 'flex',
    flexFlow: 'column',
  },
  listItem: {
    padding: '5vw 5vw',
  },
  nestedListContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "start",
    padding: 0,
  },
  nestedList : {
    marginLeft: '4vw',
  },
  logo: {
    height: "7vh",
    marginTop: 12,
  },
  menuIcon: {
    fontSize: "5vh",
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
          className={classes.drawer}
        >
          <IconButton>
            <FiX />
          </IconButton>
          <List className={classes.list}>
            <ListItem button divider onClick={() => props.history.push("/how")} className={classes.listItem}>
              <Typography variant="h3" color="primary">
                Hur g??r det till?
              </Typography>
            </ListItem>
            <ListItem divider className={classes.nestedListContainer}>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/products")}
              className={classes.listItem}
            >
              <Typography variant="h3" color="primary">
                Produkter
              </Typography>
            </ListItem >
            <List className={classes.nestedList}>
            <ListItem
              button
              onClick={() => props.history.push("/products/balkong")}
            >
              <Typography variant="h4" color="primary">
                Balkong
              </Typography>
              </ListItem>

            <ListItem
              button
              onClick={() => props.history.push("/products/terass")}
            >
              <Typography variant="h4" color="primary">
                Terrass
              </Typography>
              </ListItem>
              <ListItem
              button
              onClick={() => props.history.push("/products/tillbeh??r")}
            >
              <Typography variant="h4" color="primary">
                Tillbeh??r
              </Typography>
              </ListItem>
              
              </List>
              </ListItem>
              <ListItem divider className={classes.nestedListContainer}>
            <ListItem
              button
              divider
              className={classes.listItem}
              onClick={() => props.history.push("/prices")}

            >
              <Typography variant="h3" color="primary">
                Kostnad
              </Typography>
            </ListItem >
            <List className={classes.nestedList}>
            <ListItem
              button
              onClick={() => props.history.push("/prices/privat")}
            >
              <Typography variant="h4" color="primary">
                Privatperson
              </Typography>
              </ListItem>
              <ListItem
              button
              onClick={() => props.history.push("/prices/brf")}
            >
              <Typography variant="h4" color="primary">
                BRF & F??retag
              </Typography>
              </ListItem>

            <ListItem
              button
              onClick={() => props.history.push("/prices/finance")}
            >
              <Typography variant="h4" color="primary">
                Finansiering
              </Typography>
              </ListItem>
              </List>
              </ListItem>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/gallery")}
              className={classes.listItem}
            >
              <Typography variant="h3" color="primary">
                Galleri
              </Typography>
            </ListItem>
            <ListItem divider className={classes.nestedListContainer}>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/contact")}
              className={classes.listItem}
            >
              <Typography variant="h3" color="primary">
                Kontakta Oss
              </Typography>
            </ListItem >
            <List className={classes.nestedList}>
            <ListItem
              button
              onClick={() => props.history.push("/contact/brf")}
            >
              <Typography variant="h4" color="primary">
                BRF
              </Typography>
              </ListItem>
              <ListItem
              button
              onClick={() => props.history.push("/contact/brf")}
            >
              <Typography variant="h4" color="primary">
                F??retag
              </Typography>
              </ListItem>

            <ListItem
              button
              onClick={() => props.history.push("/contact/privat")}
            >
              <Typography variant="h4" color="primary">
                Privatperson
              </Typography>
              </ListItem>
              </List>
              </ListItem>
            <ListItem
              button
              divider
              onClick={() => props.history.push("/contact/om")}
              className={classes.listItem}
            >
              <Typography variant="h3" color="primary">
              Om Oss
              </Typography>
              </ListItem>
              <ListItem 
              button
              divider
              onClick={() => props.history.push('/contact/privat')}
              className={classes.listItem}
              >
                <Typography variant="h3" color="primary">
                  Gratis Offert
                </Typography>
              </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default withRouter(MobileNavbar);
