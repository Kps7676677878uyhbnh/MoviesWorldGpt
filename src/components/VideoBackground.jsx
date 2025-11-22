


// import React, { useEffect } from "react";
// import { API_options } from "../utils/constants";
// import { useState } from "react";

// const VideoBackground = ({ movieId }) => {

//   const [trailerId , settrailerId] = useState()
//   // ✅ Define an async function to fetch the trailer
//   const getNowPlayingMoviesTrailer = async () => {
//     try {
//       // ✅ Always use the movieId prop instead of hardcoding it
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//         API_options
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log("🎬 Now Playing Movies Trailer:", json.results);

//       // ✅ Find the video with type === "Trailer"
//       let trailer = json.results.find((video) => video.type === "Trailer");
//       console.log("✅ Found Trailer:", trailer);
//       settrailerId(trailer.key)
//       // console.log("trailerid : " , trailerId)

//       // ✅ If no trailer found, pick first video (fallback)
//       if (!trailer) {
//         trailer = json.results[0];
//       }

//       console.log("🎞️ Final Trailer Selected:", trailer);
//          console.log("trailerid : " , trailerId)

//       // 👉 You can later embed this YouTube trailer using:
//       // https://www.youtube.com/embed/${trailer.key}
//     } catch (error) {
//       console.error("❌ Error fetching movie trailer:", error);
//     }
//   };

//   // ✅ Fetch trailer when component mounts or when movieId changes
//   useEffect(() => {
//     if (movieId) {
//       getNowPlayingMoviesTrailer();
//     }
//   }, [movieId]);

//   return <div>
// {/* 
// <iframe width="560" height="315" src="https://www.youtube.com/embed/9PgcAIgpwPA?si=VBLDCC_a06NyHmsa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}


// <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//   </div>;
// };

// export default VideoBackground;



// import React, { useEffect, useState } from "react";
// import { API_options } from "../utils/constants";

// const VideoBackground = ({ movieId }) => {
//   const [trailerId, setTrailerId] = useState(null);

//   const getNowPlayingMoviesTrailer = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//         API_options
//       );

//       const json = await response.json();

//       // 1️⃣ Find trailer
//       let trailer = json.results.find(
//         (video) => video.type === "Trailer" && video.site === "YouTube"
//       );

//       // 2️⃣ If not found, use first video
//       if (!trailer) {
//         trailer = json.results[0];
//       }

//       // 3️⃣ Now safely set state
//       if (trailer) {
//         setTrailerId(trailer.key);
//         console.log("🎞️ Final Trailer Key:", trailer.key);
//       }
//     } catch (error) {
//       console.error("❌ Error fetching movie trailer:", error);
//     }
//   };

//   useEffect(() => {
//     if (movieId) getNowPlayingMoviesTrailer();
//   }, [movieId]);

//   return (
//     <div>
//       {trailerId ? (
//         <iframe
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
//           allowFullScreen
//         ></iframe>
//       ) : (
//         <p>Loading trailer...</p>
//       )}
//     </div>
//   );
// };

// export default VideoBackground;






import React, { useEffect, useState } from "react";
import { API_options } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);

  const getNowPlayingMoviesTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_options
      );

      const json = await response.json();

      let trailer = json.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      if (!trailer) trailer = json.results[0];

      if (trailer) setTrailerId(trailer.key);
    } catch (error) {
      console.error("❌ Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) getNowPlayingMoviesTrailer();
  }, [movieId]);

  if (!trailerId) return null;

  return (
    <iframe
      className="w-full h-full absolute top-0 left-0 object-cover"
      src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}`}
      title="Movie Trailer"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
