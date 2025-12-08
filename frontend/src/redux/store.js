import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./filmSlice.js";
import userReducer from "./userSlice.js";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    user: userReducer
  }
});
