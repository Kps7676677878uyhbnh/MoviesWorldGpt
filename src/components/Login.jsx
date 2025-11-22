


// // src/components/Login.jsx
// import React, { useState } from "react";
// import Header from "./Header";
// import checkValidData from "../utils/validation";
// import {createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../utils/firebase"

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);

//   // ✅ Correct variable names
//   const [email, setemail] = useState("");
//   const [fullname, setfullname] = useState("");
//   const [password, setpassword] = useState("");
//   const [ErrorMessage, setErrorMessage] = useState(null);

//   // ✅ Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email and password
//     const message = checkValidData(email, password);
//     if (message) {
//       setErrorMessage(message);
//       return; // stop further execution
//     }

//     if(message) return;

//       // sign in and sign up logic here 

//     if(!isSignInForm){
//       // Sign Up logic
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log("user : " , user)

//   })
//   .catch((error) => {
//   //   const errorCode = error.code;
//   //   const errorMessage = error.message;
//   //   console.log("ErrorCode : " , errorCode , "ErrorMessage : " , errorMessage)
//   // setErrorMessage(errorCode + "-" + errorMessage)
  
//   console.log("🔥 Firebase Signup Error:", error);
//   setErrorMessage(error.code + " - " + error.message);

//   });



//     }else{
//       // Sign In logic
//       signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log("user : " , user)
    
//   })
//   .catch((error) => {
//     // const errorCode = error.code;
//     // const errorMessage = error.message;

//     console.log("🔥 Firebase Signup Error:", error);
//   setErrorMessage(error.code + " - " + error.message);

//   });


//     }

//     // Log form data
//     if (isSignInForm) {
//       console.log("🟢 User trying to Sign In");
//     } else {
//       console.log("🟢 User trying to Sign Up");
//     }

//     console.log("Email:", email, "FullName:", fullname, "Password:", password);
//     setErrorMessage(null);
//   };

//   // ✅ Toggle between Sign In / Sign Up
//   const toggleForm = () => {
//     setIsSignInForm(!isSignInForm);
//     setErrorMessage(null);
//   };

//   return (
//     <div className="relative h-screen bg-black text-white">
//       <Header />

//       {/* Background Image */}
//       <img
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_small.jpg"
//         alt="Background"
//         className="absolute w-full h-full object-cover opacity-50"
//       />

//       {/* Form Box */}
//       <form
//         onSubmit={handleSubmit}
//         className="absolute inset-0 flex items-center justify-center"
//       >
//         <div className="bg-black bg-opacity-75 p-10 rounded-md w-80">
//           <h1 className="text-2xl font-bold mb-4">
//             {isSignInForm ? "Sign In" : "Sign Up"}
//           </h1>

//           {!isSignInForm && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullname}
//               onChange={(e) => setfullname(e.target.value)}
//               className="p-2 mb-3 w-full rounded bg-gray-800 focus:outline-none"
//             />
//           )}

//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             className="p-2 mb-3 w-full rounded bg-gray-800 focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//             className="p-2 mb-4 w-full rounded bg-gray-800 focus:outline-none"
//           />

//           {/* Show validation error if any */}
//           {ErrorMessage && (
//             <p className="text-red-500 text-sm mb-3">{ErrorMessage}</p>
//           )}

//           <button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
//             {isSignInForm ? "Sign In" : "Sign Up"}
//           </button>

//           {/* Toggle text */}
//           <p className="mt-4 text-sm text-gray-400 text-center">
//             {isSignInForm ? (
//               <>
//                 New to Netflix?{" "}
//                 <span
//                   onClick={toggleForm}
//                   className="text-white cursor-pointer hover:underline"
//                 >
//                   Sign up now
//                 </span>
//               </>
//             ) : (
//               <>
//                 Already have an account?{" "}
//                 <span
//                   onClick={toggleForm}
//                   className="text-white cursor-pointer hover:underline"
//                 >
//                   Sign in
//                 </span>
//               </>
//             )}
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;






// src/components/Login.jsx
import React, { useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validation";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";

/**
 * Login Component
 * 
 * This component handles user authentication (Sign In and Sign Up).
 * It displays a form that toggles between Sign In and Sign Up modes,
 * validates user input, authenticates with Firebase, and redirects
 * users to the browse page upon successful authentication.
 */
const Login = () => {
  // State to toggle between Sign In (true) and Sign Up (false) forms
  const [isSignInForm, setIsSignInForm] = useState(true);
  
  // Redux dispatch hook - used to update the global user state
  const dispatch = useDispatch();
  
  // React Router navigation hook - used to redirect after successful authentication
  const navigate = useNavigate();

  // Form input state variables
  const [email, setemail] = useState("");           // User's email address
  const [fullname, setfullname] = useState("");     // User's full name (only for Sign Up)
  const [password, setpassword] = useState("");     // User's password
  const [ErrorMessage, setErrorMessage] = useState(null); // Error message to display if validation/auth fails

  /**
   * handleSubmit Function
   * 
   * Handles form submission for both Sign In and Sign Up:
   * 1. Prevents default form submission behavior
   * 2. Validates email and password format
   * 3. If validation passes, authenticates user with Firebase
   * 4. On success: Updates Redux store and redirects to browse page
   * 5. On error: Displays error message to the user
   */
  const handleSubmit = (e) => {
    // Prevent default form submission (page reload)
    e.preventDefault();

    // Validate email and password format using validation utility
    // Returns error message string if validation fails, null if valid
    const message = checkValidData(email, password);
    if (message) {
      // Validation failed - display error and stop execution
      setErrorMessage(message);
      return; // Stop further execution, don't proceed with authentication
    }

      // sign in and sign up logic here 

    if(!isSignInForm){
      /**
       * SIGN UP LOGIC
       * Creates a new user account with Firebase Authentication
       */
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user : " , user)
    dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }))
    navigate("/browse")
  })
  .catch((error) => {
    // Sign up failed - display error message to user
    console.log("🔥 Firebase Signup Error:", error);
    setErrorMessage(error.code + " - " + error.message);
  });



    }else{
      /**
       * SIGN IN LOGIC
       * Authenticates existing user with Firebase Authentication
       */
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user : " , user)
    dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }))
    navigate("/browse")
  })
  .catch((error) => {
    // Sign in failed - display error message to user
    console.log("🔥 Firebase Signin Error:", error);
    setErrorMessage(error.code + " - " + error.message);
  });


    }

    // Debug logging (for development purposes)
    if (isSignInForm) {
      console.log("🟢 User trying to Sign In");
    } else {
      console.log("🟢 User trying to Sign Up");
    }

    console.log("Email:", email, "FullName:", fullname, "Password:", password);
    setErrorMessage(null);
  };

  /**
   * toggleForm Function
   * 
   * Toggles between Sign In and Sign Up form modes.
   * Also clears any error messages when switching modes.
   */
  const toggleForm = () => {
    // Switch between Sign In (true) and Sign Up (false)
    setIsSignInForm(!isSignInForm);
    // Clear any error messages when toggling
    setErrorMessage(null);
  };

  return (
    <div className="relative h-screen bg-black text-white">
      {/* Header component with Netflix logo and navigation */}
      <Header />

      {/* Background Image - Netflix promotional image with reduced opacity */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_small.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover opacity-50"
      />

      {/* Authentication Form - Centered on the page */}
      <form
        onSubmit={handleSubmit}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-black bg-opacity-75 p-10 rounded-md w-80">
          {/* Form Title - Changes based on Sign In/Sign Up mode */}
          <h1 className="text-2xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Full Name Input - Only shown during Sign Up */}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              className="p-2 mb-3 w-full rounded bg-gray-800 focus:outline-none"
            />
          )}

          {/* Email Input - Required for both Sign In and Sign Up */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="p-2 mb-3 w-full rounded bg-gray-800 focus:outline-none"
          />
          
          {/* Password Input - Required for both Sign In and Sign Up */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="p-2 mb-4 w-full rounded bg-gray-800 focus:outline-none"
          />

          {/* Error Message Display - Shows validation or authentication errors */}
          {ErrorMessage && (
            <p className="text-red-500 text-sm mb-3">{ErrorMessage}</p>
          )}

          {/* Submit Button - Text changes based on Sign In/Sign Up mode */}
          <button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle Text - Allows users to switch between Sign In and Sign Up */}
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
