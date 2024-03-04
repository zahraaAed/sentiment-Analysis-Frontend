import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyA13-WTVZ3kbSVmmLsD7OHd3XIhmwpJyNY",
    authDomain: "tonify-b853d.firebaseapp.com",
    projectId: "tonify-b853d",
    storageBucket: "tonify-b853d.appspot.com",
  messagingSenderId: "90115813353",
  appId: "1:90115813353:web:1b330d0cd07c63904b6578",
  measurementId: "G-E7VYET5XCV"
};

const app = initializeApp(firebaseConfig);
console.log("firebase connection done")

export default app;