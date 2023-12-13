import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/UsersReducer";

export const store = configureStore({
  reducer: {
    user: reducer,
  },
});
