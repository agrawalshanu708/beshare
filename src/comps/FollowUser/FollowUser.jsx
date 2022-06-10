import React, { useEffect } from "react";
import {Box,Typography} from "../../utils/MaterialUI"
import { UserCard } from "./UserCard";
import { getAllUser } from "../../redux/slice/user/userService";
import { useDispatch, useSelector } from "react-redux";
import  "./FollowBar.css"
const FollowUser = () => {
  const state = useSelector((store) => store.users)

const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser())
  },[])


  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "82vh",
        overflow: "auto",
        position: "sticky",
        marginTop: "5.6rem",
        top:"5rem"
      }} className = "user__bar"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 1rem",
        }}
      >
        <Typography sx = {{fontFamily: 'Varela Round', fontWeight:"bold",fontSize:20}}>Suggest For you</Typography>
        {/* <Typography sx = {{fontFamily:'Varela Round', fontSize:17,color:"#0a1647"}}>See All</Typography> */}
      </Box>

      {
        state.allUser.map(el => <UserCard user = {el} key = {el._id}/>)
      }


    </Box>
  );
};


export {FollowUser}