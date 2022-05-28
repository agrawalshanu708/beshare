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


export const getAllUser = createAsyncThunk("/user/getAllUser", 
async (_, {rejectWithValue}) => {
try {
   const response = await axios.get("/api/users")
   return response.data.users
} catch (error) {
    return rejectWithValue(`Error from allUser: ${error.message}`);

}
})