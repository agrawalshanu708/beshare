import React from "react";
import { Box, Divider } from "../../../utils/MaterialUI";
import { useSelector } from "react-redux";
import { FeedCard } from "../../FeedBar/FeedCard";

const UserAllPost = ({ userId }) => {
  const { allPost } = useSelector((store) => store.posts);
  const { allUser } = useSelector((store) => store.users);
  const user = allUser.find((el) => el._id === userId);

  const userPost = allPost.filter((el) => el.username === user.username);

  return (
    <Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {userPost.map((el) => (
          <FeedCard post={el} key={el._id} />
        ))}
      </Box>
    </Box>
  );
};

export { UserAllPost };
