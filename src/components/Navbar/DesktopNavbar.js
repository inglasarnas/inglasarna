import React, { useState } from "react";
import {
  Grid,
  Menu,
  Fade,
  Typography,
  makeStyles,
  MenuItem,
  List,
  ListItem,
} from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import Logo from "../../assets/media/logotyp.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "10vh",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1100,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  logo: {
    height: "9vh",
    marginLeft: 16,
  },
  linkContainer: {
    width: "100%",
    display: "flex",
    marginLeft: "auto",
    marginRight: 16,
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  },
  caret: {
    paddingLeft: 8,
  },
  dropdownMenu: {
    marginTop: "5vh",
  },
  dropdownLink: {
    padding: "1vw",
  },
}));
const DesktopNavbar = (props) => {
  const [productsAnchor, setProductsAnchor] = useState(null);
  const [kontaktAnchor, setKontaktAnchor] = useState(null);
  const [pricesAnchor, setPricesAnchor] = useState(null);

  const classes = useStyles();
  const handlePricesClick = (e) => {
    setPricesAnchor(e.currentTarget);
  };
  const handlePricesClose = () => {
    setPricesAnchor(null);
  };
  const handlePricesPush = (target) => {
    setPricesAnchor(null);
    props.history.push(target);
  }

  const handleProductsClick = (e) => {
    setProductsAnchor(e.currentTarget);
  };

  const handleProductsClose = () => {
    setProductsAnchor(null);
  };
  const handleProductsPush = (target) => {
    setProductsAnchor(null);
    props.history.push({
      pathname: target,
    });
  };

  const handleKontaktClick = (e) => {
    setKontaktAnchor(e.currentTarget);
  };

  const handleKontaktClose = () => {
    setKontaktAnchor(null);
  };
  const handleKontaktPush = (target) => {
    setKontaktAnchor(null);
    props.history.push(target);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item md={2}>
        <Link to="/">
          <img src={Logo} alt="inglasarnas logotyp" className={classes.logo} />
        </Link>
      </Grid>
      <Grid item md={10}>
        <List component="nav" className={classes.linkContainer}>
          <ListItem button onClick={() => props.history.push("/how")}>
            <Typography color="primary" variant="h4" className={classes.text}>
              Varför inglasning?
            </Typography>
          </ListItem>
          <ListItem
            button
            aria-controls="productsMenu"
            aria-haspopup="true"
            onClick={handleProductsClick}
          >
            <Typography color="primary" variant="h4" className={classes.text}>
              Produkter <AiFillCaretDown className={classes.caret} />
            </Typography>
          </ListItem>
          <ListItem
            button
            aria-controls="pricesMenu"
            aria-haspopup="true"
            onClick={handlePricesClick}
          >
            <Typography color="primary" variant="h4" className={classes.text}>
              Kostnad <AiFillCaretDown className={classes.caret} />
            </Typography>
          </ListItem>
          <ListItem button onClick={() => props.history.push("/gallery")}>
            <Typography color="primary" variant="h4" className={classes.text}>
              Galleri
            </Typography>
          </ListItem>
          <ListItem
            button
            aria-controls="KontaktMenu"
            aria-haspopup="true"
            onClick={handleKontaktClick}
          >
            <Typography color="primary" variant="h4" className={classes.text}>
              Kontakt <AiFillCaretDown className={classes.caret} />
            </Typography>
          </ListItem>
          <ListItem
            button
            onClick={() => props.history.push("/contact/privat")}
          >
            <Typography color="primary" variant="h4" className={classes.text}>
              Gratis offert
            </Typography>
          </ListItem>
        </List>
      </Grid>
      {/* KOSTNAD MENY*/}
      <Menu
        id="pricesMenu"
        anchorEl={pricesAnchor}
        open={Boolean(pricesAnchor)}
        onClose={handlePricesClose}
        TransitionComponent={Fade}
        className={classes.dropdownMenu}
      >
        <MenuItem
          onClick={() => handlePricesPush("/prices/privat")}
          className={classes.dropdownLink}
        >
          Privat
        </MenuItem>
        <MenuItem
          onClick={() => handlePricesPush("/prices/brf")}
          className={classes.dropdownLink}
        >
          Brf & Företag
        </MenuItem>
        <MenuItem
          onClick={() => handlePricesPush("/prices/finance")}
          className={classes.dropdownLink}
        >
          Finansiering
        </MenuItem>
      </Menu>
      {/* PRODUKT-MENY */}
      <Menu
        id="productsMenu"
        anchorEl={productsAnchor}
        open={Boolean(productsAnchor)}
        onClose={handleProductsClose}
        TransitionComponent={Fade}
        className={classes.dropdownMenu}
      >
        <MenuItem
          onClick={() => handleProductsPush("/products/balkong")}
          className={classes.dropdownLink}
        >
          Balkong
        </MenuItem>
        <MenuItem
          onClick={() => handleProductsPush("/products/terass")}
          className={classes.dropdownLink}
        >
          Terass
        </MenuItem>
        <MenuItem
          onClick={() => handleProductsPush("/products/tillbehör")}
          className={classes.dropdownLink}
        >
          Tillbehör
        </MenuItem>
      </Menu>
      {/* KONTAKT_MENY */}
      <Menu
        id="kontaktMenu"
        anchorEl={kontaktAnchor}
        open={Boolean(kontaktAnchor)}
        onClose={handleKontaktClose}
        TransitionComponent={Fade}
        className={classes.dropdownMenu}
      >
        <MenuItem
          onClick={() => handleKontaktPush("/contact/privat")}
          className={classes.dropdownLink}
        >
          Privat
        </MenuItem>
        <MenuItem
          onClick={() => handleKontaktPush("/contact/brf")}
          className={classes.dropdownLink}
        >
          BRF
        </MenuItem>
        <MenuItem
          onClick={() => handleKontaktPush("/contact/brf")}
          className={classes.dropdownLink}
        >
          Företag
        </MenuItem>
        <MenuItem
          onClick={() => handleKontaktPush("/contact/om")}
          className={classes.dropdownLink}
        >
          Om Oss
        </MenuItem>
      </Menu>
    </Grid>
  );
};

export default withRouter(DesktopNavbar);
