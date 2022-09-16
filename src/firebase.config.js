import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4igAtB7Gsc-1XLPTOfeMcVf8g3-30TZ8",
  authDomain: "food-delivery-688ba.firebaseapp.com",
  projectId: "food-delivery-688ba",
  storageBucket: "food-delivery-688ba.appspot.com",
  messagingSenderId: "997419635219",
  appId: "1:997419635219:web:d8b02c099a7ac4f8c4e5e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
