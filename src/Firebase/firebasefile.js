// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATt_BBa8OKppDWjpbxjMik7HFBUJrJIpA",
  authDomain: "fir-auth-1e641.firebaseapp.com",
  projectId: "fir-auth-1e641",
  storageBucket: "fir-auth-1e641.firebasestorage.app",
  messagingSenderId: "1051258340075",
  appId: "1:1051258340075:web:8a3c7ef75c0b6a0200b4ae",
  measurementId: "G-RB6NHE37MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
console.log(analytics);
export const db = getFirestore(app);
