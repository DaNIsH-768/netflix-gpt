// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {API_KEY} from "./API_KEY";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "netflixgpt-a3409.firebaseapp.com",
    projectId: "netflixgpt-a3409",
    storageBucket: "netflixgpt-a3409.firebasestorage.app",
    messagingSenderId: "578979785006",
    appId: "1:578979785006:web:ed5d06e98a8eed912972bf",
    measurementId: "G-WGN6YS63N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();