import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc, Timestamp, onSnapshot} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGhYoeVZUekYYjHOLHNEHG60C2aIyv45A",
  authDomain: "finance-tracker-b1c94.firebaseapp.com",
  projectId: "finance-tracker-b1c94",
  storageBucket: "finance-tracker-b1c94.appspot.com",
  messagingSenderId: "360212626226",
  appId: "1:360212626226:web:a6a25c96eab855d84df52b",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init service
const projectFirestore = getFirestore(app);
const auth = getAuth();

export {
  auth,
  projectFirestore,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  getDocs,
  collection,
  addDoc,
  Timestamp,
  onSnapshot
};
