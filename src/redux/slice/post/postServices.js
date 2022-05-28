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
export const getUserPost = createAsyncThunk("post/getUserPost", 
async ({username},{rejectWithValue}) => {
  try {
  const response = await axios.get(`/api/posts/user/${username}`)  
  return response.data.posts
} catch (error) {
  return rejectWithValue(`Error from getUserPost: ${error.message}`);
}
})
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
  try {
    const response  = await axios.post(`/api/posts/edit/${postId}`,{postData: finalPost},{headers:{authorization: token}})
    return response.data
  } catch (error) {
    return rejectWithValue(`Error from dislikePost: ${error.message}`);
  }
})

export const deletePost = createAsyncThunk("post/deletePost", 
async ({postId,token},{rejectWithValue}) => {
  console.log("del wiring")
  console.log(postId,token)
  try {
    const response = await axios.delete(`/api/posts/${postId}`,{},{headers: {authorization: token}})
    console.log(response)
  } catch (error) {
    console.log(error)
  }
})