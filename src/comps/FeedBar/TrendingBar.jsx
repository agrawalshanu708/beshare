import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../redux/slice/post/postServices';
import { FeedCard } from './FeedCard';

const TrendingBar = () => {
  const dispatch = useDispatch();
  const { trendingPost } = useSelector((store) => store.posts);
  
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  console.log(trendingPost);
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      marginTop: "1rem",
    }}
  >
    {
    trendingPost.map((el) => (
      <FeedCard post={el} key={el._id} />
    ))}
  </Box>
  )
}

export {TrendingBar}