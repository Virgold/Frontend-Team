// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQYj6f7cupH_nX53HB8mw1PUXYwHSUmA",
  authDomain: "nouvells-waitlist.firebaseapp.com",
  databaseURL: "https://nouvells-waitlist-default-rtdb.firebaseio.com",
  projectId: "nouvells-waitlist",
  storageBucket: "nouvells-waitlist.firebasestorage.app",
  messagingSenderId: "79711553322",
  appId: "1:79711553322:web:66565e2caa2f4ef37bc053",
  measurementId: "G-ZYKBPD9W8C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore (or other Firebase services)
const db = getFirestore(app);

// Export Firebase services for use in your app
export { db };
