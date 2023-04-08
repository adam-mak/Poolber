// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr33ulU-5yoZtdtzD68KtgER_NNSLa9qg",
  authDomain: "poolber.firebaseapp.com",
  projectId: "poolber",
  storageBucket: "poolber.appspot.com",
  messagingSenderId: "466012816725",
  appId: "1:466012816725:web:f58c4e523806a2152e1bdc",
  measurementId: "G-6BNYTM5TNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
