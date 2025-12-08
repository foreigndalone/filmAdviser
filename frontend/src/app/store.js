import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "../features/films/filmSlice.js";
import userReducer from "../features/users/userSlice.js";
import genreReducer from "../features/genres/genresSlice.js"


const appReducer = combineReducers({
    filmsReducer,
    genreReducer,
    userReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store