
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD98XBpLHRPmAK4q5iFVj2HqtPGFbCYzU4",
  authDomain: "venta-manillas.firebaseapp.com",
  projectId: "venta-manillas",
  storageBucket: "venta-manillas.appspot.com",
  messagingSenderId: "910994011210",
  appId: "1:910994011210:web:9d94922cc4e2922ae6e2b3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}