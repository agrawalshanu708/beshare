import { configureStore } from "@reduxjs/toolkit";
import {authenticationReducer} from "../slice/auth/authSlice"
import { postReducer } from "../slice/post/postSlice";
import { userReducer } from "../slice/user/userSlice";
export const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    posts : postReducer,
    user: userReducer,
  },
});
