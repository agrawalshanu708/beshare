import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupHandler = createAsyncThunk(
  "auth/signupHandler",
  async ({ firstName, lastName, username, password }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginHandler = createAsyncThunk(
  "auth/loginHandler",
  async ({ username, password }, thunkAPI) => {
    console.log(username, password);
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
