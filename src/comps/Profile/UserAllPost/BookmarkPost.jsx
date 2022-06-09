import { Box } from "../../../utils/MaterialUI";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/slice/user/userService";
import { FeedCard } from "../../FeedBar/FeedCard";
import { nopost } from "../../../Assets";

const BookmarkPost = ({ userId }) => {
  const dispatch = useDispatch();
  const { allUser } = useSelector((store) => store.users);

  const user = allUser.find((el) => el._id === userId);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {user.bookmarks.length > 0 ? (
          user.bookmarks.map((el) => <FeedCard post={el} />)
        ) : (
          <div style={{ width: "15rem", margin: "auto" }}>
            <img src={nopost} />
          </div>
        )}
      </Box>
    </>
  );
};

export { BookmarkPost };
