import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDghd3I5hBa_SY4gYzPJqEYDrcJj2e1-qY",
  authDomain: "finance-tracker-app-bbb00.firebaseapp.com",
  projectId: "finance-tracker-app-bbb00",
  storageBucket: "finance-tracker-app-bbb00.appspot.com",
  messagingSenderId: "908878059583",
  appId: "1:908878059583:web:fe71a995f722eec226808a",
  measurementId: "G-0BHZVBY6E8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);