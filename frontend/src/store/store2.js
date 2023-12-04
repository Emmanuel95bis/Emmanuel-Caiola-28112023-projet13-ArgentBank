import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/UsersReducer2";

export const store = configureStore({
  reducer: {
    user: reducer,
  },
});
