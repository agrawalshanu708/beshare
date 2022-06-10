import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "../../utils/MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const PlainNav = () => {
  const {token } = useSelector((store) => store.users);

  const navigate = useNavigate();
  const homePageHandler = () => {
    token ? navigate("/home") : toast.error("Please Login First");
  };
  return (
    <>
      <Box>
        <Typography
          variant="h5"
          component="div"
          onClick={homePageHandler}
          sx={{
            fontFamily: `'Pacifico', cursive`,
            fontSize: "2.5rem",
            color: "#0a1647",
          }}
          className = "cursor"

        >
          beShare.
        </Typography>
      </Box>
    </>
  );
};

export { PlainNav };
