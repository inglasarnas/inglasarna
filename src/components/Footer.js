import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import {HiPhone, HiMail} from 'react-icons/hi';
import LumonLogo from '../assets/media/LUMON_ORIGINAL_rgb.png';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "flex-start",
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
  box1: {
    width: '40vw',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  box2:{
    width: '24vw',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  box3: {
    width: '31vw',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  marginBottom: {
    marginBottom: '0.5vw',
  },
  paddingLeft: {
    paddingLeft: '0.7vw',
  },
  lumonlogo: {
    width: '11vw',
  },
  linkstyling: {
    color: 'white',
  },
  [theme.breakpoints.down("sm")]: {
  box2: {
    width: '50vw'
  },
    box3: {
    display: 'none',
  },
  lumonlogo :{
    width: '22vw'
  }
},
[theme.breakpoints.down("xs")]: {
  lumonlogo :{
    width: '40vw'
  }
},
link : {
  color: '#fff',
}
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={5} className={classes.box1}>
        <Typography variant="body1" className={classes.marginBottom}>INGLASARNA AB</Typography>
        <div>
        <Typography variant="subtitle1">
          Idegatan 14
        </Typography>
        <Typography variant="subtitle1" className={classes.marginBottom}>
          582 78 LINKÖPING
        </Typography>
        <Typography variant="subtitle1" className={classes.marginBottom}>
          Vardagar 09:00-19:00
        </Typography>
        <Typography variant="subtitle1">
<HiPhone/> <a href="tel:+46735023645" className={classes.link}>+4673 502 3645</a>
        </Typography>
        <Typography variant="subtitle1">
<HiPhone/> <a href="tel:+46763376264" className={classes.link}>+4676 337 6264</a>
        </Typography>
        <Typography variant="subtitle1" className={classes.marginBottom}>
<HiMail/> <a href="mailto:info@inglasarna.se" className={classes.link}>info@inglasarna.se</a>
        </Typography>
        <Typography variant="subtitle1">
          Org nr: 559307-0906
        </Typography>
        </div>
      </Grid>
      <Grid item md={3} className={classes.box2}>
        <Typography variant="body1" className={classes.marginBottom}>Återförsäljare för</Typography>
<img src={LumonLogo} alt="Lumon logotype" className={classes.lumonlogo} />
      </Grid>
      <Grid item md={4} className={classes.box3}>
        <Typography variant="body1" className={classes.marginBottom}>Länkar</Typography>
        <Link to="/how" className={classes.linkstyling}>
        <Typography variant="subtitle1" className={classes.marginBottom}>
        Varför inglasning?
        </Typography>
        </Link>
        <Link to="/products" className={classes.linkstyling}>
        <Typography variant="subtitle1" className={classes.marginBottom}>
          Produkter
        </Typography>
        </Link>
        <Link to="/prices" className={classes.linkstyling}>
        <Typography variant="subtitle1" className={classes.marginBottom}>
          Kostnad
        </Typography>
        </Link>
        <Link to="/contact" className={classes.linkstyling}>
        <Typography variant="subtitle1" className={classes.marginBottom}>
          Kontakta oss
        </Typography>
        </Link>

      </Grid>
    </Grid>
  );
};

export default Footer;
