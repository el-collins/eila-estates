// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eila-estate.firebaseapp.com",
  projectId: "eila-estate",
  storageBucket: "eila-estate.appspot.com",
  messagingSenderId: "520797513429",
  appId: "1:520797513429:web:a595d5430fec49a970245c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);