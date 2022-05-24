import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { UserCard } from "./UserCard";

const FollowUser = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "82vh",
        overflow: "auto",
        position: "fixed",
        marginTop: "3.5rem",
        width: "23rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 1rem",
        }}
      >
        <Typography>Suggest For you</Typography>
        <Typography>See All</Typography>
      </Box>

      <UserCard/>
      <UserCard/>


    </Box>
  );
};


export {FollowUser}