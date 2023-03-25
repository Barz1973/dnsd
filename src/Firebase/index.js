// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYFGGqzFQfuLmtVrxZdt7C86Cl2K4LU4",
  authDomain: "vue-auth-57b74.firebaseapp.com",
  projectId: "vue-auth-57b74",
  storageBucket: "vue-auth-57b74.appspot.com",
  messagingSenderId: "905545107331",
  appId: "1:905545107331:web:37e49928b948e3331dd8b6",
  measurementId: "G-SV2B960BZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }