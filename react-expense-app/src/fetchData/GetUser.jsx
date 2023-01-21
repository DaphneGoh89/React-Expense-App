import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "OUSR"));

querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
