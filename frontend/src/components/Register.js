import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const classes = useStyles();
  const [formIsValid, setFormIsValid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [fullName, setfullName] = useState("");
  const [age, setAge] = useState(0);
  const [score, setScore] = useState(0);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let allFieldsValid =
      fullName !== "" && age > 0 && score >= 0 && password !== "";
    if (allFieldsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [fullName, age, score, password]);

  const fieldHandler = (value, fieldname) => {
    if (fieldname === "fullName") {
      setfullName(value);
    } else if (fieldname === "age") {
      setAge(value);
    } else if (fieldname === "score") {
      setScore(value);
    } else if (fieldname === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = {
      fullName: fullName,
      age: age,
      score: score,
      password: password,
    };

    try {
      let resp = await axios.post("http://localhost:8080/api/register", data);
      setSubmitMessage(resp.message);
    } catch (error) {
      setSubmitMessage(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5" color="secondary">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fullname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                value={fullName}
                onChange={(evt) => fieldHandler(evt.target.value, "fullName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                type="number"
                value={age}
                onChange={(evt) => fieldHandler(evt.target.value, "age")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="score"
                label="Score"
                name="score"
                autoComplete="score"
                type="number"
                value={score}
                onChange={(evt) => fieldHandler(evt.target.value, "score")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(evt) => fieldHandler(evt.target.value, "password")}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!formIsValid}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          {submitMessage && <SnackbarContent message={submitMessage} />}
        </form>
      </div>
    </Container>
  );
};

export default Register;
