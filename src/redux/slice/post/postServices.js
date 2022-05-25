import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost = createAsyncThunk(
  "/post/getAllPost",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createPostHandler = createAsyncThunk(
  "/post/postHandler",
  async ({postContent,token}, { rejectWithValue }) => {
      console.log(postContent,token)
    try {
      const response = await axios.post("/api/posts", {postData: postContent} ,{headers: {authorization: token}});
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from createNewPost: ${error.message}`);
    }
  }
);

