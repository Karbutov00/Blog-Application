// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUhD36dolf2TS7xKqVAHslM5eYF4DY8Rc",
    authDomain: "blog-application-11d37.firebaseapp.com",
    projectId: "blog-application-11d37",
    storageBucket: "blog-application-11d37.appspot.com",
    messagingSenderId: "304072583688",
    appId: "1:304072583688:web:fe992b245aacbabf6abfbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
