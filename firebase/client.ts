import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB1kdW80Aga2IAzv9Ce_GXnOScy91phnsA",
  authDomain: "hireflow-cc2ac.firebaseapp.com",
  projectId: "hireflow-cc2ac",
  storageBucket: "hireflow-cc2ac.firebasestorage.app",
  messagingSenderId: "31720983107",
  appId: "1:31720983107:web:09ac0ad59d1250d28b62f6",
  measurementId: "G-ESQZG0YY8J"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);