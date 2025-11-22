import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addPopularMovies } from "../utils/PopularMoviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
                API_options
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            console.log("🔥 Popular Movies:", json.results);
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error("❌ Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;

