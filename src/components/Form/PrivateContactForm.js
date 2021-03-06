import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import CircularProgress from "@material-ui/core/CircularProgress";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

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
  sendBox: {
    display: "flex",
    alignItems: "center",
  },
  sendBtn: {
    marginRight: "2rem",
  },
  successIcon: {
    marginRight: "2rem",
    fontSize: "33px",
    color: "green",
  },
  errorIcon: {
    marginRight: "2rem",
    fontSize: "33px",
    color: "red",
  },
}));

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [formLoading, setFormLoadig] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

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
      sendToNetlify(values);
    },
  });

  const sendToNetlify = (data) => {
    setFormLoadig(true);
    setTimeout(() => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "Private Contact", ...data }),
      })
        .then((data) => {
          if (data.status === 200) {
            setFormLoadig(false);
            setFormError(false);
            setFormSuccess(true);
          } else {
            setFormLoadig(false);
            setFormSuccess(false);
            setFormError(true);
          }
        })
        .catch((error) => {
          setFormLoadig(false);
          setFormSuccess(false);
          setFormError(true);
        });
    }, 1000);
  };

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
        <Grid item xs={12} className={classes.sendBox}>
          <Button
            className={classes.sendBtn}
            color="primary"
            variant="contained"
            type="submit"
          >
            Skicka
          </Button>
          {formLoading && <CircularProgress />}
          {formSuccess ? (
            <>
              <CheckCircleOutlineIcon className={classes.successIcon} />
              <Typography variant="body1">
                Ditt meddelande är nu skickat till oss, vi återkommer så snart
                vi kan.
              </Typography>
            </>
          ) : (
            ""
          )}
          {formError ? (
            <>
              <ErrorOutlineIcon className={classes.errorIcon} />
              <Typography variant="body1">
                Det blev något fel, Testa att skicka ditt meddelande direkt till
                mailaddressen ovan.
              </Typography>
            </>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </form>
  );
};
export default ContactForm;
