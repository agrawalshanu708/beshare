import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { TextareaAutosize } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  editPost,
  getAllPost,
  getUserPost,
} from "../../redux/slice/post/postServices";

function EditPost({ post }) {
  const [open, setOpen] = React.useState(false);
  const [newPost, setNewPost] = useState(post.content);
  const dispatch = useDispatch();
  const { foundUser, token } = useSelector((store) => store.users);
  const finalPost = { ...post, content: newPost };
  const username = foundUser.username;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const EditPostHandler = async () => {
    await dispatch(editPost({ finalPost: finalPost, postId: post._id, token }));
    // await dispatch(getUserPost({ username: username }));
    await dispatch(getAllPost());
    setOpen(false);
    console.log("trigger" + 1)

  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder=""
            style={{ width: 300, height: 200 }}
            onChange={(e) => setNewPost(e.target.value)}
            value={newPost}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={EditPostHandler} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { EditPost };
