import React from "react";
import MovieCard from "./MovieCard";

const MoviesLists = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-12 relative">
      <h2 className="text-2xl font-bold mb-4 text-white px-8 md:px-12">{title}</h2>
      <div className="relative">
        {/* Fade effect on the right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrollable movie list */}
        <div className="flex overflow-x-auto gap-4 px-8 md:px-12 scrollbar-hide scroll-smooth">
          {movies.map((movie) => (
            <div key={movie.id} className="w-48 md:w-56 flex-shrink-0">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesLists;