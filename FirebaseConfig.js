import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ZxOaaimm7HqS4yk5zBjtFDMtovoPeF4",
  authDomain: "food-c0c2f.firebaseapp.com",
  projectId: "food-c0c2f",
  storageBucket: "food-c0c2f.appspot.com",
  messagingSenderId: "695261529096",
  appId: "1:695261529096:web:7acded2afe7ff337affdbd"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);
// export const DB_COLLECTION = collection(FIREBASE_APP);
// export const ADD_DOC = addDoc(FIREBASE_APP);
// export const LIMIT = limit(FIREBASE_APP);
// export const DB_QUERY = query(FIREBASE_APP);
// export const GET_DOCS = getDocs(FIREBASE_APP);
// export const ORDER_BY = orderBy(FIREBASE_APP);