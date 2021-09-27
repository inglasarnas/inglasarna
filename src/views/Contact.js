import React from "react";
import ContactBox from "../components/ContactBoxes/ContactBox";
import FormContainer from "../components/Form/FormContainer";
import { Typography, makeStyles } from "@material-ui/core";
import { useEffect, useRef } from "react";
import logo from "../assets/media/logotyp.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    marginTop: "5vh",
  },
  textContainer: {
    textAlign: "center",
    marginBottom: "5vh",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "40vw",
    "@media (max-width: 700px)": {
      width: "90vw",
    },
  },
  marginBottom5: {
    marginBottom: "5vh",
  },
  marginBottom1: {
    marginBottom: "1vh",
  },
  marginContainer: {
    marginBottom: "5vw",
  },
  title: {
    marginBottom: "1vh",
  },
  boldText: {
    fontWeight: 600,
  },
}));
const Contact = ({ from }) => {
  const classes = useStyles();
  const omOss = useRef(null);
  const form = useRef(null);

  useEffect(() => {
    switch (from) {
      case "om":
        omOss.current.scrollIntoView({ behavior: "smooth", block: "start"}) ;
        break;
      case "brf":
        form.current.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "privat":
        form.current.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      default:
        break;
    }
  }, [from]);
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="h1" className={classes.title}>
          {" "}
          <strong>Kontakta oss</strong>
        </Typography>
        <Typography variant="body1">
          Välkommen att kontakta oss för kostnadsfria hembesök eller om du vill
          veta mer om våra produkter och system vi arbetar med. Du når oss på
          antingen e-post, via telefon eller så kan du använda dig av
          kontaktformuläret här nertill.
        </Typography>
      </div>
      <div className={classes.marginBottom5} />
      <ContactBox
        image={logo}
        name="+4676 337 6264"
        number="+4673 502 3645"
        email="info@inglasarna.se"
      />
      <div className={classes.marginBottom5} />
      <div ref={form}></div>
      <FormContainer from={from} />
      <div className={classes.marginBottom5} />
      <div className={classes.textContainer} ref={omOss}>
        <Typography variant="h2" className={classes.title}>
          Vi är specialister på inglasning i Linköping och Norrköping
        </Typography>
        <Typography variant="body1" className={classes.marginBottom1}>
          Grundarna av Inglasarna har över 13 års erfarenhet av Lumons
          inglasning, såväl för privatperson som bostadsrättsföreningar. Vi
          arbetar lokalt i Linköping och Norrköping med omnejd. Det gör att vi
          känner till villkoren för inglasning väldigt bra för området och har
          nära till våra kunder, varesig det rör sig om en ny inglasning eller
          service av en befintlig sådan.
        </Typography>
        <Typography variant="h3" className={classes.marginBottom1}>
          Vi är säkra på kvaliteten i vårat arbete och ger dig därför 5 års
          garanti på både installation och produkt.
        </Typography>
        <Typography variant="body1" className={classes.marginBottom1}>
          För oss är det viktigt att ni får den produkt som ni önskat er. Därför
          kommer vi ut till er för att se över vilka speciella villkor som
          gäller hos just er, tar mått och går igenom vilka möjligheter som
          passar er. Därefter kan vi presentera ett förslag på lösning, kostnad
          och tid. För representanter av bostadsrättsföreningar eller företag så
          kan vi ta fram ett förmånligt förslag för hela fastigheten. Vi hjälper
          dig sedan att presentera förslaget för styrelsen och övriga medlemmar.
        </Typography>
        <Typography variant="h3" className={classes.marginBottom1}>
          För att du ska få den bästa kvaliteten så sköter vi hela
          inglasningsprocessen själva.
        </Typography>
        <Typography variant="body1">
          Vi vill kunna garantera er att kvaliteten blir den bästa som ni kan
          hitta på marknaden. Så vi kommer att hjälpa er från planering till
          bygglov, från finansiering till leverans och montage. Det är därför vi
          också vågar ge dig en garanti på 5 år, på både installation och
          material. Är ni intresserad så kontakta oss, så gör vi ett
          kostnadsfritt besök hos er!
        </Typography>
      </div>
    </div>
  );
};
export default Contact;
