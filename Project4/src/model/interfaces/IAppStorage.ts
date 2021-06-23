import { Notes } from "../Notes";
import firebase from "firebase";

export interface IAppStorage{
    saveToStorage(notes: Notes): void;
    getData(): firebase.firestore.DocumentData;
}