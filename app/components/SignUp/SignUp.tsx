"use client";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { useSupabase } from "../Supabase/supabase-provider";
import LoadingBtn from "../UI/LoadingBtn";
import { customToast, toastError } from "../Toast/ToastNotify";
import FormSubmit from "./FormSubmit";

const SignUp = () => {
  const { supabase } = useSupabase();
  const [formValues, setFormValues] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [e.target.name]: e.target.value
      }
    });
  } 
  const signUpWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: formValues.email,
      password: formValues.password,
      options: {
        data: {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
        },
      },
    });
    console.log(error)

    if (error) {
      toastError(error.message);
    }
    else {
      customToast("Verification mail sent!", "📧");
      setSubmit(true);
    }
    setLoading(false);
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUpWithEmail();
  };

  if(submit) {
    return (
      <Container component="main" maxWidth="xs">
        <FormSubmit />
      </Container>
    )
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={formValues.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                  value={formValues.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={formValues.password}
                />
              </Grid>
            </Grid>
            <LoadingBtn
              type="submit"
              fullWidth={true}
              variant="contained"
              style={{ mt: 3, mb: 2 }}
              className="bg-blue-700"
              loading={loading}
            >
              Sign Up
            </LoadingBtn>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
};

export default SignUp;
