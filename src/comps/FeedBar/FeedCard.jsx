import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import CardContent from "@mui/material/CardContent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button, Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  addComment,
  dislikePost,
  editComment,
  likePost,
} from "../../redux/slice/post/postServices";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkPost,
  removeBookmarkPost,
} from "../../redux/slice/user/userService";
import { CommentPannel } from "./../index";
import TextField from "@mui/material/TextField";
import { CommentMenu } from "../comments/EditCommentmodal/CommentMenu";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function FeedCard({ post }) {
  const [expanded, setExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isEditComment, setIsEditComment] = useState(false);
  const [targetComment, setTargetComment] = useState("");
  const dispatch = useDispatch();
  const { foundUser, token } = useSelector((store) => store.users);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const likeArray = post.likes.likedBy;
  const likeUser = likeArray.some((el) => el._id === foundUser._id);
  const bookmarkArray = foundUser.bookmarks;
  const newComment = { ...targetComment, text: commentText };
  const findBookmarkPost = () => {
    if (bookmarkArray) {
      const bookmarkedPost = bookmarkArray.some((el) => el._id === post._id);
      return bookmarkedPost;
    }
  };

  const likeHandler = () => {
    dispatch(likePost({ token, postId: post._id }));
  };

  const dislikeHandler = () => {
    dispatch(dislikePost({ token, postId: post._id }));
  };

  const bookmarkHandler = () => {
    dispatch(bookmarkPost({ token, postId: post._id }));
  };

  const removeBookmarkHandler = () => {
    dispatch(removeBookmarkPost({ token, postId: post._id }));
  };

  const addCommentHandler = () => {
    dispatch(addComment({ postId: post._id, commentData: commentText, token }));
    setCommentText("");
  };
  const sendEditCommentHandler = async () => {
    await dispatch(
      editComment({
        postId: post._id,
        commentData: newComment,
        commentId: targetComment._id,
        token,
      })
    )
   await setIsEditComment(false) 
  };
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.username}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          margin: "0 0 1rem 1rem",
        }}
      >
        <span>
          {likeUser ? (
            <ThumbUpIcon onClick={dislikeHandler} />
          ) : (
            <ThumbUpOutlinedIcon onClick={likeHandler} />
          )}
          {post.likes.likeCount}
        </span>
        <span>
          {findBookmarkPost() ? (
            <BookmarkAddIcon onClick={removeBookmarkHandler} />
          ) : (
            <BookmarkAddOutlinedIcon onClick={bookmarkHandler} />
          )}
        </span>
        <CommentOutlinedIcon
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        />
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CommentMenu post = {post}/>
      </Collapse>
    </Card>
  );
}
export { FeedCard };
