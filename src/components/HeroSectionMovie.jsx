
// import React from "react";
// import { useSelector } from "react-redux";
// import VideoTitle from "./VideoTitle";
// import VideoBackground from "./VideoBackground";

// const HeroSectionMovie = () => {
//   // ✅ Correct selector (depending on slice name)
//   const nowPlayingMovies = useSelector(
//     (store) => store.NowPlayingMovies.NowPlayingMovies
//   );

//   // ✅ Handle case when data is still null or empty
//   if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;

//   // ✅ Now safe to use
//   const mainMovie = nowPlayingMovies[1];
//   console.log("🎬 MainMovie:", mainMovie);

//   const {original_title , overview , id} = mainMovie

//   return (
//     <div>
//       <VideoTitle 
//         title={original_title}
//         overview={overview}
//       />
//       <VideoBackground movieId={id} />
//     </div>
//   );
// };

// export default HeroSectionMovie;




import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const HeroSectionMovie = () => {
  // Get selected movie from Redux (if user clicked on a movie)
  const selectedMovie = useSelector(
    (store) => store.SelectedMovie?.selectedMovie
  );

  // Get now playing movies as fallback
  const nowPlayingMovies = useSelector(
    (store) => store.NowPlayingMovies?.NowPlayingMovies
  );

  // Use selected movie if available, otherwise use first now playing movie
  let mainMovie = selectedMovie;
  
  if (!mainMovie && nowPlayingMovies && nowPlayingMovies.length > 0) {
    mainMovie = nowPlayingMovies[0];
  }

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* Overlay with title and info */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
        <div className="absolute top-1/2 left-8 md:left-12 transform -translate-y-1/2 z-10 max-w-2xl">
          <VideoTitle title={original_title} overview={overview} />
        </div>
      </div>

      {/* Fade bottom effect like Netflix */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSectionMovie;
