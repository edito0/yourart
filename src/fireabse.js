// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-FHzggAOHath3cqkpo6GO2EJJgx6xoUg",
  authDomain: "yourart-ef48d.firebaseapp.com",
  projectId: "yourart-ef48d",
  storageBucket: "yourart-ef48d.appspot.com",
  messagingSenderId: "991319959001",
  appId: "1:991319959001:web:59c02d55822571e1b5e5c8",
  measurementId: "G-4VXQ56EEY1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
