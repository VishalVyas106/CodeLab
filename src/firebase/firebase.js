// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOSJMpgrh7DXFBWwYzaKVpy2GMf9sFM4A",
  authDomain: "codelab-b4615.firebaseapp.com",
  projectId: "codelab-b4615",
  storageBucket: "codelab-b4615.firebasestorage.app",
  messagingSenderId: "544760977819",
  appId: "1:544760977819:web:1019a1a2582891dbfa693e",
  measurementId: "G-0VGSX9GJBP"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app); // In

export {app , auth,  firestore }