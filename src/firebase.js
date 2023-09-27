// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAfxSnfjRBx0zTXdJQNJxVeDs_ITyEVQo",
  authDomain: "car-parking-a17fe.firebaseapp.com",
  databaseURL: "https://car-parking-a17fe-default-rtdb.firebaseio.com",
  projectId: "car-parking-a17fe",
  storageBucket: "car-parking-a17fe.appspot.com",
  messagingSenderId: "147213126849",
  appId: "1:147213126849:web:b636b3a6aada01dca49840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const fs = getFirestore(app);