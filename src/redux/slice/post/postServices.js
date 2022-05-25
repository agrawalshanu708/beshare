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
  "/post/createPostHandler",
  async ({postContent,token}, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/posts", {postData: postContent} ,{headers: {authorization: token}});
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from createNewPost: ${error.message}`);
    }
  }
);

export const likePost = createAsyncThunk("post/likePost", 
async ({postId,token},{rejectWithValue}) => {
  
  console.log("wirint")
  console.log(postId,token)
  try {
    const response = await axios.post( `api/posts/like/${postId}`,{},{headers:{authorization:token}})
    console.log(response)
    return response.data.posts
  } catch (error) {
    return rejectWithValue(`Error from likePost: ${error.message}`);

  }
})

