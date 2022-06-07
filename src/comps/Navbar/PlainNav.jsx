import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../Assets/index";
import { Box, Typography } from "../../utils/MaterialUI";
const PlainNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Typography
          variant="h5"
          component="div"
          onClick={() => navigate("/home")}
          sx={{ fontFamily: `'Pacifico', cursive`, fontSize: "2.5rem", color: "#0a1647" }}
        >
          beShare.
        </Typography>
      </Box>
    </>
  );
};

export { PlainNav };
