import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "./userService";


const initialState = {
 allUser:[],
 loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers:{
     [getAllUser.pending]:(state) => {
         state.loading = true;
     },
     [getAllUser.fulfilled]:(state,action) => {
         state.loading = false;
         state.allUser = action.payload
     },
     [getAllUser.rejected]:(state) => {
         state.status = false
     },
    },
})

export const userReducer = userSlice.reducer;
