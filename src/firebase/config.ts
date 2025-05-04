// Firebase configuration
// This file should be imported in main.ts to initialize Firebase

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDLphx-Cj2Z-Gk2i0vxgfrZAo6_L91HlgE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "jarveesinfotech-89913.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "jarveesinfotech-89913",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "jarveesinfotech-89913.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "114156250125",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:114156250125:web:eb872a39f48c3bfe61a144",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-PK7FWCJWKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };