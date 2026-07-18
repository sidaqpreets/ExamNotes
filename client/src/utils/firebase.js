

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-37113.firebaseapp.com",
  projectId: "authexamnotes-37113",
  storageBucket: "authexamnotes-37113.firebasestorage.app",
  messagingSenderId: "98959602920",
  appId: "1:98959602920:web:a2f07e72a963bd0d3ac55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

const provider= new GoogleAuthProvider()

export {auth,provider}