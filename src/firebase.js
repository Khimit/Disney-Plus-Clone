// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage"

const VITE_FB_APIKEY = import.meta.env.VITE_FB_APIKEY;
const VITE_FB_AUTHDOMAIN = import.meta.env.VITE_FB_AUTHDOMAIN;
const VITE_FB_PROJECTID = import.meta.env.VITE_VITE_FB_PROJECTID;
const VITE_FB_STORAGEBUCKET = import.meta.env.VITE_VITE_FB_STORAGEBUCKET;
const VITE_FB_MESSAGINGSENDERID = import.meta.env.VITE_VITE_FB_MESSAGINGSENDERID;
const VITE_FB_APPID = import.meta.env.VITE_VITE_FB_APPID;
const VITE_FB_MEASUREMENTID = import.meta.env.VITE_VITE_FB_MEASUREMENTID;

const firebaseConfig = {
  apiKey: VITE_FB_APIKEY,
  authDomain: VITE_FB_AUTHDOMAIN,
  projectId: VITE_FB_PROJECTID,
  storageBucket: VITE_FB_STORAGEBUCKET,
  messagingSenderId: VITE_FB_MESSAGINGSENDERID,
  appId: VITE_FB_APPID,
  measurementId: VITE_FB_MEASUREMENTID,
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
