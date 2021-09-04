import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  topSpace: {
    marginTop: theme.spacing(10),
  },
  leftSpace: {
    marginLeft: theme.spacing(10),
  },
}));

const steps = ["Planering", "Montering", "Garanti"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return `Under vårt första kostnadsfria besök hos er diskuterar vi olika lösningar, mäter och sedan tar vi fram en offert. Vårat mål är att hitta just er perfekta lösning. Vi kommer även gå igenom olika finansieringslösningar.`;
    case 1:
      return "Vi bestämmer tillsammans ett datum för montering. Vi kommer att säkerställa att alla mått är exakta samt att den tänkta lösningen uppfyller era krav. En av våra specialister kommer sedan hem till er för att montera den nya inglasningen.";
    case 2:
      return `Vi har 5 års garanti för både våra produkter och själva monteringen. Produkterna vi arbetar med är CE-märkta säkerhetsglas.`;
    default:
      return "Unknown step";
  }
};

const HowToStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step}>
              <StepLabel>
                <Typography variant="h2">{step}</Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body1">{getStepContent(index)}</Typography>
                <Grid item xs={6} className={classes.topSpace}>
                  <Button
                    size="small"
                    disabled={activeStep === 0}
                    onClick={handlePrev}
                  >
                    Tillbaka
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.leftSpace}
                    disabled={activeStep === steps.length - 1}
                  >
                    Nästa
                  </Button>
                </Grid>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Grid item xs={12} className={classes.leftSpace}>
            <Typography variant="body1">Så lätt var det!</Typography>
            <Button
              size="small"
              onClick={handleReset}
              className={classes.topSpace}
            >
              Tillbaka
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default HowToStepper;
