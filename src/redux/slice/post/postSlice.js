import { createSlice } from "@reduxjs/toolkit";
import {
  createPostHandler,
  getAllPost,
  likePost,
  dislikePost,
  editPost,
  getUserPost,
} from "./postServices";

const initialState = {
  allPost: [],
  userPost: [],
  status: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.status = true;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.allPost = action.payload;
      state.status = false;
    },
    [getAllPost.rejected]: (state) => {
      state.status = false;
    },
    [getUserPost.pending]: (state) => {
      state.status = true;
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.userPost = action.payload;
      state.status = false;
    },
    [getUserPost.rejected]: (state) => {
      state.status = false;
    },
    [createPostHandler.pending]: (state) => {
      state.staus = true;
    },
    [createPostHandler.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [createPostHandler.rejected]: (state) => {
      state.status = false;
    },

    [likePost.pending]: (state) => {
      state.status = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.allPost = action.payload;
      state.status = false;
    },
    [likePost.rejected]: (state) => {
      state.status = false;
    },
    [dislikePost.pending]: (state) => {
      state.status = true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [dislikePost.rejected]: (state) => {
      state.status = false;
    },
    [editPost.pending]:(state) => {
        state.status = true
    },
    [editPost.fulfilled]:(state,action) => {
        state.status = false;
        state.allPost = action.payload;
    },
    [editPost.rejected]:(state) => {
        state.status = false
    }
  },
});

export const postReducer = postSlice.reducer;
