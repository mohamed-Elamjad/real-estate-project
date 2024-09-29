// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ea62b.firebaseapp.com",
  projectId: "mern-estate-ea62b",
  storageBucket: "mern-estate-ea62b.appspot.com",
  messagingSenderId: "522778241212",
  appId: "1:522778241212:web:aaf84dd97370070e5488b9",
  measurementId: "G-Y6WM7LQQJH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
