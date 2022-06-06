import React from "react";
import { CardContent, Button, TextField, Box } from "../../../utils/MaterialUI";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  editComment,
} from "../../../redux/slice/post/postServices";
import { CommentPannel } from "../../index";

const CommentMenu = ({ post }) => {
  const [commentText, setCommentText] = useState("");
  const [isEditComment, setIsEditComment] = useState(false);
  const [targetComment, setTargetComment] = useState("");
  const dispatch = useDispatch();
  const { foundUser, token } = useSelector((store) => store.users);
  const newComment = { ...targetComment, text: commentText };

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
    );
    await setIsEditComment(false);
    await setCommentText("");
  };
  return (
    <>
      <CardContent sx={{}}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label={foundUser.username}
            value={commentText}
            variant="standard"
            placeholder="comment down your opinion"
            onChange={(e) => setCommentText(e.target.value)}
          />
          {isEditComment ? (
            <Button
              variant="contained"
              size="small"
              onClick={sendEditCommentHandler}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={addCommentHandler}
            >
              Add
            </Button>
          )}
        </Box>
        {post.comments.map((el) => (
          <CommentPannel
            comment={el}
            post={post}
            commentText={commentText}
            setCommentText={setCommentText}
            setIsEditComment={setIsEditComment}
            setTargetComment={setTargetComment}
          />
        ))}
      </CardContent>
    </>
  );
};

export { CommentMenu };
