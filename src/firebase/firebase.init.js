// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZFQm7MwUccQDndCoiUt-V0AaGYdSWmGY",
  authDomain: "fir-conceptual1-f0f74.firebaseapp.com",
  projectId: "fir-conceptual1-f0f74",
  storageBucket: "fir-conceptual1-f0f74.firebasestorage.app",
  messagingSenderId: "983030477832",
  appId: "1:983030477832:web:4baa700cad4118aae18dbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);