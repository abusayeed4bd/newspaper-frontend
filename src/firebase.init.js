// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn5O54N8SNTt_NWS6ClHQAfN3W9TGA5wU",
    authDomain: "the-daily-news-f69cc.firebaseapp.com",
    projectId: "the-daily-news-f69cc",
    storageBucket: "the-daily-news-f69cc.appspot.com",
    messagingSenderId: "893074363353",
    appId: "1:893074363353:web:15ed1c3ef02fc3d895bfc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;