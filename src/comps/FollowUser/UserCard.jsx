import { Box, Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { avatar1 } from "../../Assets/index";

const UserCard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          margin: "0.5rem 1rem",
        }}
      >
        <Avatar alt="Remy Sharp" src={avatar1} />
        <Box sx={{flexGrow:"1"}}>
          <Typography>shanu agrawal</Typography>
          <Typography>web developer</Typography>
        </Box>
        <Button variant="contained" size="small">
          Follow
        </Button>
      </Box>
    </>
  );
};

export { UserCard };
