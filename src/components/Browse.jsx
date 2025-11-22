import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import HeroSectionMovie from "./HeroSectionMovie";
import MoviesListSlides from "./MoviesListSlides";

const Browse = () => {
  // Fetch all movie categories
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <HeroSectionMovie />
        <MoviesListSlides />
      </div>
    </div>
  );
};

export default Browse;


