// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZIti_UgzFC1C1SSx7G6My0KzOfu0kRUA",
    authDomain: "tools-artisan.firebaseapp.com",
    projectId: "tools-artisan",
    storageBucket: "tools-artisan.appspot.com",
    messagingSenderId: "115212276248",
    appId: "1:115212276248:web:45df1f6e07f8cb575c296d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;