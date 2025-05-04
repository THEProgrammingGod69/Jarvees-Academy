import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLphx-Cj2Z-Gk2i0vxgfrZAo6_L91HlgE",
  authDomain: "jarveesinfotech-89913.firebaseapp.com",
  projectId: "jarveesinfotech-89913",
  storageBucket: "jarveesinfotech-89913.firebasestorage.app",
  messagingSenderId: "114156250125",
  appId: "1:114156250125:web:eb872a39f48c3bfe61a144",
  measurementId: "G-PK7FWCJWKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, db, auth };