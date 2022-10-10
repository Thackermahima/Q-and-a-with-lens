// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
 

const firebaseConfig = {
  apiKey: "AIzaSyAQaSeykOYBEhzjjY_GDASeFIypU19nJ9U",
  authDomain: "q-and-a-with-lens.firebaseapp.com",
  projectId: "q-and-a-with-lens",
  storageBucket: "q-and-a-with-lens.appspot.com",
  messagingSenderId: "758491651169",
  appId: "1:758491651169:web:0e8d6883225ef5f5659e20",
  measurementId: "G-W2S8KHP6KT"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig); 
 export const db = getFirestore(app);