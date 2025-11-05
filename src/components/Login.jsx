


// src/components/Login.jsx
import React, { useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  // ✅ Correct variable names
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [password, setpassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState(null);

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    const message = checkValidData(email, password);
    if (message) {
      setErrorMessage(message);
      return; // stop further execution
    }

    // Log form data
    if (isSignInForm) {
      console.log("🟢 User trying to Sign In");
    } else {
      console.log("🟢 User trying to Sign Up");
    }

    console.log("Email:", email, "FullName:", fullname, "Password:", password);
    setErrorMessage(null);
  };

  // ✅ Toggle between Sign In / Sign Up
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative h-screen bg-black text-white">
      <Header />

      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_small.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover opacity-50"
      />

      {/* Form Box */}
      <form
        onSubmit={handleSubmit}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-black bg-opacity-75 p-10 rounded-md w-80">
          <h1 className="text-2xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              className="p-2 mb-3 w-full rounded bg-gray-800 focus:outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="p-2 mb-3 w-full rounded bg-gray-800 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="p-2 mb-4 w-full rounded bg-gray-800 focus:outline-none"
          />

          {/* Show validation error if any */}
          {ErrorMessage && (
            <p className="text-red-500 text-sm mb-3">{ErrorMessage}</p>
          )}

          <button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle text */}
          <p className="mt-4 text-sm text-gray-400 text-center">
            {isSignInForm ? (
              <>
                New to Netflix?{" "}
                <span
                  onClick={toggleForm}
                  className="text-white cursor-pointer hover:underline"
                >
                  Sign up now
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={toggleForm}
                  className="text-white cursor-pointer hover:underline"
                >
                  Sign in
                </span>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
