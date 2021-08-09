import React from "react";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Ange ditt namn.")
    .min(2, "Ditt namn bör innehålla minst 2 bokstäver.")
    .required("Du måste fylla i ett namn."),
  email: yup
    .string("Ange din e-post.")
    .required("Du måste ange en e-post")
    .email("Ange en giltig e-post, ex: namn@email.se"),
  phone: yup
    .string("Ange ett nummer.")
    .min(9, "Ett telefonnummer bör innehålla minst 9 siffror."),
  message: yup
    .string("Skriv ett meddelande.")
    .min(3, "Ett meddelande bör innehålla minst 3 bokstäver.")
    .required("Du måste fylla i ett meddelande."),
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
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    "@media (max-width: 960px)": {
      maxWidth: "none",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      className={classes.container}
    >
      <Grid
        item
        xs={12}
        s={12}
        md={6}
        lg={6}
        container
        spacing={3}
        className={classes.grid}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="name"
            name="name"
            required={true}
            label="Namn"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="email"
            name="email"
            required={true}
            label="E-post"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="phone"
            name="phone"
            label="Telefon"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            multiline
            rows={6}
            required={true}
            id="message"
            name="message"
            label="Meddelande"
            type="text"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" type="submit">
            Skicka
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default ContactForm;
