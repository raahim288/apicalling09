// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGa3rHab-oxnjr0Ico3sYQJjGZzoSPwsM",
  authDomain: "final-5e4b8.firebaseapp.com",
  projectId: "final-5e4b8",
  storageBucket: "final-5e4b8.appspot.com",
  messagingSenderId: "103443377504",
  appId: "1:103443377504:web:cde6698b4a33545bcb4205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app) 

export default auth