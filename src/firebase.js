import firebase from "firebase";
  
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNf8NyQByaW_g7cdo1z6vz0QWzPONnRrY",
    authDomain: "facebook-msg-cloned.firebaseapp.com",
    projectId: "facebook-msg-cloned",
    storageBucket: "facebook-msg-cloned.appspot.com",
    messagingSenderId: "754915698478",
    appId: "1:754915698478:web:21645fd321958b377e3cbf",
    measurementId: "G-Z51CS6ELVM"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;