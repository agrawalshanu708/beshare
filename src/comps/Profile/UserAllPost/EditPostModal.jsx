import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import {
  deletePost,
  editPost,
  getAllPost,
  getUserPost,
} from "../../../redux/slice/post/postServices";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ post }) {
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState(post.content);
  const dispatch = useDispatch();
  const { foundUser, token } = useSelector((store) => store.users);
  const finalPost = { ...post, content: newPost };
  const handleOpen = () => {
    setOpen(true);
  };
  const username = foundUser.username;
  const editPostHandler = async () => {
    setOpen(false);
    await dispatch(editPost({ finalPost: finalPost, postId: post._id, token }));
    await dispatch(getUserPost({ username: username }));
    await dispatch(getAllPost());
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={editPostHandler}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <TextField
            value={newPost}
            id="child-modal-description"
            onChange={(e) => setNewPost(e.target.value)}
          >
            {post.content}
          </TextField>
          <Button onClick={editPostHandler}>Save</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function EditPostModal({ post }) {
  const [open, setOpen] = React.useState(false);
  const { token } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = () => {
    dispatch(deletePost({ token, postId: post._id }));
    setOpen(false);
  };

  return (
    <div>
      <MoreVertIcon onClick={handleOpen}>Open modal</MoreVertIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography variant="body2" color="text.secondary">
            <ChildModal post={post} />
          </Typography>
          <Button onClick={deleteHandler}>Delete</Button>
        </Box>
      </Modal>
    </div>
  );
}
export { EditPostModal };
