import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { UserCard } from "./UserCard";
import { getAllUser } from "../../redux/slice/user/userService";
import { useDispatch, useSelector } from "react-redux";

const FollowUser = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser())
  },[])
const {allUser} = useSelector((store) => store.users)
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

      {
        allUser.map(el => <UserCard user = {el}/>)
      }


    </Box>
  );
};


export {FollowUser}