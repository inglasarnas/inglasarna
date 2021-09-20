import React, {useRef, useEffect} from "react";
import { Grid, makeStyles } from "@material-ui/core";
import FinanceBox from "../components/FinanceBox";
import { Typography } from "@material-ui/core";
import CardWithBgImg from "../components/CardsWithBgImgs/CardWithBgImg";
import Carousel03 from '../assets/media/Carousel03.jpg';
import Carousel05 from '../assets/media/Carousel05.jpg';


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "cemter",
    marginTop: "5vh",
  },
  spacing: {
    padding: "1vh",
  },
  marginContainer: {
    marginBottom: "5vw",
  },
  textContainer: {
    textAlign: "center",
    marginBottom: "5vh",
  },
  title : {
    marginBottom: '1vh'
  },
  titleContainer: {
    textAlign: 'center',
  }
}));

const Prices = (props) => {
  const privat = useRef(null);
  const brf = useRef(null);
  const finance = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    switch(props.from) {
      case "privat": 
        privat.current.scrollIntoView({behavior: "smooth", block:"center"});
        break;
      case "brf":
        brf.current.scrollIntoView({behavior: "smooth", block:"center"});
        break;
      case "finance":
        finance.current.scrollIntoView({behavior: "smooth", block:"center"});
        break;
      default:
        break;
    }
  },[props.from]);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={[classes.marginContainer, classes.titleContainer]}>
              <Typography variant="h1" className={classes.title}>
          Kostnad
        </Typography>
        <Typography variant="body1">
          Om ni har fler frågor angående priser, kontakta
          oss gärna!
        </Typography>
      </Grid>
      <Grid item xs={12} className={[classes.textContainer, classes.marginContainer]} ref={privat}>
        <CardWithBgImg
          title="Privatperson"
          text={
            <Typography variant="body1">
              Priset på en inglasad balkong beror på flera olika faktorer. 
              Inglasningens form, mått, monteringssätt, typ av glas och isolering samt tekniska krav är saker som styr slutpriset.
              Vi börjar med att komma till er och gör en undersökning, detta är helt kostnadsfritt.
              Vi tar alltid fram en individuellt anpassad offert när vi ska utföra en inglasning.
              Vi måste se över de olika faktorerna som påverkar och ta de olika mått som behövs innan vi kan presentera ett förslag
              på inglasning för er, samt en planerings- och kostnadskalkyl.
              Väljer ni oss som leverantör så väljer ni även patenterade produkter med säkerhetsglas och generösa garantier på både material och montering.
              Varmt välkomna att kontakta oss idag, så bokar vi en tid för ett gratis hembesök!
            </Typography>
          }
          backgroundImage={Carousel05}
        />
      </Grid>
      <Grid item xs={12} className={[classes.textContainer, classes.marginContainer]} ref={brf}>
        <CardWithBgImg
          title="BRF & Företag"
          text={
            <Typography variant="body1">
              Hur mycket en inglasning kostar för en bostadsrättsförening eller för ett företag beror alltid på er fastighets förutsättningar.
              Det är flera faktorer som spelar in - hur stor inglasningen ska vara, vilken modell av inglasning ni väljer samt tillval som solskydd, infattning och typ av glas.
              Vi börjar alltid med att komma till er för att göra en undersökning, detta är helt kostnadsfritt.
              Är ni fler i en bostadsrättsförening eller i ett företag som har önskemål om att glasa in balkong eller terass kan detta vara värt att ta upp med styrelsen i er bostadsrättsförening.
              Kan vi utföra inglasning av flera balkonger eller terasser samtidigt blir priset naturligtvis bättre, då vi kan minska antalet transporter och optimera processen.
              Vi kommer därför först till er för att undersöka era specifika villkor samt tar fram mått.
              Först därefter kan vi presentera att förslag på inglasning för er samt ge er en planerings- och kostnadskalkyl.
            </Typography>
          }
          backgroundImage={Carousel03}
        />
      </Grid>
      <Grid item xs={11} ref={finance}>
        <FinanceBox />
      </Grid>
    </Grid>
  );
};

export default Prices;
