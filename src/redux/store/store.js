import { configureStore } from "@reduxjs/toolkit";
import {authenticationReducer} from "../slice/auth/authSlice"
export const store = configureStore({
  reducer: {
    auth: authenticationReducer,
  },
});
