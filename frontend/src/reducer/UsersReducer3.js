import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post, putProfile } from "../helper/backend_helper";

// Asynchronous thunk utilisant createAsyncThunk
//updateProfile permet de mettre à jour le nom et prénom du profil
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ firstName, lastName }, { dispatch, getState }) => {
    //mettre le status en pending, modifiant le state
    dispatch(fetchUser.pending());

    try {
      //appel putProfile qui permet de faire le call API
      const updateResponse = await putProfile(firstName, lastName);
      //mettre le status en fulfilled, modifiant le state
      dispatch(fetchUser.fulfilled(updateResponse.body));
    } catch (error) {
      //mettre le status en rejected, modifiant le state
      dispatch(fetchUser.rejected({ error: error.message }));
    }
  }
);

// Asynchronous thunk utilisant createAsyncThunk
//updateProfile permet de verifier le login et récupérer un token
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ email, password }, { dispatch, getState }) => {
    //mettre le status en pending, modifiant le state
    dispatch(fetchUser.pending());

    try {
      //appel putProfile qui permet de faire le call API
      const loginResponse = await post(email, password);
      // si retour différent de 400
      if (loginResponse !== 400) {
        //mettre le status en fulfilled, modifiant le state
        dispatch(fetchUser.fulfilled(loginResponse.body));
      }
    } catch (error) {
      //mettre le status en pending, modifiant le state
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
      return initialState;
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
