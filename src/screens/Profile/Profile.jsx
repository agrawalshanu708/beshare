import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {UserCover,UserDetails,UserAllPost} from "../../comps/index"
const Profile = () => {
  return (
    <Box >
    <Grid container spacing={2}>
      <Grid item xs = {12}>
      <Box><UserCover/></Box>    
      </Grid>  
   </Grid>  

   <Grid container spacing={2}>
      <Grid item xs = {4}>
      <Box><UserDetails/></Box>    
      </Grid> 

      <Grid item xs = {8}>
      <Box><UserAllPost/></Box>    
      </Grid>  
  </Grid>


    </Box>
  )
}

export  {Profile}