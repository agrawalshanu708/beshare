import * as React from "react";
import { useState } from "react";
import {
  styled,
  Collapse,
  ThumbUpIcon,
  CardContent,
  ThumbUpOutlinedIcon,
  red,
  Typography,
  Avatar,
  Box,
  Card,
  CardHeader,
  IconButton,
  CommentOutlinedIcon,
  BookmarkAddOutlinedIcon,
  BookmarkAddIcon,
} from "../../utils/MaterialUI";
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
import { CommentMenu } from "../comments/EditCommentmodal/CommentMenu";
import { CardMenu } from "./CardMenu";
import { toast } from "react-toastify";

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
  const { foundUser, token } = useSelector((store) => store.users);

  const userPost = post.username === foundUser.username;

  const dispatch = useDispatch();
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
    toast.success("You liked Post");
  };

  const dislikeHandler = () => {
    dispatch(dislikePost({ token, postId: post._id }));
    toast.success("You Disliked Post");
  };

  const bookmarkHandler = () => {
    dispatch(bookmarkPost({ token, postId: post._id }));
    toast.success("You Bookmarked Post");
  };

  const removeBookmarkHandler = () => {
    dispatch(removeBookmarkPost({ token, postId: post._id }));
    toast.success("Bookmarked Removed");
  };

  return (
    <Box sx={{ border: "0.6px solid #e4f5f9" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {userPost && <CardMenu post={post} />}
          </IconButton>
        }
        title={post.username}
        subheader={post.createdAt}
      />
      <CardContent>
        <Typography
          sx={{ fontFamily: "Lato", fontWeight: "bold", fontSize: 17 }}
          variant="body2"
          color="text.secondary"
        >
          {post.content}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          margin: "0 0 1rem 1rem",
        }}
      >
        <span>
          {likeUser ? (
            <ThumbUpIcon
              className="cursor"
              sx={{ fontWeight: "100" }}
              onClick={dislikeHandler}
            />
          ) : (
            <ThumbUpOutlinedIcon className="cursor" onClick={likeHandler} />
          )}
          {post.likes.likeCount}
        </span>
        <span>
          {findBookmarkPost() ? (
            <BookmarkAddIcon
              className="cursor"
              onClick={removeBookmarkHandler}
            />
          ) : (
            <BookmarkAddOutlinedIcon
              className="cursor"
              onClick={bookmarkHandler}
            />
          )}
        </span>
        <CommentOutlinedIcon
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className="cursor"
        />
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CommentMenu post={post} />
      </Collapse>
    </Box>
  );
}
export { FeedCard };
