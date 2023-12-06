import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/UsersReducer3";

export const store = configureStore({
  reducer: {
    user: reducer,
  },
});
