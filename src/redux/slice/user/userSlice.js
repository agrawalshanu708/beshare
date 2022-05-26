import { createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers:{

    },
})

export const userReducer = userSlice.reducer;
