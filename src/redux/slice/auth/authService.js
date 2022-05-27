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
      console.log(response)
      return response.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error);

    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "user/bookmarkPost",

  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data.bookmarks;
    } catch (error) {
      return rejectWithValue(`Error from bookmarkpost: ${error.message}`);
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "/auth/removeBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data.bookmarks;
    } catch (error) {
      return rejectWithValue(`Error from removebookmarkpost: ${error.message}`);
    }
  }
);
