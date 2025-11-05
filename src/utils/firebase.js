// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_SBPVw0JkLt7dXS8dG8f02fjtr-K2QOU",
  authDomain: "netflixgpt-177da.firebaseapp.com",
  projectId: "netflixgpt-177da",
  storageBucket: "netflixgpt-177da.firebasestorage.app",
  messagingSenderId: "1043296104348",
  appId: "1:1043296104348:web:1e738ea998444e3eb02259",
  measurementId: "G-MD8W553HPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);