// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3IhFwrjqnUsOsxBIR186nFyDTu1jSnp4",
  authDomain: "social-redis.firebaseapp.com",
  projectId: "social-redis",
  storageBucket: "social-redis.appspot.com",
  messagingSenderId: "94605809294",
  appId: "1:94605809294:web:23cfbd4235b38eea6a5bdf",
  measurementId: "G-E1M0Z7KDLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);