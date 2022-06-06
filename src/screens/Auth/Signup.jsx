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
import { useDispatch } from "react-redux";
import { signupHandler } from "../../redux/slice/user/userService";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [signupCredential, setSignupCredential] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = () => {
    dispatch(
      signupHandler({
        firstName: signupCredential.firstName,
        lastName: signupCredential.lastName,
        username: signupCredential.username,
        password: signupCredential.password,
      })
    );
  };
  const guestHandler = () => {
    dispatch(
      signupHandler({
        firstName: "shanu",
        lastName: "agrawal",
        username: "shanuagrawal",
        password: "shanu123",
      })
    ).then(() => navigate("/login"));
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
          Sign up
        </Typography>
        <Box noValidate sx={{ mt: 3 }}>
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
                onChange={(e) =>
                  setSignupCredential((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setSignupCredential((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setSignupCredential((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setSignupCredential((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            onClick={clickHandler}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Button
            onClick={guestHandler}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up as guest
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export { Signup };
