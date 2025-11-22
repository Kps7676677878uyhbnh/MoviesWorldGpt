import React from "react";
import { useSelector } from "react-redux";
import MoviesLists from "./MoviesLists";

const MoviesListSlides = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.NowPlayingMovies?.NowPlayingMovies
  );
  const popularMovies = useSelector(
    (store) => store.PopularMovies?.PopularMovies
  );
  const topRatedMovies = useSelector(
    (store) => store.TopRatedMovies?.TopRatedMovies
  );
  const upcomingMovies = useSelector(
    (store) => store.UpcomingMovies?.UpcomingMovies
  );

  return (
    <div className="mt-8">
      {nowPlayingMovies && (
        <MoviesLists title="Now Playing" movies={nowPlayingMovies} />
      )}
      {popularMovies && (
        <MoviesLists title="Popular Movies" movies={popularMovies} />
      )}
      {topRatedMovies && (
        <MoviesLists title="Top Rated" movies={topRatedMovies} />
      )}
      {upcomingMovies && (
        <MoviesLists title="Upcoming Movies" movies={upcomingMovies} />
      )}
    </div>
  );
};

export default MoviesListSlides;