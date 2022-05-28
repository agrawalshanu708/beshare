import { createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPost,
  followUser,
  getAllUser,
  loginHandler,
  removeBookmarkPost,
  signupHandler,
  unfollowUser,
} from "./userService";
import { current } from "immer";

const initialState = {
  allUser: [],
  loading: false,
  foundUser: {},
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    },
  },
  extraReducers: {
    [signupHandler.pending]: (state) => {
      state.loading = true;
    },
    [signupHandler.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.encodedToken);
      state.foundUser = action.payload.createdUser;
    },
    [signupHandler.rejected]: (action) => {
      alert("signup rejected");
    },
    [loginHandler.pending]: (state) => {
      state.loading = true;
    },
    [loginHandler.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.encodedToken);
      state.foundUser = action.payload.foundUser;
      state.token = action.payload.encodedToken;
    },
    [loginHandler.rejected]: (action) => {
      alert("login failure");
    },
    [bookmarkPost.pending]: (state) => {
      state.loading = true;
    },
    [bookmarkPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser.bookmarks = action.payload;
    },
    [bookmarkPost.rejected]: (state) => {
      state.loading = false;
    },
    [removeBookmarkPost.pending]: (state) => {
      state.loading = "true";
    },
    [removeBookmarkPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser.bookmarks = action.payload;
    },
    [removeBookmarkPost.rejected]: (state) => {
      state.loading = false;
    },
    [getAllUser.pending]: (state) => {
      state.loading = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUser = action.payload;
    },
    [getAllUser.rejected]: (state) => {
      state.loading = false;
    },
    [followUser.pending]: (state) => {
      state.loading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser = action.payload.user;
    },
    [followUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [unfollowUser.pending]: (state) => {
      state.loading = true;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser = action.payload.user;
    },
    [unfollowUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setFoundUser } = userSlice.actions;
