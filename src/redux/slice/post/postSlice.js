import { createSlice } from "@reduxjs/toolkit";
import {createPostHandler, getAllPost,likePost,dislikePost, editPost} from "./postServices"


const initialState = {
    allPost:[],
    status: false
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{
    },
    extraReducers: {
        [createPostHandler.pending]:(state) =>{
          state.staus = true;
      
        },
        [createPostHandler.fulfilled]:(state,action) =>{
            state.status = false
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
            console.log(action.payload)
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
        },
        [dislikePost.pending]:(state) => {
            state.status = true
        },
        [dislikePost.fulfilled]:(state,action) => {
            state.status = false
            state.allPost = action.payload
        },
        [dislikePost.rejected]:(state) => {
            state.status = false
        },
        // [editPost.pending]:(state) => {
        //     state.status = true
        // },
        // [editPost.fulfilled]:(state,action) => {
        //     state.status = false;
        //     state.allPost = action.payload;
        //     // console.log(action.payload)
        // },
        // [editPost.rejected]:(state) => {
        //     state.status = false
        // }
    }
})

export const postReducer = postSlice.reducer;
