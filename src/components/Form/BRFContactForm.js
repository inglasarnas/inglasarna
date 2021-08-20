import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  FormControlLabel,
  FormLabel,
  Radio,
  FormControl,
  RadioGroup,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  brfName: yup
    .string("Ange ditt BRF / Föreningens namn.")
    .min(4, "Föreningens namn bör innehålla minst 4 bokstäver.")
    .required("Du måste fylla i ett namn."),
  street: yup
    .string("Ange föreningens address.")
    .required("Du måste fylla i en gatuadress."),
  postalCode: yup
    .string("Ange föreningens postnummer.")
    .min(5, "Du måste minst ha 5 bokstäver.")
    .required("Du måste fylla i ett postnummer."),
  city: yup.string("Ange föreningens ort.").required("Du måste ange en ort."),
  email: yup
    .string("Ange en mail address")
    .required("Du måste ange en email address."),
  phoneNumber: yup
    .string("Ange ett telefonnummer.")
    .required("Du måste ange ett telefonnummer"),
  contact: yup
    .string("Ange en kontakt person / referens")
    .required("Du måste ange en referens / kontaktperson"),
  byggLov: yup
    .string("Ange om bygglov finns eller ej.")
    .required("Du måste ange om bygglov finns."),
  amountInterested: yup
    .string("Ange hur många som är intresserade")
    .required("Du måste ange hur många som är intresserade."),
});

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 6,
    padding: theme.spacing(2),
    width: "100%",
  },
  grid: {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(4px)",
    maxWidth: "none"
  },
}));

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      brfName: "",
      brfSiteName: "",
      street: "",
      postalCode: "",
      city: "",
      email: "",
      phoneNumber: "",
      contact: "",
      byggLov: "",
      amountInterested: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendToNetlify(values)
    },
  });

  const sendToNetlify = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "BRF Contact", ...data }),
    })
      .then(() => console.log(data))
      .catch((error) => alert(error));
  };

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      className={classes.container}
    >
      <Grid item container xs={12} spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="body1">BRF Uppgifter:</Typography>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="brfName"
            name="brfName"
            required={true}
            label="BRF / Föreningens namn"
            type="text"
            value={formik.values.brfName}
            onChange={formik.handleChange}
            error={formik.touched.brfName && Boolean(formik.errors.brfName)}
            helperText={formik.touched.brfName && formik.errors.brfName}
          />
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="brfSiteName"
            name="brfSiteName"
            label="Ev. föreningshemsida"
            type="text"
            value={formik.values.brfSiteName}
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1">Adress Uppgifter:</Typography>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="street"
            name="street"
            required={true}
            label="Gatuadress"
            type="text"
            value={formik.values.street}
            onChange={formik.handleChange}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />
        </Grid>

        <Grid item xs={12} lg={4} md={4}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="postalCode"
            name="postalCode"
            required={true}
            label="Postnummer"
            type="text"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
          />
        </Grid>

        <Grid item xs={12} lg={4} md={4}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="city"
            name="city"
            required={true}
            label="Ort"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1">Kontakt Uppgifter:</Typography>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="email"
            name="email"
            required={true}
            label="E-postadress"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item xs={12} lg={4} md={4}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="phoneNumber"
            name="phoneNumber"
            required={true}
            label="Telefonnummer"
            type="text"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>

        <Grid item xs={12} lg={4} md={4}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="contact"
            name="contact"
            required={true}
            label="Er referens / Kontaktperson"
            type="text"
            value={formik.values.contact}
            onChange={formik.handleChange}
            error={formik.touched.contact && Boolean(formik.errors.contact)}
            helperText={formik.touched.contact && formik.errors.contact}
          />
        </Grid>

        <Grid item xs={12} lg={6} md={6}>
          <FormControl
            component="fieldset"
            error={formik.touched.byggLov && Boolean(formik.errors.byggLov)}
          >
            <FormLabel component="legend">
              Finns bygglov for inglassning?
            </FormLabel>
            <RadioGroup
              id="byggLov"
              name="byggLov"
              required={true}
              value={formik.values.byggLov}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="Ja"
                control={<Radio color="primary" />}
                label="Ja"
              />
              <FormControlLabel
                value="Nej"
                control={<Radio color="primary" />}
                label="Nej"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} lg={6} md={6}>
          <FormControl
            component="fieldset"
            error={
              formik.touched.amountInterested &&
              Boolean(formik.errors.amountInterested)
            }
          >
            <FormLabel component="legend">
              Hur många är intresserade av att glasa in?
            </FormLabel>
            <RadioGroup
              id="amountInterested"
              name="amountInterested"
              required={true}
              value={formik.values.amountInterested}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="1-9"
                control={<Radio color="primary" />}
                label="1-9"
              />
              <FormControlLabel
                value="10-19"
                control={<Radio color="primary" />}
                label="10-19"
              />
              <FormControlLabel
                value="20-29"
                control={<Radio color="primary" />}
                label="20-29"
              />
              <FormControlLabel
                value="30 eller fler"
                control={<Radio color="primary" />}
                label="30 eller fler"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            multiline
            rows={6}
            id="message"
            name="message"
            label="Övriga upplysningar t.ex tidsplan (valfritt)"
            type="text"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" type="submit">
            Begär Offert
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default ContactForm;
