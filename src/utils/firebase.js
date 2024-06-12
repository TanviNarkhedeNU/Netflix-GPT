// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-SUMNkqVPLVu5mVcAWAE5T30QYVMYwRQ",
  authDomain: "netflixgpt-280e5.firebaseapp.com",
  projectId: "netflixgpt-280e5",
  storageBucket: "netflixgpt-280e5.appspot.com",
  messagingSenderId: "575506656192",
  appId: "1:575506656192:web:3869c394eb1b909aa9b625",
  measurementId: "G-Z6VQQQBDWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
