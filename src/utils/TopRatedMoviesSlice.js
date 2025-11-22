import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    TopRatedMovies: null,
}

export const TopRatedMoviesSlice = createSlice({
    name: "TopRatedMovies",
    initialState,
    reducers: {
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload;
        }
    }
})

export const { addTopRatedMovies } = TopRatedMoviesSlice.actions;
export default TopRatedMoviesSlice.reducer;

