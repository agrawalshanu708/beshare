import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import { avatar1 } from "../../Assets/index";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    
  
    return (
      <Box
        sx={{
          // position: "fixed",
          width: "100%",
          top: 0,
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
            <Typography variant="h5" component="div" onClick = {() => navigate("/")}>
              FootPrint
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
              >login
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