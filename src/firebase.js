import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyVjvRFkYNQD_UHiE1CERpQfhqBFMiBpM",
  authDomain: "netflix-clone-54651.firebaseapp.com",
  projectId: "netflix-clone-54651",
  storageBucket: "netflix-clone-54651.appspot.com",
  messagingSenderId: "1008604349798",
  appId: "1:1008604349798:web:003afe9258912cbdec74a7",
  measurementId: "G-DK1GL8RGQX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
