// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE,
    authDomain: "barang-hilang-6980d.firebaseapp.com",
    projectId: "barang-hilang-6980d",
    storageBucket: "barang-hilang-6980d.appspot.com",
    messagingSenderId: "194339129821",
    appId: "1:194339129821:web:dca5536448b5487524ce34",
    measurementId: "G-D8C6KCSBGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app)

export { db, storage, auth }