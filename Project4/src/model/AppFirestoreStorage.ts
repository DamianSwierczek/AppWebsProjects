import firebase from "firebase";
import { firebaseConfig } from "./config";
import { Notes } from "./Notes";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();



