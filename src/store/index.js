import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";

const store = configureStore({
  reducer: questionSlice,
});

export default store;
