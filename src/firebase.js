// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAVJLb7_uXIp6R4FkB463xfYs6l9PySbPw",
  authDomain: "disneyplus-cd068.firebaseapp.com",
  projectId: "disneyplus-cd068",
  storageBucket: "disneyplus-cd068.appspot.com",
  messagingSenderId: "319304671126",
  appId: "1:319304671126:web:94ffa6bb566b15b0c507b7",
  measurementId: "G-5TSXFBKJR6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
