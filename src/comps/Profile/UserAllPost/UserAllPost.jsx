import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ProfileCard } from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, getUserPost } from "../../../redux/slice/post/postServices";
import {useEffect,useState} from "react" 
const UserAllPost = () => {
  const dispatch = useDispatch()
  const {userPost, allPost } = useSelector((store) => store.posts);
  const { foundUser, token } = useSelector((store) => store.auth);
  const username = foundUser.username
  console.log(userPost)
  console.log(allPost)
  useEffect(() => {
   dispatch(getUserPost({username: username}))
  },[])
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Box sx={{ cursor: "pointer" }}>
        <Typography
          sx={{ margin: "0.5rem 1rem" }}
          variant="h6"
          component="span"
        >
          Post
        </Typography>
        <Typography
          sx={{ margin: "0.5rem 1rem" }}
          variant="h6"
          component="span"
        >
          Save
        </Typography>
      </Box>
      <Divider sx={{ margin: "1rem" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "0 1rem",
        }}
      >
        {userPost.map((el) => (
          <ProfileCard post={el} />
        ))}
      </Box>
    </Box>
  );
};

export { UserAllPost };
