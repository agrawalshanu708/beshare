import { createSlice } from "@reduxjs/toolkit";
import { loginHandler, signupHandler } from "./authService";

const initialState = {
  status: "",
  foundUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    }},
  extraReducers: {
    [signupHandler.pending]: (state) => {
      state.status = true;
    },
    [signupHandler.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.foundUser = action.payload.createdUser;
      alert("signup success");
    },
    [signupHandler.rejected]: (action) => {
      console.log(action.payload);
      alert("signup rejected");
    },
    [loginHandler.pending]: (state) => {
        state.status = true
    },
    [loginHandler.fulfilled]: (state,action) => {
       localStorage.setItem('token', action.payload.token)
       state.foundUser = action.payload.createdUser
        alert("login success")
    },
    [loginHandler.rejected]: (action) => {
        console.error(action.payload);
        alert("login failure")
    },
  },
});

export const authenticationReducer = authSlice.reducer;
export const { setFoundUser } = authSlice.actions;
