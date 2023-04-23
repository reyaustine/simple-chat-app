
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALBjdyDpiP2vhyOhGD_rbgBpk_TLfqDiQ",
  authDomain: "chat-app-b5b54.firebaseapp.com",
  projectId: "chat-app-b5b54",
  storageBucket: "chat-app-b5b54.appspot.com",
  messagingSenderId: "92457125538",
  appId: "1:92457125538:web:61e8864018a29b5488f9fb",
  measurementId: "G-BW55927VZZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();