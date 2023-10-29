// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsIZWrZ2y9ynW5CJgFaklfA5lGh20ZEGE",
  authDomain: "netflixgpt-5b7bc.firebaseapp.com",
  projectId: "netflixgpt-5b7bc",
  storageBucket: "netflixgpt-5b7bc.appspot.com",
  messagingSenderId: "1019498841886",
  appId: "1:1019498841886:web:4b001cf072d6284133eb0f",
  measurementId: "G-KYH70JC48Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);