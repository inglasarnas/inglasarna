import React from "react";
import ContactBox from "../components/ContactBoxes/ContactBox";
import FormContainer from "../components/Form/FormContainer";
import { Typography, makeStyles } from "@material-ui/core";
import { useEffect, useRef } from "react";

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
  },
  marginBottom5: {
    marginBottom: "5vh",
  },
  marginBottom1: {
    marginBottom: "1vh",
  },
  marginContainer: {
    marginBottom: '5vw',
  },
  title: {
    marginBottom: "1vh",
  },
}));
const Contact = ({ from }) => {
  const classes = useStyles();
  const omOss = useRef(null);

  useEffect(() => {
    if (from === "om") {
      omOss.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [from]);
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="h1" className={classes.title}>
          {" "}
          Kontakta oss
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
        image="https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        name="Förnamn Efternamn"
        number="070 000 00 00"
        email="fornamn@minemail.com"
      />
      <div className={classes.marginBottom5} />
      <FormContainer from={from} />
      <div className={classes.marginBottom5} />
      <div className={classes.textContainer} ref={omOss}>
        <Typography variant="h2" className={classes.title}>
          Om oss
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          porttitor arcu mollis dignissim phasellus suspendisse risus bibendum
          pulvinar. Justo, mauris ac ut dui. Suspendisse orci vivamus
          suspendisse convallis imperdiet montes, in auctor orci. Tempus eu quam
          consequat, ac tempor. Elit dictumst diam nibh at ut. Elit malesuada
          placerat tempus egestas venenatis diam blandit. Gravida lobortis
          convallis sodales proin interdum. Lectus facilisi in quam metus. Sed
          massa eget tempus purus nunc sit purus. Nec sit pellentesque a lacus
          fringilla. Volutpat pulvinar integer massa tortor purus malesuada
          blandit nibh dignissim. Arcu orci, turpis vulputate nulla tristique ut
          eget sed orci. Massa eget a ac magna ornare lacus enim. Risus egestas
          risus, netus tellus scelerisque. Egestas ut facilisis arcu est
          phasellus. Leo sit id in hendrerit risus, ullamcorper eget duis nulla.
          Sit proin lorem eget dolor tincidunt. Elementum egestas eget mattis
          auctor ac non.
        </Typography>
      </div>
    </div>
  );
};
export default Contact;
