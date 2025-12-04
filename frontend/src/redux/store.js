import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./filmSlice.js";

export const store = configureStore({
  reducer: {
    films: filmsReducer
  }
});