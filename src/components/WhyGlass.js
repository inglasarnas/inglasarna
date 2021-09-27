import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ProductBalcony from '../assets/media/ProductBalcony.jpg';


const useStyles = makeStyles((theme) => ({

  infoContainer: {
    backgroundImage: `url(${ProductBalcony})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '5vw',
},
box: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: 3,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: theme.spacing(4),
    backdropFilter: "blur(4px)",
},
box1: {
  marginBottom: '1vw',
  marginLeft: '1vw'
},
box2: {
    textAlign: 'center',
    maxWidth: '100%',
},
[theme.breakpoints.down("sm")]: {
    infoContainer: {
        flexFlow: "column",
    }
},
[theme.breakpoints.up("sm")]: {
    infoContainer: {
        flexFlow: "row wrap",
    }
}
}))

const WhyGlass = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.infoContainer}>
        <Grid item xs={12} sm={12} m={5} lg={5} xl={5}  className={[classes.box, classes.box1]}>
            <Typography variant="h4" className={classes.box2}>
                <strong>En inglasning ger ett starkare skydd mot väder, vind och buller.</strong>
            </Typography>
            <Typography variant="body1">
                <ul>
                    <li>En inglasning håller ute vind, regn och snö.</li>
                    <li>Stänger ute ljud och buller med ca 50%.</li>
                    <li>Ger effektivt skydd mot damm och pollen.</li>
                    <li>Minskar slitage på balkong eller terass.</li>
                    <br/>
                </ul>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} m={5} lg={5} xl={5}  className={[classes.box, classes.box1]}>
            <Typography variant="h4" className={classes.box2}>
                <strong>En inglasning höjer värdet, sparar energi och kostnader.</strong>
            </Typography>
            <Typography variant="body1">
                <ul>
                    <li>Enligt statistik höjs värdet i snitt med 10%.</li>
                    <li>Forskning visar även att du kan spara upp till 10,7% i energiförbrukning.</li>
                    <li>Energi och uppvärmningskostnader minskar avsevärt.</li>
                </ul>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} m={5} lg={5} xl={5} className={[classes.box, classes.box1]}>
            <Typography variant="h4" className={classes.box2}>
                <strong>En inglasning ger ett extra utrymme i ditt hem.</strong>
            </Typography>
            <Typography variant="body1">
                <ul>
                    <li>Ger mer yta att leva på</li>
                    <li>Skapar ett vackert rum med panoramakänsla som håller en behaglig värme året runt.</li>
                    <li>Du får ett extra rum som kan användas till flera olika ändamål.</li>
                    <li>Du får ett behagligt ljusinsläpp.</li>
                </ul>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} m={5} lg={5} xl={5} className={[classes.box, classes.box1]}>
            <Typography variant="h4" className={classes.box2}>
                <strong>En inglasning ökar både trygghet och säkerhet.</strong>
            </Typography>
            <Typography variant="body1">
                <ul>
                    <li>Minskar risken för inbrott.</li>
                    <li>Ökar säkerhet och trygghet för både barn och husdjur.</li>
                    <li>Är utrustad med säkra lås, och glaset är gjort av härdat glas.</li>
                    <br/><br/>
                </ul>
            </Typography>
        </Grid>
        <Grid item xs={10} className={[classes.box, classes.box1, classes.box2]}>
            <Typography variant="body1">
    Det finns ett stort antal fördelar med att glasa in din balkong eller terass. 
    Våra inglasningar från Lumon höjer boendekomforten och ger extra utrymme till ditt hem.
    Balkongen eller terassen kan användas året om, oberoende av årstid och blir på så sätt mer användbar.
    Inglasningen skyddar mot regn, snö, vind, avgaser och damm och dämpar dessutom buller.
    Med vår inglasning ökar säkerheten för ditt barn och dina husdjur samt minskar risken för inbrott och sparar energi.
    Inglasningen gör således att ni får ett bättre pris för ert hem vid försäljning eller byte.<br/>
    <strong>En smart investering helt enkelt.</strong>
            </Typography>
        </Grid>
    </Grid>
    )
}
export default WhyGlass;