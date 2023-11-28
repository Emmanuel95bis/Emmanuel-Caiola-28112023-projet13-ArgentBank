import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/UsersReducer";

export const store = configureStore({
  reducer: {
    user: rootReducer,
  },
});
