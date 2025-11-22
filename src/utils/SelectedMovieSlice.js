import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedMovie: null,
}

export const SelectedMovieSlice = createSlice({
    name: "SelectedMovie",
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        clearSelectedMovie: (state) => {
            state.selectedMovie = null;
        }
    }
})

export const { setSelectedMovie, clearSelectedMovie } = SelectedMovieSlice.actions;
export default SelectedMovieSlice.reducer;

