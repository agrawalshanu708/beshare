import { createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPost,
  loginHandler,
  signupHandler,
  removeBookmarkPost,
} from "./authService";

const initialState = {
  status: "",
  foundUser: {},
  token: "",
};
console.log(initialState.foundUser);
export const authSlice = createSlice({
  name: "auth",
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
      alert("signup success");
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
      alert("login success");
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
  },
});

export const authenticationReducer = authSlice.reducer;
export const { setFoundUser } = authSlice.actions;
