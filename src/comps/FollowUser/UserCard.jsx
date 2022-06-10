import { Box, Avatar, Button, Typography } from "../../utils/MaterialUI";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { avatar1 } from "../../Assets/index";
import { followUser, unfollowUser } from "../../redux/slice/user/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { foundUser, token, allUser } = useSelector((store) => store.users);

  const followHandler = () => {
    dispatch(followUser({ followUserId: user._id, token }));
    toast.success(`You Starts Following ${user.firstName} ${user.lastName}`);
  };
  const findUser = foundUser.following.some((el) => el._id === user._id);

  const unfollowHandler = () => {
    dispatch(unfollowUser({ followUserId: user._id, token }));
    toast.success(`You Unfollowed ${user.firstName} ${user.lastName}`);
  };
  const navigate = useNavigate();
  console.log(allUser);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          margin: "0.5rem 1rem",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={avatar1}
          className="cursor"
          onClick={() => navigate(`/profile/${user._id}`)}
        />
        <Box sx={{ flexGrow: "1" }}>
          <Typography
            className="cursor"
            onClick={() => navigate(`/profile/${user._id}`)}
            sx={{ fontSize: "1.2rem" }}
          >
            {user.firstName}
            {user.lastName}
          </Typography>
          {/* <Typography>{user.bio}</Typography> */}
        </Box>
        {findUser ? (
          <Button
            className="button"
            color="primary"
            variant="contained"
            onClick={unfollowHandler}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            className="button secondary-button"
            color="primary"
            onClick={followHandler}
            sx={{ border: "1px solid black" }}
          >
            follow
          </Button>
        )}
      </Box>
    </>
  );
};

export { UserCard };
