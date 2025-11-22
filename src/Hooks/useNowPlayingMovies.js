import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/NowPlayingMoviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
                API_options
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            console.log("🎬 Now Playing Movies:", json.results);
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("❌ Error fetching movies:", error);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;