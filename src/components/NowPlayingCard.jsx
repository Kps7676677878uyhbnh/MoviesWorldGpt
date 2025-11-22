// // src/components/MovieCard.jsx
// import React from "react";

// const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"; // TMDB base image path

// const MovieCard = ({ movie }) => {
//   // destructuring movie object for cleaner code
//   const {
//     title,
//     poster_path,
//     vote_average,
//     release_date,
//     overview,
//   } = movie;

//   return (
//     <div className="bg-gray-900 text-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden hover:scale-105 cursor-pointer">
//       {/* Poster */}
//       <img
//         src={poster_path ? IMG_CDN_URL + poster_path : "https://via.placeholder.com/500x750?text=No+Image"}
//         alt={title}
//         className="w-full h-80 object-cover"
//       />

//       {/* Content */}
//       <div className="p-4">
//         <h2 className="text-lg font-bold mb-2 truncate">{title}</h2>

//         <div className="flex justify-between text-sm text-gray-400 mb-2">
//           <span>⭐ {vote_average.toFixed(1)}</span>
//           <span>{release_date}</span>
//         </div>

//         <p className="text-gray-300 text-sm line-clamp-3">
//           {overview}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;


import React from "react";

const NowPlayingCard = ({ movie }) => {
  // TMDB image base URL
  const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  // Handle missing poster image
  const posterPath = movie?.poster_path 
    ? IMG_CDN_URL + movie.poster_path 
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Movie Poster */}
        <img
          src={posterPath}
          alt={movie?.title || "Movie poster"}
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
          }}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
          <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-sm font-bold mb-1 line-clamp-2">
              {movie?.title}
            </h3>
            {movie?.vote_average && (
              <p className="text-xs text-yellow-400">
                ⭐ {movie.vote_average.toFixed(1)}/10
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingCard;