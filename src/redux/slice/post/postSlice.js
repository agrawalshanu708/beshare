import { createSlice } from "@reduxjs/toolkit";
import {
  createPostHandler,
  getAllPost,
  likePost,
  dislikePost,
  editPost,
  getUserPost,
  getAllComment,
  addComment,
  upvoteComment,
  downvotedComment,
  deleteComment,
  editComment,
} from "./postServices";
import { current } from "immer";

const initialState = {
  allPost: [],
  userPost: [],
  status: false,
  getCommentForPost: [],
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
    [editPost.pending]: (state) => {
      state.status = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [editPost.rejected]: (state) => {
      state.status = false;
    },
    [getAllComment.pending]: (state) => {
      state.status = true;
    },
    [getAllComment.fulfilled]: (state, action) => {
      state.status = false;
      state.getCommentForPost = action.payload;
    },
    [getAllComment.rejected]: (state) => {
      state.status = false;
    },
    [addComment.pending]: (state) => {
      state.status = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.status = false;
      console.log(action.payload);
      state.allPost = action.payload;
    },
    [addComment.rejected]: (state) => {
      state.status = false;
    },
    [upvoteComment.pending]: (state) => {
      state.status = true;
    },
    [upvoteComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [upvoteComment.rejected]: (state) => {
      state.status = false;
    },
    [downvotedComment.pending]: (state) => {
      state.status = true;
    },
    [downvotedComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [downvotedComment.rejected]: (state) => {
      state.status = false;
    },
    [deleteComment.pending]: (state) => {
      state.status = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [deleteComment.rejected]: (state) => {
      state.status = false;
    },
    [editComment.pending]: (state) => {
      state.status = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [editComment.rejected]: (state) => {
      state.status = false;
    },
  },
});

export const postReducer = postSlice.reducer;
