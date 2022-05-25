import { configureStore } from "@reduxjs/toolkit";
import {authenticationReducer} from "../slice/auth/authSlice"
import { postReducer } from "../slice/post/postSlice";
export const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    posts : postReducer,
  },
});
