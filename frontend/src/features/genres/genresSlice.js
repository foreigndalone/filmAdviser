import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGenres = createAsyncThunk("genres/fetchGenres", 
    async(_, { rejectWithValue }) =>{
        try{
            const res = await fetch("http://localhost:5001/api/genres")
            if(!res.ok){
                return rejectWithValue('Failed to fetch genres')
            }
            const data = await res.json()
            console.log("Server answered")
            console.log(data.genres)
            if(!data?.genres){
                return rejectWithValue('Invalid genres JSON structure')
            }
            return data.genres

        }catch(err){
            return rejectWithValue(err.message || 'Unknown error');
        }
    } )


const initialState = {
    genres: [],
    loading: false,
    error: null
}
const genresSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {

    },
    extraReducers: (bulder) =>{
        bulder
        .addCase(fetchGenres.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase(fetchGenres.pending, (state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchGenres.fulfilled, (state, action)=>{
            state.loading = false
            state.genres = action.payload
        })
    }
})


export default genresSlice.reducer;