import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post, putProfile } from "../helper/backend_helper";
import { useSelector } from "react-redux";

// Asynchronous thunk using createAsyncThunk

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ firstName, lastName }, { dispatch, getState }) => {
    console.log("updatereducer" + firstName, lastName);
    dispatch(updateProfile.pending());

    try {
      const updateResponse = await putProfile(firstName, lastName);
      console.log("putprofile loginResponse:", updateResponse.body);
      dispatch(fetchUser.fulfilled(updateResponse.body));
    } catch (error) {
      console.log("reducer entre dans erreur");
      dispatch(updateProfile.rejected({ error: error.message }));
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ email, password }, { dispatch, getState }) => {
    dispatch(fetchUser.pending());

    try {
      const loginResponse = await post(email, password);
      console.log("loginResponse:", loginResponse.body);
      dispatch(fetchUser.fulfilled(loginResponse.body));
    } catch (error) {
      console.log("reducer entre dans erreur");
      dispatch(fetchUser.rejected({ error: error.message }));
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
        initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfile.pending, (state) => {
      console.log("pending" + state.loading);
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      console.log("reducer modification initialstate" + state.loading);
      if (state.loading === true) {
        console.log("aaaction payload" + action.payload);
        return {
          ...state,
          loading: false,
          logged: true,
          data: action.payload,
        };
      }

      return state;
    });

    builder.addCase(updateProfile.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    });

    builder.addCase(fetchUser.pending, (state) => {
      console.log("pending" + state.loading);
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log("reducer modification initialstate" + state.loading);
      if (state.loading === true) {
        return {
          ...state,
          loading: false,
          logged: true,
          data: action.payload,
        };
      }

      return state;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    });
  },
});
export default userSlice.reducer;
