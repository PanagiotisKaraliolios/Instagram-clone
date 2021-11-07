// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.GOOGLE_API_KEY,
	authDomain: "instagram-clone-afc5f.firebaseapp.com",
	projectId: "instagram-clone-afc5f",
	storageBucket: "instagram-clone-afc5f.appspot.com",
	messagingSenderId: "696922260824",
	appId: "1:696922260824:web:5678e63ea048ca0e33912d",
	measurementId: "G-XV9YKRLM0Y",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, analytics, db, storage };
