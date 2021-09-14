import React from 'react';
import { Button, Grid, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import background from '../assets/media/Finansbox.jpeg'
const useStyles = makeStyles((theme) => ({
  container : {
    background: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(10),
    width: '100%',
  },
  margin: {
    margin: '2vw'
  },
  text: {
    maxWidth: '60vw',
  },
  textContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxSizing: 'border-box',
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: 3,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: theme.spacing(),
    backdropFilter: "blur(4px)",
    width: "70vw",
  },
  wasaContainer : {
    background: 'url("https://cdn.bytbilcms.com/uploads/sites/57/2020/03/wasa-kredit-logo.png")',
    backgroundSize: '100%',
    height: '10vw',
}

}))
const FinanceBox = () => {
const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item xs={12} md={10} className={classes.textContainer}>
        <Typography variant='h2' className={classes.margin}>Vi hjälper er med finansiering</Typography>
        <Typography variant='body1' className={classes.text}>
          Om du funderar på att ta ett lån för att kunna finansiera idén om balkonginglasning, så samarbetar Inglasarna med Wasa Kredit.
          Det finns möjlighet att låna mellan 10.000 till 250.000 kronor utan säkerhet. Givetvis har de några grundkrav.<br/><br/>
          Tryck på knappen nedan för att beräkna din finansieringskostnad och läsa mer om finanseringen.
        </Typography>
        <img src="https://cdn.bytbilcms.com/uploads/sites/57/2020/03/wasa-kredit-logo.png" alt="wasa kredit logotyp" className={classes.wasaContainer}/>
        <Button variant='contained' color='primary' className={classes.margin}>
          Räkna på er finansiering
        </Button>
      </Grid>
    </Grid>
  );
};
export default FinanceBox;
