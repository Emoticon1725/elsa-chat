
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCohBC7EmQaD0LsXV-AJixxLMr6aCxu9Ps",
  authDomain: "elsachat-40012.firebaseapp.com",
  projectId: "elsachat-40012",
  storageBucket: "elsachat-40012.appspot.com",
  messagingSenderId: "1092754665765",
  appId: "1:1092754665765:web:81cec1b65aa0449a17eacc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
