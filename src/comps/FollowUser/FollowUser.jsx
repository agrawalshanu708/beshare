import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { UserCard } from "./UserCard";
import { getAllUser } from "../../redux/slice/user/userService";
import { useDispatch, useSelector } from "react-redux";

const FollowUser = () => {
  const state = useSelector((store) => store.users)

const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser())
  },[])


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
        state.allUser.map(el => <UserCard user = {el} key = {el._id}/>)
      }


    </Box>
  );
};


export {FollowUser}