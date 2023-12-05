import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "../helper/backend_helper";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Asynchronous thunk using createAsyncThunk
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (email, password, dispatch, getState) => {
    const userLoadingStatus = getState().user.loading;

    if (userLoadingStatus === "pending" || userLoadingStatus === "updating") {
      return;
    }

    dispatch(fetchUser.pending());

    try {
      console.log("Fetching user data...");
      const response = await postLogin(email, password);
      console.log("response", response.status);
      if (response.status === 200) {
        const data = { email, password };
        const token = response.body.token;
        localStorage.setItem("jwt", token);

        console.log("localstorage", localStorage.getItem("jwt"));

        dispatch(fetchUser.fulfilled, data);
      } else return;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
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
    builder.addCase(fetchUser.pending, (state, action) => {
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
