import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost = createAsyncThunk(
  "/post/getAllPost",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
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
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from createNewPost: ${error.message}`);
    }
  }
);

export const likePost = createAsyncThunk("post/likePost", 
async ({postId,token},{rejectWithValue}) => {
    try {
    const response = await axios.post( `api/posts/like/${postId}`,{},{headers:{authorization:token}})
    return response.data.posts
  } catch (error) {
    return rejectWithValue(`Error from likePost: ${error.message}`);

  }
})

export const dislikePost = createAsyncThunk("post/dislikePost", 
async ({postId,token},{rejectWithValue}) => {
  try {
    const response = await axios.post(`api/posts/dislike/${postId}`,{},{headers: {authorization:token}})
    return response.data.posts
  } catch (error) {
    return rejectWithValue(`Error from dislikePost: ${error.message}`);

  }
})

export const editPost = createAsyncThunk("post/editPost", 
async({finalPost,postId,token},{ rejectWithValue}) => {
  console.log(finalPost,postId,token)
  console.log("wiring")
  try {
    const response  = await axios.post(`/api/posts/edit/${postId}`,{postData: finalPost},{headers:{authorization: token}})
    console.log(response)
    return response.data
  } catch (error) {
    return rejectWithValue(`Error from dislikePost: ${error.message}`);
  }
})