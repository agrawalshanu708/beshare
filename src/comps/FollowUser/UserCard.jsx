import { Box, Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { avatar1 } from "../../Assets/index";
import { followUser } from "../../redux/slice/user/userService";

const UserCard = ({user}) => {
const dispatch = useDispatch()
const {foundUser,token } = useSelector((store) => store.users);
 
const followHandler = () => {
    dispatch(followUser({followUserId: user._id,token}))
  }
const findUser = foundUser.following.some(el => el._id === user._id)

const unfollowHandler = () => {
  console.log("unfollow")
}
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
          <Typography>{user.firstName}{user.lastName}</Typography>
          <Typography>{user.bio}</Typography>
        </Box>
        { findUser ? <Button variant="contained" size="small" onClick = {unfollowHandler}>
          Unfollow
        </Button> : <Button variant="contained" size="small" onClick = {followHandler} >
          follow
        </Button>}
      </Box>
    </>
  );
};

export { UserCard };
