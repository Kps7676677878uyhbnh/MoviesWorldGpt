import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PopularMovies: null,
}

export const PopularMoviesSlice = createSlice({
    name: "PopularMovies",
    initialState,
    reducers: {
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        }
    }
})

export const { addPopularMovies } = PopularMoviesSlice.actions;
export default PopularMoviesSlice.reducer;

