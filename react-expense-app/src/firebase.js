import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//========================================================================================
// INITIALIZE FIREBASE
// databaseURL is only required for realtime database
// for firestore, only
//========================================================================================
const firebaseConfig = {
  apiKey: "AIzaSyCkbKwGHmkmbNlTjCzmHR3_TUnGfH8nfm0",
  authDomain: "react-expense-app-53969.firebaseapp.com",
  projectId: "react-expense-app-53969", // this is the identifier to access your firestore
  storageBucket: "react-expense-app-53969.appspot.com",
  messagingSenderId: "355797841845",
  appId: "1:355797841845:web:b07dfc25835c5588884bfc",
};

const app = initializeApp(firebaseConfig);

//========================================================================================
// INITIALIZE FIRESTORE
// databaseURL is only required for realtime database
// for firestore, only
//========================================================================================
const db = getFirestore(app);

export default db;

/*
Steps:
1. create a cloud firestore database : Done. Created in Locked Mode.
2. add required dependencies and libraries to your app
3. create new firestore instance
*/
