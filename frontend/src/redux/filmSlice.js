import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:5001/api/films/genres/28');

      if (!res.ok) {
        return rejectWithValue('Failed to fetch');
      }
      

    const data = await res.json();
    console.log("🔥 SERVER RESPONSE:", data);

    if (!data?.results) {
      return rejectWithValue('Invalid JSON structure');
    }

    return data.results;

    } catch (err) {
      return rejectWithValue(err.message || 'Unknown error');
    }
  }
);



const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    films: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.films = action.payload; // массив фильмов
      })

      .addCase(fetchFilms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default filmsSlice.reducer;