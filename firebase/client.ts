import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdoq0dzCWdO7AgefxQMpdCzHTNwrcfDik",
  authDomain: "ai-interview-platform-8b85c.firebaseapp.com",
  projectId: "ai-interview-platform-8b85c",
  storageBucket: "ai-interview-platform-8b85c.firebasestorage.app",
  messagingSenderId: "4428301057",
  appId: "1:4428301057:web:146b83ee8172c84688d100",
  measurementId: "G-40N399VVKD",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
