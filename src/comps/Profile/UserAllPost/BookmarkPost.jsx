import { Box } from '../../../utils/MaterialUI';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../redux/slice/user/userService';
import { FeedCard } from '../../FeedBar/FeedCard';

const BookmarkPost = () => {
    const dispatch = useDispatch()
    const { foundUser,allUser } = useSelector((store) => store.users);
    
    useEffect(() => {
        dispatch(getAllUser())
    },[])
    
  
  return (
    <>
    <Box sx = {{display:"flex",flexDirection: "column", gap:"0.5rem"}}>
    {
        foundUser.bookmarks.map(el => <FeedCard post = {el}/>)
    }
    </Box>
    </>
  )
}

export {BookmarkPost}