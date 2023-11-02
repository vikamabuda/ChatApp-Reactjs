// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6QvaDl-2UkrFikGN6_bcVPyIWIjriWMs",
  authDomain: "versatile-app-351cb.firebaseapp.com",
  projectId: "versatile-app-351cb",
  storageBucket: "versatile-app-351cb.appspot.com",
  messagingSenderId: "1003594965541",
  appId: "1:1003594965541:web:aa2de072ed25c0bbd655cc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)