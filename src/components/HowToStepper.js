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

const steps = ["Steg 1", "Steg 2", "Steg 3"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar non, viverra risus velit vulputate morbi pellentesque mattis. Iaculis porta pellentesque.`;
    case 1:
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar non, viverra risus velit vulputate morbi pellentesque mattis. Iaculis porta pellentesque.";
    case 2:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar non, viverra risus velit vulputate morbi pellentesque mattis. Iaculis porta pellentesque.`;
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
