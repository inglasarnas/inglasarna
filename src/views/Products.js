import React, { useRef, useEffect } from "react";
import RetailerInfoBox from "../components/RetailerInfoBox";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import BoxWithSideImg from "../components/BoxWithSideImg";
import ProductTerass from "../assets/media/ProductTerass.jpg";
import Carousel01 from "../assets/media/Carousel01.jpg";
import Carousel03 from "../assets/media/Carousel03.jpg";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5vh",
  },
  marginContainer: {
    marginBottom: "5vw",
  },
  textContainer: {
    marginBottom: "5vh",
    textAlign: "center",
  },
}));
const Products = ({ from }) => {
  const balkong = useRef(null);
  const terass = useRef(null);
  const tillbehör = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    switch (from) {
      case "balkong":
        balkong.current.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "terass":
        terass.current.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "tillbehör":
        tillbehör.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      default:
        break;
    }
  }, [from]);

  return (
    <Grid container className={classes.container}>
      <Grid
        item
        xs={12}
        className={[classes.textContainer, classes.marginContainer]}
      >
        <Typography variant="h1">Våra Produkter</Typography>
        <Typography variant="body1">
          Om ni har fler frågor angående våra produkter, välkomna att kontakta
          oss!
        </Typography>
      </Grid>
      <Grid item xs={12} ref={balkong}>
        <BoxWithSideImg
          img={Carousel01}
          imgAlt="Balkong"
          title="Balkong"
          text={
            <>
              <Typography variant="body1">
                Vilken inglasning passar just er? Under vårt kostnadsfria första
                möte, ger vi er råd och tips om vad som skulle passa er balkong.
                Vi har lång erfarenhet av att skräddarsy lösningar till
                privatpersoner, bostadsrättsföreningar och företag.
              </Typography>
              <Typography variant="body1">
                De vanligaste typerna av balkonginglasningar vi levererar är:
                <ul>
                  <li>Ramfritt vik-in-system i fullhöjdsglas</li>
                  <li>Skjutglas med ram - delat system</li>
                  <li>Skjutglas med ram i fullhöjdsglas</li>
                  <li>Balkongtak i glas eller kanalplast</li>
                </ul>
              </Typography>
              <Typography variant="body1">
                Vi är helt säkra på att ni kommer bli riktigt nöjda med er nya
                balkong. Därför vågar vi lova er hela 5 års garanti på material
                och montage.
                <br />
                <br />
                Se mer i vårat bildgalleri:
              </Typography>
            </>
          }
        />
      </Grid>
      <Grid item xs={12} ref={terass}>
        <BoxWithSideImg
          img={ProductTerass}
          imgAlt="Terass"
          title="Terass"
          text={
            <>
              <Typography variant="body1">
                Med en inglasad terass eller altan får ni ytterligare ett
                trivsamt rum där ni kan vara nära naturen oavsett årstid. Med en
                extra värmekälla kan uterummet användas fullt ut, året om.
              </Typography>
              <Typography variant="body1">
                Vi kan bygga både terasser, altanlösningar, uteplatser och stora
                skjutpartier åt er. Vår terassinglasning bygger på ett
                inglasningssystem utan vertikala profiler. Detta gör att det
                lämpar sig mycket väl för terasser och uterum i både villor och
                flerbostadshus.
              </Typography>
              <Typography variant="body1">
                Vi är helt säkra på att ni kommer bli riktigt nöjda med er nya
                balkong. Därför vågar vi lova er hela 5 års garanti på material
                och montage.
                <br />
                <br />
                Se mer i vårat bildgalleri:
              </Typography>
            </>
          }
        />
      </Grid>
      <Grid item xs={12} ref={tillbehör}>
        <BoxWithSideImg
          img={Carousel03}
          imgAlt="Solgardiner och persienner"
          title="Solgardiner och Persienner"
          text={
            <>
              <Typography variant="body1">
                Naturligtvis har vi även alla tillbehör ni behöver till er
                inglasade balkong, terass eller skjutdörr. Vi kan även ta fram
                lösningar som ligger helt utanför det "vanliga" om ni vill.
                "Omöjligt" är ett ord vi aldrig använder.
              </Typography>
              <Typography variant="body1">
                Några exempel på vanliga tillbehör:
                <ul>
                  <li>Plisségardiner - solskydd/insynsskydd</li>
                  <li>Persienner - solskydd/insynsskydd</li>
                  <li>Tätningslister - vinterlister mellan glasen</li>
                  <li>Glashyllor - blomsterhyllor</li>
                </ul>
              </Typography>
              <Typography variant="body1">
                Se mer i vårat bildgalleri:
              </Typography>
            </>
          }
        />
      </Grid>
      <Grid item xs={11}>
        <RetailerInfoBox />
      </Grid>
    </Grid>
  );
};
export default Products;
