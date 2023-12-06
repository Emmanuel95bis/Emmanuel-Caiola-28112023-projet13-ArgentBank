import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin, postProfile } from "../helper/backend_helper";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Asynchronous thunk using createAsyncThunk

export const fetchUser = createAsyncThunk(
  "user/fetchUser",

  async ({ email, password }, { getState }) => {
    postLogin(email, password);
    console.log("reducer", email, password);
    const userLoadingStatus = getState().user;
    useEffect(() => {
      console.log("reducer" + userLoadingStatus);
    });
  }
);

const initialState = {
  loading: false,
  logged: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false, // Set loading to false on successful completion
        logged: true, // Update other properties as needed
        data: action.payload,
      };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      return {
        ...state,
        loading: false, // Set loading to false on rejection
        error: action.error.message, // Store the error message
      };
    });
  },
});
export default userSlice.reducer;
