import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import {HiPhone, HiMail} from 'react-icons/hi';
import LumonLogo from '../assets/media/lumonlogo.png';


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
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={5} className={classes.box1}>
        <Typography variant="body1" className={classes.marginBottom}>Kontakt</Typography>
        <div>
        <Typography variant="subtitle1">
          Adressrad 1
        </Typography>
        <Typography variant="subtitle1">
          Adressrad 2
        </Typography>
        <Typography variant="subtitle1" className={classes.marginBottom}>
          Adressrad 3
        </Typography>
        <Typography variant="subtitle1">
<HiPhone/> 07000000000
        </Typography>
        <Typography variant="subtitle1">
<HiMail/> email@email.com
        </Typography>
        </div>
      </Grid>
      <Grid item md={3} className={classes.box2}>
        <Typography variant="body1" className={classes.marginBottom}>Återförsäljare för</Typography>
<img src={LumonLogo} alt="Lumon logotype" className={classes.lumonlogo} />
      </Grid>
      <Grid item md={4} className={classes.box3}>
        <Typography variant="body1" className={classes.marginBottom}>Annan information</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          sodales nulla elementum.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
