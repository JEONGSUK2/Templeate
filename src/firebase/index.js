// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCrHSJAKFOGzGR_5quf8wEB1lo7_Rpq5eg",
  // authDomain: "reacttemplate-285e5.firebaseapp.com",
  // projectId: "reacttemplate-285e5",
  // storageBucket: "reacttemplate-285e5.appspot.com",
  // messagingSenderId: "827990410137",
  // appId: "1:827990410137:web:8f6839ac4f403fadf98908"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export{firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, GithubAuthProvider, signInWithPopup}
