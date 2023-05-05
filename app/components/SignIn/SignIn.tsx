"use client";

import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSupabase } from "../Supabase/supabase-provider";
import { toastError, toastSuccess } from "../Toast/ToastNotify";
import LoadingBtn from "../UI/LoadingBtn";

const SignIn = () => {
  const { supabase } = useSupabase();
  const [loginData, setLoginData] = useState<UserInfo>({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData(prevLoginData => {
      return {
        ...prevLoginData,
        [e.target.name]: e.target.value
      }
    })
  }

  const signIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,
    });

    if (error) {
      toastError(error.message);
    } else {
      toastSuccess("Signed In Successfully!");
    }
    setLoading(false);
    setLoginData({email: "", password: ""});
  };

  console.log(loginData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn();
  };

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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={loginData.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={loginData.password}
          />
          <LoadingBtn
            type="submit"
            fullWidth={true}
            variant="contained"
            style={{ mt: 3, mb: 2 }}
            className="bg-blue-700"
            loading={loading}
          >
            Sign In
          </LoadingBtn>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
