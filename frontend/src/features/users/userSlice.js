import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    email: null,
    status: "guest", // guest | active | blocked (или что хочешь)
    
    // профиль (необязательные поля)
    age: null,
    gender: null,

    // предпочтения
    favorite_genres: [],       // [28, 35, 18]
    favorite_year_from: null,
    favorite_year_to: null,
  },

  // токены и авторизация
  token: null,                 // JWT строка
  isAuthenticated: false,      // true после логина
  loading: false,
  error: null,
};





const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserData(state, action){
            state.user = {...state.user, ...action.payload}
            state.isAuthenticated = true
            state.error = null
            console.log(state.user)
            console.log('EEEEEEE', state, state.user)
        },
        updateUser(state, action){
            state.user = {...state.user, ...action.payload }
        }
    },
})

export const { setUserData,updateUser } = userSlice.actions;

export default userSlice.reducer;