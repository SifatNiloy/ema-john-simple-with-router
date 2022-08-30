// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrwIUmA3_nZbFicEMWyoI3-kV2GUpNZH4",
    authDomain: "ema-john-simple-3317e.firebaseapp.com",
    projectId: "ema-john-simple-3317e",
    storageBucket: "ema-john-simple-3317e.appspot.com",
    messagingSenderId: "7842201597",
    appId: "1:7842201597:web:83679426cae1a8e9b4e394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;