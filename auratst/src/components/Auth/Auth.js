import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Button,
  Paper,
  Grid,
  Container,
} from "@material-ui/core";
import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";

import Icon from "./icon";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup } from "../../actions/auth";

const initialState = {
  //this is the initial state value for our formData, this will hold the users details
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState); //This state is for the user form input
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); // it's a function that will toggle the state/ visibility of the password so that when clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    //on submit, we want to have have logic to either sign up or sign in the user

    if (isSignup) {
      dispatch(signup(formData, navigate)); //we are passing the formDate so we can have it in our data base, and using navigate to navigate when something happens
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  // to populate the initial state field, we'll use the handleChange function because each one of our inputs have that function

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <>
      {!user && (
        <div className="modal_overlay">
          <div className="modal_card">
            <Container component="main" maxWidth="xs">
              <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">
                  {isSignup ? "Sign Up" : "Sign In"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    {isSignup && (
                      <>
                        <Input
                          name="firstName"
                          label="First Name"
                          autoFocus
                          half
                          handleChange={handleChange}
                        />
                        <Input
                          name="lastName"
                          label="Last Name"
                          half
                          handleChange={handleChange}
                        />
                      </>
                    )}
                    <Input
                      name="email"
                      label="Email Address"
                      type="email"
                      handleChange={handleChange}
                    />
                    <Input
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      handleChange={handleChange}
                      handleShowPassword={handleShowPassword}
                    />

                    {/** password confirmation field that would only show if we are on the signup form */}
                    {isSignup && (
                      <Input
                        name="confirmPassword"
                        label="Repeat Password"
                        handleChange={handleChange}
                        type="password"
                      />
                    )}
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {isSignup ? "Sign Up" : "Sign In "}
                  </Button>


                  {/* *** */}

                  {/* creating a button that will allow us switch from SignUp to Sign in */}
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Button onClick={switchMode}>
                        {isSignup
                          ? "Already have an account? Sign In"
                          : "Don't have an account? Sign Up "}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
