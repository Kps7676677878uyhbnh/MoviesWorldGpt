import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/UpcomingMoviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
                API_options
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            console.log("🎬 Upcoming Movies:", json.results);
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("❌ Error fetching upcoming movies:", error);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;

