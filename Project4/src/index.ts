import './main.scss';
import {Note} from './model/Note';
import {Notes} from './model/Notes';
import {AppStorage} from './model/AppStorage';


let notes = new Notes();
const appStorage = new AppStorage(notes);
let currentColor: string;

document.getElementById("addNoteButton").addEventListener("click", () => {

    let noteTitle = (document.getElementById("inputTitle") as HTMLInputElement).value;

   let noteContent = (document.getElementById("inputContent") as HTMLInputElement).value;

   if(!notes){
    notes = new Notes();
}
   
   const containerElement = document.createElement("div");
   containerElement.className = "noteContainer";
   containerElement.id = "noteContainerID" + notes.getNotes().length;

   const titleElement = document.createElement("text");
   titleElement.innerHTML = noteTitle;
   titleElement.id = "titleID" + notes.getNotes().length;

   const contentElement = document.createElement("textArea");
   contentElement.innerHTML = noteContent;
   contentElement.id = "contentID" + notes.getNotes().length;

   const deleteElement = document.createElement("button");
   deleteElement.className = "deleteButton";
   deleteElement.innerHTML = "X";
   deleteElement.id = "deleteButton" + notes.getNotes().length;
   deleteElement.addEventListener("click", deleteNote);

   const editElement = document.createElement("button");
   editElement.className = "editButton";
   editElement.innerHTML = "E";
   editElement.id = "editButton" + notes.getNotes().length;
   editElement.addEventListener("click", editNote);
   

   const generateColor = document.createElement("button");
   generateColor.className = "generateColorButton";
   generateColor.innerHTML = "G";
   generateColor.id = "generateColor" + notes.getNotes().length;
   generateColor.addEventListener("click", getRandColor);

   const dateOfCreation = document.createElement("p");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy as any;

    dateOfCreation.innerHTML = today.toString();

   containerElement.appendChild(titleElement);
    containerElement.appendChild(contentElement);
    containerElement.appendChild(deleteElement);
    containerElement.appendChild(editElement);
    containerElement.appendChild(generateColor);
    containerElement.appendChild(dateOfCreation);

    const note = new Note(noteTitle, noteContent, false, today, currentColor);

   
    notes.addNote(note);

    const appStorage = new AppStorage(notes);

    appStorage.saveToLocalStorage();

    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);


});

function deleteNote(this: HTMLElement) {
    console.log(this);
    let index = this.id.replace("deleteButton","");
    notes.getNotes().splice(+index,1);
    const appStorage = new AppStorage(notes);
    appStorage.saveToLocalStorage();
    console.log(index);
    window.location.reload();

}

function editNote(this: HTMLElement) {
    let index = this.id.replace("editButton","");
    let noteContent = (document.getElementById("contentID" + index) as HTMLInputElement).value;
    console.log(index);
    notes.getNotes()[+index].content = noteContent;
    const appStorage = new AppStorage(notes);
    appStorage.saveToLocalStorage();
}

function getRandColor(this: HTMLElement)
{
    let index = this.id.replace("generateColor","");
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    notes.notesArray[+index].color = color;
    // localStorage.setItem('notesData', JSON.stringify(notes.getNotes()));
    const appStorage = new AppStorage(notes);
    appStorage.saveToLocalStorage();
    document.getElementById("noteContainerID" + index).style.backgroundColor = "#" + color;
}

(function (){

   let notesFromStorage = JSON.parse(localStorage.getItem('notesData')) as Notes;

    notes = new Notes();

    console.log(notes);

    Object.assign(notes , notesFromStorage);

    if(notes){
        notes.getNotes().forEach((element, index) => {

            const containerElement = document.createElement("div");
            containerElement.className = "noteContainer";
            containerElement.id = "noteContainerID" + index;

            const titleElement = document.createElement("text");
            titleElement.innerHTML = element.title;
            titleElement.id = "titleID" + index;


            const contentElement = document.createElement("textArea");
            contentElement.innerHTML = element.content;
            contentElement.id = "contentID" + index;

            const deleteElement = document.createElement("button");
            deleteElement.className = "deleteButton";
            deleteElement.innerHTML = "X";
            deleteElement.id = "deleteButton" + index;
            deleteElement.addEventListener("click", deleteNote);
         
            const editElement = document.createElement("button");
            editElement.className = "editButton";
            editElement.innerHTML = "E";
            editElement.id = "editButton" + index;
            editElement.addEventListener("click", editNote);
         
            const generateColor = document.createElement("button");
            generateColor.className = "generateColorButton";
            generateColor.innerHTML = "G";
            generateColor.id = "generateColor" + index;
            generateColor.addEventListener("click", getRandColor);
            let color =  notes.getNotes()[index].color;
            
            

            const dateOfCreation = document.createElement("p");
            let today = notes.getNotes()[index].date;
            dateOfCreation.innerHTML = today.toString();


            containerElement.appendChild(titleElement);
            containerElement.appendChild(contentElement);
            containerElement.appendChild(deleteElement);
            containerElement.appendChild(editElement);
            containerElement.appendChild(generateColor);
            containerElement.appendChild(dateOfCreation);
            
            console.log(containerElement);
            document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);
            document.getElementById("noteContainerID" + index).style.backgroundColor = "#" + color;
        })
    
}

// import './main.scss';

// import firebase from 'firebase';
// import { firebaseConfig } from './config';

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// const note = {
//     title: 'First note1',
//     content: 'First note content from code'
// }


// // //adding new notes
// // // addNote(note);

// // async function addNote(note: any) {
// //     const res = await db.collection('notes').add(note);
// // }

// // //delete notes
// // // deleteNote('');
// // async function deleteNote(id: string) {
// //     const res = await db.collection('notes').doc(id).delete();
// // }

// // //update notes
// // // updateNote('', {title: 'update note', content: 'updated note from code'})
// // async function updateNote(id: string, note: any) {
// //     const res = await db.collection('notes').doc(id).update(note);
// // }

// // //get note 
// // // getNote('linj2nz1FUpPnHsJNgvj').then(res => console.log(res));
// // async function getNote(id: string) {
// //     return db.collection('notes').doc(id).get().then(res => ({id: res.id, data: res.data()}));
// // }



// // async function getNotes() {
// //     return db.collection('notes').get().then (res => ({size: res.size, docs: res.docs}));
// // }


}) ();