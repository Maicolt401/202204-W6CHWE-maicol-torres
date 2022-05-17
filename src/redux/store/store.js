import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import robotsReducer from "../features/robotsSlice";

const store = configureStore({
  reducer: {
    robots: robotsReducer,
    user: useReducer,
  },
});

export default store;
