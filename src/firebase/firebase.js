import firebase from "firebase";
import { initialState } from "../reducer/reducer";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQPjIQurf--YFxlbJFRdkY_7Z6S1ICFx0",
  authDomain: "clone-76330.firebaseapp.com",
  databaseURL: "https://clone-76330.firebaseio.com",
  projectId: "clone-76330",
  storageBucket: "clone-76330.appspot.com",
  messagingSenderId: "442324007302",
  appId: "1:442324007302:web:c1605c2ce1d71d7d955407",
  measurementId: "G-ZHNXFXXC8K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
