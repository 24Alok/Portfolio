
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAx2QSi123y3BrYM6fgQnTU1ZHhgsOoiGY",
  authDomain: "portfolio-97aa7.firebaseapp.com",
  projectId: "portfolio-97aa7",
  storageBucket: "portfolio-97aa7.appspot.com",
  messagingSenderId: "43618034541",
  appId: "1:43618034541:web:d2afaf68e0bf1e43c7f064"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();