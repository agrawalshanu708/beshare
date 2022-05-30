import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { FeedCard } from "./FeedCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../redux/slice/post/postServices";
function FeedBar() {
  
  const dispatch = useDispatch();
  const { allPost } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getAllPost());
  }, []); 
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "3.5rem",
        }}
      >
        {
        allPost.map((el) => (
          <FeedCard post={el} key={el._id} />
        ))}
      </Box>
    </>
  );
}

export { FeedBar };
