import React from "react";
import Box from "@mui/material/Box";
import { cover1 } from "../../../Assets/index";
const UserCover = () => {
  return (
    <Box
      sx={{
        height: "13rem",
      }}
    >
      <img src={cover1} alt="user profile cover" />
    </Box>
  );
};

export { UserCover };
