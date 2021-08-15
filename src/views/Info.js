import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ProductBalcony from '../assets/media/ProductBalcony.jpg';

const useStyles = makeStyles(() => ({
container: {
    backgroundImage: url(`${ProductBalcony}`),
    backgroundSize: 'cover',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
}
}));

const Info = () => {
const classes = useStyles();
    return(
        <Grid container className={classes.container}>
            <Grid item xs={5} className={classes.box}>
                <Typography variant="h2" color="primary">
                    En inglasning ger ett starkare skydd mot väder, vind och buller.
                </Typography>
                <Typography variant="body1" color="primary">
                    <ul>
                        <li>En inglasning håller ute vind, regn och snö</li>
                        <li>Stänger ute ljud och buller med ca 50%</li>
                        <li>Ger effektivt skydd mot damm och pollen</li>
                        <li>Minskar slitage på balkong eller terass</li>
                    </ul>
                </Typography>
            </Grid>
            <Grid item xs={5} className={classes.box}>
                <Typography variant="h2" color="primary">
                    En inglasning höjer värdet, sparar energi och kostnader.
                </Typography>
                <Typography variant="body1" color="primary">
                    <ul>
                        <li>Enligt statistik höjs värdet i snitt med 10%</li>
                        <li>Forskning visar även att du kan spara upp till 10,7% i energiförbrukning</li>
                        <li>Energi och uppvärmningskostnader minskar avsevärt</li>
                    </ul>
                </Typography>
            </Grid>
            <Grid item xs={5} className={classes.box}>
                <Typography variant="h2" color="primary">
                    En inglasning ger ett extra utrymme i ditt hem
                </Typography>
                <Typography variant="body1" color="primary">
                    <ul>
                        <li>Ger mer yta att leva på</li>
                        <li>Skapar ett vackert rum med panoramakänsla som håller en behaglig värme året runt</li>
                        <li>Du får ett extra rum som kan användas till flera olika ändamål</li>
                        <li>Du får ett behagligt ljusinsläpp</li>
                    </ul>
                </Typography>
            </Grid>
            <Grid item xs={5} className={classes.box}>
                <Typography variant="h2" color="primary">
                    En inglasning ökar både trygghet och säkerhet
                </Typography>
                <Typography variant="body1" color="primary">
                    <ul>
                        <li>Minskar risken för inbrott</li>
                        <li>Ökar säkerhet och trygghet för både barn och husdjur</li>
                        <li>Är utrustad med säkra lås, och glaset är gjort av härdat glas</li>
                    </ul>
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.box}>
                <Typography variant="body1" color="primary">
        Det finns ett stort antal fördelar med att glasa in din balkong eller terass. 
        Våra inglasningar från Lumon höjer boendekomforten och ger extra utrymme till ditt hem.
        Balkongen eller terassen kan användas året om, oberoende av årstid och blir på så sätt mer användbar.
        Inglasningen skyddar mot regn, snö, vind, avgaser och damm och dämpar dessutom buller.
        Med vår inglasning ökar säkerheten för ditt barn och dina husdjur samt minskar risken för inbrott och sparar energi.
        Inglasningen gör således att ni får ett bättre pris för ert hem vid försäljning eller byte.
        En smart investering helt enkelt.
                </Typography>
            </Grid>
        </Grid>
    )
}
export default Info; 