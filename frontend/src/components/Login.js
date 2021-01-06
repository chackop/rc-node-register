import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [fullName, setfullName] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  useEffect(() => {
    let allFieldsValid = fullName !== "" && password !== "";
    if (allFieldsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [fullName, password]);

  const fieldHandler = (value, fieldname) => {
    if (fieldname === "fullName") {
      setfullName(value);
    } else if (fieldname === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = {
      fullName: fullName,
      password: password,
    };

    try {
      let resp = await axios.post("http://localhost:8080/api/login", data);
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
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full name"
            name="fullName"
            autoComplete="fullName"
            autoFocus
            value={fullName}
            onChange={(evt) => fieldHandler(evt.target.value, "fullName")}
          />
          <TextField
            variant="outlined"
            margin="normal"
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!formIsValid}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
