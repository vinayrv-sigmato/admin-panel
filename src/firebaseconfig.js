import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCw3fmDR5p5MxYgJiRaVFtlyYhD7KP3spU",
    authDomain: "health-armour-2314a.firebaseapp.com",
    projectId: "health-armour-2314a",
    storageBucket: "health-armour-2314a.appspot.com",
    messagingSenderId: "437309355141",
    appId: "1:437309355141:web:eeeddb48c44e4bf140a5ec",
    measurementId: "G-B9J83LF33F"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)