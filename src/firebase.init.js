// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB37jmrAEAZdcAPsCLGcDiaog6BRN9s-Eg",
  authDomain: "assignment-10-dd02c.firebaseapp.com",
  projectId: "assignment-10-dd02c",
  storageBucket: "assignment-10-dd02c.firebasestorage.app",
  messagingSenderId: "435497696911",
  appId: "1:435497696911:web:0d6e4f4c28a28b1198fafa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);