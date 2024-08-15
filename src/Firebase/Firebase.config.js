// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8L6x8u5rSwcxB3M4OVSukWEtoMBkMC_0",
  authDomain: "showmart-dd30a.firebaseapp.com",
  projectId: "showmart-dd30a",
  storageBucket: "showmart-dd30a.appspot.com",
  messagingSenderId: "111482953414",
  appId: "1:111482953414:web:72e8d364e510b961f801c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
