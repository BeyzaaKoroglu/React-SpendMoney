import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./shopping/shoppingSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
  },
});
