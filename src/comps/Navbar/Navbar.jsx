import React from "react";

import {
  Typography,
  TextField,
  Box,
  ExploreOutlinedIcon,
  HomeOutlinedIcon,
  Grid,
} from "../../utils/MaterialUI";
// import { avatar1 } from "../../Assets/index";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        // border:'1px solid black'
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
            onClick={() => navigate("/")}
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
              onClick={() => navigate("/signup")}
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
