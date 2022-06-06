import * as React from "react";
import { MoreVertIcon, Menu, MenuItem } from "../../utils/MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { EditPost } from "./EditPost";
import { deletePost } from "../../redux/slice/post/postServices";
function CardMenu({ post }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const { foundUser, token } = useSelector((store) => store.users);
  const userPost = post.username === foundUser.username;
  const deletePostHandler = () => {
    dispatch(deletePost({ postId: post._id, token }));
  };
  return (
    <div>
      <MoreVertIcon
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {userPost && (
          <span>
            <EditPost post={post} />
            <MenuItem onClick={deletePostHandler}>Delete</MenuItem>
          </span>
        )}
        <MenuItem onClick={handleClose}>share</MenuItem>
      </Menu>
    </div>
  );
}

export { CardMenu };
