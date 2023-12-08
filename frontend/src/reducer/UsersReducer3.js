import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post, putProfile } from "../helper/backend_helper";
import { useSelector } from "react-redux";

// Asynchronous thunk using createAsyncThunk

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ firstName, lastName }, { dispatch, getState }) => {
    dispatch(fetchUser.pending());

    try {
      const updateResponse = await putProfile(firstName, lastName);
      console.log("putprofile loginResponse:", updateResponse.body);
      dispatch(fetchUser.fulfilled(updateResponse.body));
    } catch (error) {
      console.log("reducer entre dans erreur");
      dispatch(fetchUser.rejected({ error: error.message }));
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ email, password }, { dispatch, getState }) => {
    dispatch(fetchUser.pending());

    try {
      const loginResponse = await post(email, password);
      if (loginResponse !== 400) {
        console.log("loginResponse:", loginResponse.body);
        dispatch(fetchUser.fulfilled(loginResponse.body));
      }
    } catch (error) {
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
    builder.addCase(fetchUser.pending, (state) => {
      return {
        ...state,
        loading: true,
        logged: false,
      };
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
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
        logged: false,
        error: action.payload,
      };
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
