

// import React from "react";

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="absolute top-40 left-12 text-white max-w-2xl">
//       <h1 className="text-5xl font-bold mb-4">{title}</h1>
//       <p className="text-lg text-gray-300 mb-6">{overview}</p>

//       <div className="flex space-x-4">
//         <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
//           ▶ Play
//         </button>
//         <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition">
//           ℹ More Info
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;





import React from "react";

const VideoTitle = ({ title, overview }) => {
  // Truncate overview if too long
  const truncatedOverview = overview && overview.length > 150 
    ? overview.substring(0, 150) + "..." 
    : overview;

  return (
    <div className="text-white max-w-xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg line-clamp-2">
        {title}
      </h1>
      <p className="text-sm md:text-lg text-gray-300 mb-6 line-clamp-3">
        {truncatedOverview}
      </p>

      <div className="flex flex-wrap gap-3">
        <button className="bg-white text-black px-4 md:px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition text-sm md:text-base">
          ▶ Play
        </button>
        <button className="bg-gray-800 bg-opacity-60 text-white px-4 md:px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition text-sm md:text-base">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

