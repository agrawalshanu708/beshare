import React from "react";
import {
  Avatar,
  Box,
  Typography,
  red,
  Menu,
  MenuItem,
  ThumbUpOutlinedIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  ThumbDownOutlinedIcon,
  MoreVertOutlinedIcon,
} from "../../utils/MaterialUI";
import {
  deleteComment,
  downvotedComment,
  upvoteComment,
} from "../../redux/slice/post/postServices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CommentPannel = ({
  comment,
  post,
  setIsEditComment,
  setCommentText,
  setTargetComment,
}) => {
  const dispatch = useDispatch();
  const { token, foundUser } = useSelector((store) => store.users);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const upvoteHandler = () => {
    dispatch(
      upvoteComment({ postId: post._id, commentId: comment._id, token })
    );
    toast.success('You upvote comment')
  };
  const downvoteHandler = () => {
    dispatch(
      downvotedComment({ postId: post._id, commentId: comment._id, token })
    );
    toast.success('you downvote comment')
  };

  const upvoteUser = comment.votes.upvotedBy.find(
    (el) => el._id === foundUser._id
  );
  const downvoteUser = comment.votes.downvotedBy.find(
    (el) => el._id === foundUser._id
  );
  const loginUserComment = comment.username === foundUser.username;

  const deleteHandler = () => {
    setAnchorEl(null);
    dispatch(
      deleteComment({ postId: post._id, commentId: comment._id, token })
    );
    toast.success('you deleted comment')
  };

  const editCommentHandler = () => {
    setAnchorEl(null);
    setCommentText(comment.text);
    setIsEditComment(true);
    setTargetComment(comment);
  };

  return (
    <>
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
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="p"
              component="span"
            >
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
          {loginUserComment && (
            <MoreVertOutlinedIcon
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          )}
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={editCommentHandler}>Edit</MenuItem>
            <MenuItem onClick={deleteHandler}>Delete</MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export { CommentPannel };
