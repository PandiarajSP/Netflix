// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhJRndZnR3ayoD-GrCUdo2Iiw2V67aeH0",
  authDomain: "netflix-gpt-270d8.firebaseapp.com",
  projectId: "netflix-gpt-270d8",
  storageBucket: "netflix-gpt-270d8.firebasestorage.app",
  messagingSenderId: "684518498188",
  appId: "1:684518498188:web:b50e2fe7305c49f74ac0a9",
  measurementId: "G-2VP0JNBP5G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics: Analytics = getAnalytics(app);

export const auth = getAuth();
