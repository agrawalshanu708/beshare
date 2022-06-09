import * as React from "react";

import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Avatar,
  CssBaseline,
  Link,
  LockOutlinedIcon,
  Container,
} from "../../utils/MaterialUI";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../redux/slice/user/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [loginCredential, setLoginCredential] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token } = useSelector((store) => store.users);

  function clickHandler() {
    dispatch(
      loginHandler({
        username: loginCredential.username,
        password: loginCredential.password,
      })
    ).then(() => {
      setTimeout(() => {navigate("/home")
    },1000)
    toast.success("Login successfully")
    })
  }

  function guestHandler() {
    dispatch(
      loginHandler({
        username: "shanuagrawal",
        password: "shanu123",
      })
    ).then(() => navigate("/home")).then(() => toast.success("Login successfully"));
  }
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
          Sign in
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) =>
              setLoginCredential((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
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
            onChange={(e) =>
              setLoginCredential((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />

          <Button
            onClick={clickHandler}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button fullWidth variant="contained" onClick={guestHandler}>
            login as Guest
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick = {() => navigate("/")} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export { Login };
