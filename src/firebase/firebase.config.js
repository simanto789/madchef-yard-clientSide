// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzD21jq-0d8sf4zhqJSRjXjR-yNy--Do",
  authDomain: "madchef-yard.firebaseapp.com",
  projectId: "madchef-yard",
  storageBucket: "madchef-yard.appspot.com",
  messagingSenderId: "601285996145",
  appId: "1:601285996145:web:3e2d6feaeea612755ff5d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;