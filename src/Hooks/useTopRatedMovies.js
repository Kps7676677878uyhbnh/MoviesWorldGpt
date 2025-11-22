import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/TopRatedMoviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
                API_options
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            console.log("⭐ Top Rated Movies:", json.results);
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error("❌ Error fetching top rated movies:", error);
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;

