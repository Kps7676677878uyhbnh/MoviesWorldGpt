
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // using react-icons for user avatar
import { auth } from "../utils/firebase";
import { useNavigate , Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO } from "../utils/constants";

/**
 * Header Component
 * 
 * This component displays the Netflix logo and user controls (avatar + sign out button).
 * It also manages authentication state and automatically redirects users based on their login status.
 */
const Header = () => {
  // Redux dispatch hook - used to update the global user state in the Redux store
  const dispatch = useDispatch();
 
  // React Router navigation hook - used to programmatically navigate between routes
  const navigate = useNavigate();

  /**
   * handleSignOut Function
   * 
   * Handles the user sign-out process:
   * 1. Signs out the user from Firebase Authentication
   * 2. On success: Redirects to the login page ("/")
   * 3. On error: Redirects to the error page ("/error")
   */
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful - redirect to login page
      navigate("/");
    }).catch((error) => {
      // An error happened during sign out - redirect to error page
      navigate("/error");
    });
  }

  /**
   * useEffect Hook - Authentication State Listener
   * 
   * This effect sets up a Firebase Authentication state listener that:
   * 1. Watches for changes in the user's authentication state (login/logout)
   * 2. Automatically updates Redux store with user data when signed in
   * 3. Automatically redirects users to appropriate pages based on auth state
   * 4. Cleans up the listener when the component unmounts to prevent memory leaks
   * 
   * Why we need cleanup: onAuthStateChanged returns an unsubscribe function.
   * If we don't clean it up, the listener will continue running even after the
   * component unmounts, which can cause memory leaks and unexpected behavior.
   */
  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function that we store
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in (either just logged in or already was logged in)
        // Extract user information from the Firebase user object
        const {uid , email , displayName} = user;
        
        // Update Redux store with user data so it's available throughout the app
        dispatch(addUser({uid : uid , email : email , displayName : displayName }));
        
        // Redirect authenticated users to the browse page
        navigate("/browse");
      } else {
        // User is signed out
        // Clear user data from Redux store
        dispatch(removeUser());
        
        // Redirect unauthenticated users to the login page
        navigate("/");
      }
    });

    // Cleanup function: Unsubscribe from the auth state listener when component unmounts
    // This prevents memory leaks and ensures the listener is removed when not needed
    return () => unsubscribe();
  }, [dispatch, navigate]) // Dependencies: Effect re-runs if dispatch or navigate change
  
  return (
    <div className="w-screen absolute flex justify-between items-center px-20 py-3 bg-gradient-to-b from-black z-10">
      {/* Netflix Logo - Clickable link that navigates to browse page */}
      <Link to="/browse" className="flex items-center gap-2">
        <img
          className="w-44 cursor-pointer"
          src={LOGO}
          alt="Netflix Logo"
        />
      </Link>
      
      {/* Right Section - User Avatar + Sign Out Button */}
      <div className="flex items-center gap-4">
        {/* User Avatar Icon */}
        <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-gray-300 transition" />

        {/* Sign Out Button - Calls handleSignOut function when clicked */}
        <button 
          onClick={handleSignOut} 
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
