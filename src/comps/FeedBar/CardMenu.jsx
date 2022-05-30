import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { EditPostModal } from "../index";
import { EditPost } from "./EditPost";
function CardMenu({ post }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { foundUser, token } = useSelector((store) => store.users);
  const { allPost } = useSelector((store) => store.posts);
  const userPost = post.username === foundUser.username;
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
            <EditPost post ={post} />
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </span>
        )}
        <MenuItem onClick={handleClose}>share</MenuItem>
      </Menu>
    </div>
  );
}

export { CardMenu };
