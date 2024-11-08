// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC0_LKSeQHqS8SX_misv6Qv7ocXTnLg4A",
    authDomain: "dimple-firebase-project-70457.firebaseapp.com",
    projectId: "dimple-firebase-project-70457",
    storageBucket: "dimple-firebase-project-70457.firebasestorage.app",
    messagingSenderId: "779455983703",
    appId: "1:779455983703:web:5a6f9a0697846bc081f312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;