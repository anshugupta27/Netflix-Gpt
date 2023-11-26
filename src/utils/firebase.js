// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqyzblPEoeLmfECd5-M7IUrILFFvmamfY",
  authDomain: "netflix-gpt-1344f.firebaseapp.com",
  projectId: "netflix-gpt-1344f",
  storageBucket: "netflix-gpt-1344f.appspot.com",
  messagingSenderId: "596982230839",
  appId: "1:596982230839:web:3def3091129e2dc8a074b2",
  measurementId: "G-NDBB3Q8XHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();