import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
import NowPlayingMoviesSlice from "./NowPlayingMoviesSlice";
import PopularMoviesSlice from "./PopularMoviesSlice";
import TopRatedMoviesSlice from "./TopRatedMoviesSlice";
import UpcomingMoviesSlice from "./UpcomingMoviesSlice";
import SelectedMovieSlice from "./SelectedMovieSlice";

const AppStore = configureStore({
    reducer: {
        User: UserSlice,
        NowPlayingMovies: NowPlayingMoviesSlice,
        PopularMovies: PopularMoviesSlice,
        TopRatedMovies: TopRatedMoviesSlice,
        UpcomingMovies: UpcomingMoviesSlice,
        SelectedMovie: SelectedMovieSlice,
    },
    devTools: true,
})

export default AppStore;