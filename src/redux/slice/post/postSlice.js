import { createSlice } from "@reduxjs/toolkit";
import {createPostHandler, getAllPost,likePost} from "./postServices"


const initialState = {
    allPost:[],
    status: false
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers: {
        [createPostHandler.pending]:(state) =>{
          state.staus = true;
      
        },
        [createPostHandler.fulfilled]:(state,action) =>{
            state.status = false;
            state.allPost = action.payload
        },
        [createPostHandler.rejected]:(state) =>{
            state.status = false
        },
        [getAllPost.pending]:(state) =>{
            state.status = true
        },
        [getAllPost.fulfilled]:(state,action) =>{
            state.allPost = action.payload
            state.status = false
        },
        [getAllPost.rejected]:(state) =>{
            state.status = false
        },
        [likePost.pending]:(state) => {
            state.status = true
        },
        [likePost.fulfilled]:(state,action) =>{
            state.allPost =  action.payload
            state.status = false
        },
        [likePost.rejected]:(state) => {
            state.status = false
        }

    }
})

export const postReducer = postSlice.reducer;
