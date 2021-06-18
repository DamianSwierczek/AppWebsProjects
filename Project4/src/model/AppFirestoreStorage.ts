import firebase from "firebase";
import { firebaseConfig } from "./config";
import { Notes } from "./Notes";

export class AppFirestoreStorage {

db: firebase.firestore.Firestore;
 

 constructor(){
    this.initConfig();
 };

 initConfig(): void {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
   this.db = firebaseApp.firestore(); 
 }


    saveToDatabase(notes: Notes): void {
    if(notes){
         this.db.collection("notes").doc("myNotes").set(JSON.parse(JSON.stringify(notes)));
    }
 }

 async getNotesFromDatabase(): Promise<firebase.firestore.DocumentData> {
   const noteRef = this.db.collection('notes').doc('myNotes');
   const doc = await noteRef.get();
   if (!doc.exists) {
     console.log('No such document!');
   } else {
     console.log('Document data:', doc.data());
   }
   return doc.data();
 }



}
