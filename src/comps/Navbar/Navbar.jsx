import React from "react";

import {
  Typography,
  TextField,
  Box,
  ExploreOutlinedIcon,
  HomeOutlinedIcon,
  Grid,
} from "../../utils/MaterialUI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
const navigate = useNavigate();
const {allUser, foundUser, token } = useSelector((store) => store.users);


  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#ffffff",
          marginBottom: "1rem",
        }}
      >
        <Grid item xs={3}>
          <Typography
            variant="h5"
            component="div"
            onClick={() => {
              if(token) {navigate("/home")}
              else{alert("login first")}    
            }}
            sx = {{fontFamily: `'Pacifico', cursive`,fontSize:'2.5rem'}}

          >
            beShare.
          </Typography>
        </Grid>
        <Grid item xs={4.5}>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.8rem",
              cursor: "pointer",
            }}
          >
            <HomeOutlinedIcon sx={{ width: 30, height: 30 }} />
            <ExploreOutlinedIcon sx={{ width: 30, height: 30 }} />
          </Box>
        </Grid>
        <Grid item xs={4.5}>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              sx={{ marginBottom: "1rem" }}
            />
            {/* /  <Avatar alt="Remy Sharp" src={avatar1} /> */}
            <Typography
              variant="h5"
              component="div"
              onClick={() => navigate("/login")}
            >
              login
            </Typography>
            <Typography
              variant="h5"
              component="div"
              onClick={() => navigate("/")}
            >
              signup
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Navbar };
