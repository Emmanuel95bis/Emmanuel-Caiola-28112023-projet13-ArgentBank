import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../helper/backend_helper";

// Asynchronous thunk using createAsyncThunk

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
      return {};
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
