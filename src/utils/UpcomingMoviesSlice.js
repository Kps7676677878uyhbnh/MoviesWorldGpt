import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UpcomingMovies: null,
}

export const UpcomingMoviesSlice = createSlice({
    name: "UpcomingMovies",
    initialState,
    reducers: {
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        }
    }
})

export const { addUpcomingMovies } = UpcomingMoviesSlice.actions;
export default UpcomingMoviesSlice.reducer;

