import React from "react";
import { Box, Divider } from "../../../utils/MaterialUI";
import { useSelector } from "react-redux";
import { FeedCard } from "../../FeedBar/FeedCard";

const UserAllPost = () => {
  const { allPost } = useSelector((store) => store.posts);
  const { foundUser } = useSelector((store) => store.users);
  const personalPost = allPost.filter(
    (el) => el.username === foundUser.username
  );

  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Divider sx={{ margin: "1rem" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "0 1rem",
        }}
      >
        {personalPost.map((el) => (
          <FeedCard post={el} key={el._id} />
        ))}
      </Box>
    </Box>
  );
};

export { UserAllPost };
