import React, { useRef, useEffect } from "react";
import RetailerInfoBox from "../components/RetailerInfoBox";
import { Grid, Typography, makeStyles, } from "@material-ui/core";
import BoxWithSideImg from "../components/BoxWithSideImg";
import GridGallery from "../components/GridGallery";
import ProductTerass from "../assets/media/ProductTerass.jpg";
import Carousel01 from "../assets/media/Carousel01.jpg";
import Carousel03 from "../assets/media/Carousel03.jpg";
import { exampleBalconygallery, exampleTerassGallery, exampleTillbehorGallery } from "../assets/assets";


const useStyles = makeStyles((theme) => ({
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
  divider: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '5px',
    borderRadius: '30px',
    margintop: theme.spacing(3),
    marginBottom: "5vw",
  }
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
        <Typography variant="h1"><strong>Våra Produkter</strong></Typography>
        <Typography variant="body1">
        Om ni har fler frågor angående våra produkter är ni välkomna att kontakta oss!
        </Typography>
      </Grid>
      <Grid item xs={12} ref={balkong} className={classes.marginContainer}>
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
                <br/>
                <br/>
                De vanligaste typerna av balkonginglasningar vi levererar är:
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>Ramfritt vik-in-system i fullhöjdsglas</li>
                  <li>Skjutglas med ram-delat system</li>
                  <li>Skjutglas med ram i fullhöjdsglas</li>
                  <li>Balkongtak i glas eller kanalplast</li>
                </ul>
              </Typography>
              <Typography variant="body1">
                Vi är helt säkra på att ni kommer bli riktigt nöjda med er nya
                balkong. Därför vågar vi lova er hela 5 års garanti på material
                och montage.
              </Typography>
            </>
          }
        />
        </Grid>
        <Grid item xs={12} className={classes.marginContainer}>
          <GridGallery title="Se fler balkonginglasningar i vårt galleri." images={exampleBalconygallery} />
        </Grid>
        <div className={classes.divider}></div>
      <Grid item xs={12} ref={terass} className={classes.marginContainer}>
        <BoxWithSideImg
          img={ProductTerass}
          imgAlt="Terrass"
          title="Terrass"
          text={
            <>
              <Typography variant="body1">
                Med en inglasad terrass eller altan får ni ytterligare ett
                trivsamt rum där ni kan vara nära naturen oavsett årstid. Med en
                extra värmekälla kan uterummet användas fullt ut, året om.
              </Typography>
              <Typography variant="body1">
                <br/>
                Vi kan bygga både terrasser, altanlösningar, uteplatser och stora
                skjutpartier åt er. Vår terrassinglasning bygger på ett
                inglasningssystem utan vertikala profiler. Detta gör att det
                lämpar sig mycket väl för terrasser och uterum i både villor och
                flerbostadshus.
              </Typography>
              <Typography variant="body1">
                <br/>
                Vi är helt säkra på att ni kommer bli riktigt nöjda med er nya
                terrass. Därför vågar vi lova er hela 5 års garanti på material
                och montage.
              </Typography>
            </>
          }
        />
      </Grid>

      <Grid item xs={12} className={classes.marginContainer}>
          <GridGallery title="Se fler terrassinglasningar i vårt galleri." images={exampleTerassGallery} />
        </Grid>
      <div className={classes.divider}></div>
      <Grid item xs={12} ref={tillbehör} className={classes.marginContainer}>
        <BoxWithSideImg
          img={Carousel03}
          imgAlt="Solgardiner och persienner"
          title="Solgardiner och Persienner"
          text={
            <>
              <Typography variant="body1">
                Naturligtvis har vi även alla tillbehör ni behöver till er
                inglasade balkong, terrass eller skjutdörr. <br/>
                Vi kan även ta fram skräddarsydda lösningar på efterfrågan.
                "Omöjligt" är ett ord vi aldrig använder.
                <br/>
                <br/>
                Några exempel på vanliga tillbehör:
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>Plisségardiner - solskydd/insynsskydd</li>
                  <li>Persienner - solskydd/insynsskydd</li>
                  <li>Tätningslister - vinterlister mellan glasen</li>
                  <li>Glashyllor - blomsterhyllor</li>
                </ul>
              </Typography>
            </>
          }
        />
      </Grid>

      <Grid item xs={12} className={classes.marginContainer}>
          <GridGallery title="Se fler tillbehör i vårt galleri." images={exampleTillbehorGallery} />
        </Grid>
      <div className={classes.divider}></div>
      <Grid item xs={11}>
        <RetailerInfoBox />
      </Grid>
    </Grid>
  );
};
export default Products;
