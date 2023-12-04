import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "../helper/backend_helper";

// Asynchronous thunk using createAsyncThunk
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (email, password, dispatch, getState) => {
    const userLoadingStatus = getState().user.loading;

    if (userLoadingStatus === "pending" || userLoadingStatus === "updating") {
      return;
    }

    dispatch(fetchUser.pending());
    console.log(userLoadingStatus);
    try {
      console.log("Fetching user data...");
      const response = await postLogin(email, password);

      const token = response.body.token;
      localStorage.setItem("jwt", token);

      console.log("localstorage", localStorage.getItem("jwt"));

      dispatch(fetchUser.fulfilled, response.body);
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
