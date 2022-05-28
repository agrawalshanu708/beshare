import React,{useEffect} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ProfileCard } from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../../redux/slice/post/postServices";
const UserAllPost = () => {


  const { allPost } = useSelector((store) => store.posts);
  const { foundUser, token } = useSelector((store) => store.auth);
  const personalPost = allPost.filter(
    (el) => el.username === foundUser.username
  );
  
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
        {personalPost.map((el) => (
          <ProfileCard post={el} />
        ))}
      </Box>
    </Box>
  );
};

export { UserAllPost };
