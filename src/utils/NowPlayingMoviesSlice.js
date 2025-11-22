import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NowPlayingMovies : null,
}

export const NowPlayingMoviesSlice = createSlice ({
    name : "Movies",
    initialState,
    reducers : {
        addNowPlayingMovies : (state , action) =>{
            state.NowPlayingMovies = action.payload;
        }

    }
})

export  const {addNowPlayingMovies} = NowPlayingMoviesSlice.actions
export default NowPlayingMoviesSlice.reducer;