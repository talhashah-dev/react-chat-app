import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfJ4YM1CEgT0z_J1LNHs7zp9oWLCoOfUM",
  authDomain: "react-chat-app-94da9.firebaseapp.com",
  projectId: "react-chat-app-94da9",
  storageBucket: "react-chat-app-94da9.appspot.com",
  messagingSenderId: "293041998017",
  appId: "1:293041998017:web:42efaf4040d41ba5242c40",
  measurementId: "G-3THXJG4E3S"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
