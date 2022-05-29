import { Avatar, Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
  downvotedComment,
  upvoteComment,
} from "../../redux/slice/post/postServices";
import { useDispatch, useSelector } from "react-redux";
const CommentPannel = ({ comment, post }) => {
  const dispatch = useDispatch();
  const { token, foundUser } = useSelector((store) => store.users);
  const upvoteHandler = () => {
    dispatch(
      upvoteComment({ postId: post._id, commentId: comment._id, token })
    );
  };
  const downvoteHandler = () => {
    dispatch(
      downvotedComment({ postId: post._id, commentId: comment._id, token })
    );
  };

  console.log(comment);
  const upvoteUser = comment.votes.upvotedBy.find(
    (el) => el._id === foundUser._id
  );
  const downvoteUser = comment.votes.downvotedBy.find(
    (el) => el._id === foundUser._id
  );

  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5rem",
        marginTop: "1rem",
        alignItems: "center",
        padding: "0 0.5rem",
      }}
    >
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        {comment.username.charAt(0)}
      </Avatar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          justifyContent: "center",
          flexGrow: "1",
        }}
      >
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="p" component="span">
            {comment.username}
          </Typography>
          <Typography variant="p" component="span">
            {comment.text}
          </Typography>
        </Box>
        <Box>
          {upvoteUser ? (
            <ThumbUpIcon />
          ) : (
            <ThumbUpOutlinedIcon onClick={upvoteHandler} />
          )}
          {downvoteUser ? (
            <ThumbDownIcon />
          ) : (
            <ThumbDownOutlinedIcon onClick={downvoteHandler} />
          )}
        </Box>
      </Box>
      <Box>
        <MoreVertOutlinedIcon />
      </Box>
    </Box>
  );
};

export { CommentPannel };
