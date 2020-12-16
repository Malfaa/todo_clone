// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtdRWs9IpvpiJ_x-3uiq8Trnb_EYrUiZM",
  authDomain: "todo-clone-d1e70.firebaseapp.com",
  projectId: "todo-clone-d1e70",
  storageBucket: "todo-clone-d1e70.appspot.com",
  messagingSenderId: "945399744734",
  appId: "1:945399744734:web:db7fc1dbaf7e4ff5c8da4f",
  measurementId: "G-C64B0VW042"
});

const db = firebaseApp.firestore();

export default db;
