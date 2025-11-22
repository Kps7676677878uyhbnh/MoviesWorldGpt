import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../utils/SelectedMovieSlice";

const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  if (!movie) return null;

  const posterPath = movie?.poster_path 
    ? IMG_CDN_URL + movie.poster_path 
    : "https://via.placeholder.com/500x750?text=No+Image";

  const handleClick = () => {
    dispatch(setSelectedMovie(movie));
    // Scroll to top to show the hero section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="group cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-20 flex-shrink-0"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        {/* Movie Poster */}
        <img
          src={posterPath}
          alt={movie?.title || "Movie poster"}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-75"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
          }}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white w-full">
            <h3 className="text-base font-bold mb-2 line-clamp-2">
              {movie?.title}
            </h3>
            <div className="flex items-center gap-3 text-sm">
              {movie?.vote_average && (
                <p className="text-yellow-400 font-semibold">
                  ⭐ {movie.vote_average.toFixed(1)}
                </p>
              )}
              {movie?.release_date && (
                <p className="text-gray-300">
                  {new Date(movie.release_date).getFullYear()}
                </p>
              )}
            </div>
            {movie?.overview && (
              <p className="text-xs text-gray-300 mt-2 line-clamp-3">
                {movie.overview}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;