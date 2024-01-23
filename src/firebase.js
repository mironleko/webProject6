import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGQfbiHstD9aIiVPhi_n5RHsXYJUAwc8Y",
  authDomain: "web-project6-final.firebaseapp.com",
  projectId: "web-project6-final",
  storageBucket: "web-project6-final.appspot.com",
  messagingSenderId: "199115163655",
  appId: "1:199115163655:web:1ed2ca86791a24093b82a2",
  measurementId: "G-SV6RYKEQBH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
