import { createSlice } from "@reduxjs/toolkit";
import { bookmarkPost, getAllUser, loginHandler, removeBookmarkPost, signupHandler } from "./userService";

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
      state.status = true;
    },
    [signupHandler.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.encodedToken);
      state.foundUser = action.payload.createdUser;
    },
    [signupHandler.rejected]: (action) => {
      console.log(action.payload);
      alert("signup rejected");
    },
    [loginHandler.pending]: (state) => {
      state.status = true;
    },
    [loginHandler.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.encodedToken);
      state.foundUser = action.payload.foundUser;
      state.token = action.payload.encodedToken;
    },
    [loginHandler.rejected]: (action) => {
      console.error(action.payload);
      alert("login failure");
    },
    [bookmarkPost.pending]: (state) => {
      state.status = true;
    },
    [bookmarkPost.fulfilled]: (state, action) => {
      state.status = false;
      state.foundUser.bookmarks = action.payload;
    },
    [bookmarkPost.rejected]: (state) => {
      state.status = false;
    },
    [removeBookmarkPost.pending]: (state) => {
      state.status = "true";
    },
    [removeBookmarkPost.fulfilled]: (state, action) => {
      state.status = false;
      state.foundUser.bookmarks = action.payload;
    },
    [removeBookmarkPost.rejected]: (state) => {
      state.status = false;
    },
    [getAllUser.pending]: (state) => {
      state.loading = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUser = action.payload;
    },
    [getAllUser.rejected]: (state) => {
      state.status = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setFoundUser } = userSlice.actions;
