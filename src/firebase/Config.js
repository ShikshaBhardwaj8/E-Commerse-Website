// src/firebase/config.js

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAM1sn2DId3abdkNwxJG5ghmzaBSr5IjL0",
  authDomain: "pizza-man-clone.firebaseapp.com",
  projectId: "pizza-man-clone",
  storageBucket: "pizza-man-clone.appspot.com",
  messagingSenderId: "370868189571",
  appId: "1:370868189571:web:1c7503c77b641323959eb6",
  measurementId: "G-HCHRRNMRLX"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export services for use in the app
export { app, analytics, auth, db };
