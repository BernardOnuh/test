// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgcv6Zqa_hk6Ske-uFjswV7RyB4r3oQlQ",
  authDomain: "vyperium.firebaseapp.com",
  projectId: "vyperium",
  storageBucket: "vyperium.appspot.com",
  messagingSenderId: "888569682802",
  appId: "1:888569682802:web:8a839f2555f0627e875beb",
  measurementId: "G-58SCMBET5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);