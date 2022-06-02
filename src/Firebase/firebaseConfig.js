import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwb1AvnNygYcjSiYhOje-ccV6eOKz7R80",
  authDomain: "am-9a16e.firebaseapp.com",
  projectId: "am-9a16e",
  storageBucket: "am-9a16e.appspot.com",
  messagingSenderId: "792744003571",
  appId: "1:792744003571:web:e53da00361ffd989b83486",
  measurementId: "G-VPZN5EKNR0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
 