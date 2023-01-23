import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//========================================================================================
// INITIALIZE FIREBASE
// databaseURL is only required for realtime database
// for firestore, only
//========================================================================================
const firebaseConfig = {
  apiKey: "AIzaSyCkbKwGHmkmbNlTjCzmHR3_TUnGfH8nfm0",
  authDomain: "react-expense-app-53969.firebaseapp.com",
  databaseURL:
    "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-expense-app-53969",
  storageBucket: "react-expense-app-53969.appspot.com",
  messagingSenderId: "355797841845",
  appId: "1:355797841845:web:b07dfc25835c5588884bfc",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
