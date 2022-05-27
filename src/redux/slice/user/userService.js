import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllUser = createAsyncThunk("/user/getAllUser", 
async (_, {rejectWithValue}) => {
try {
   const response = await axios.get("/api/users")
   console.log(response) 
   return response.data.users
} catch (error) {
    return rejectWithValue(`Error from allUser: ${error.message}`);

}
})