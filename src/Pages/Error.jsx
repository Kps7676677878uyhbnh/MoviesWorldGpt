// import { useRouteError } from "react-router-dom";


// const Error = () => {
// 	const error = useRouteError();
// 	console.log(error);
// 	return(
// 		<div className="p-6">
// 			<h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
// 			<p className="text-gray-700">{error?.status} {error?.statusText || error?.message}</p>
// 		</div>
// 	)
// }

// export default Error;


// src/Pages/Error.jsx
import React from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err);
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Oops! Something went wrong 😢</h1>
      <p className="text-lg text-gray-300 mb-6">
        {err?.statusText || err?.message || "An unexpected error occurred."}
      </p>

      <div className="text-sm text-gray-400 mb-8">
        Error Code: {err?.status || "Unknown"}
      </div>

      <Link
        // to="/"
         onClick={() => navigate("/")}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-300"
      >
        ⬅ Go Back to Home
      </Link>
    </div>
  );
};

export default Error;
