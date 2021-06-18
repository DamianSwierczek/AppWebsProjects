import './main.scss';
import {Note} from './model/Note';
import {Notes} from './model/Notes';
import {AppStorage} from './model/AppStorage';
import firebase from "firebase";
import { firebaseConfig } from './model/config';
import { AppFirestoreStorage } from './model/AppFirestoreStorage';

let notes = new Notes();
const appStorage = new AppStorage(notes);
let currentColor = "nothing" as string;
const appFirestoreStorage = new AppFirestoreStorage();
const shouldUseFirestore = firebaseConfig.databaseActive;

document.getElementById("addNoteButton").addEventListener("click", () => {

    let noteTitle = (document.getElementById("inputTitle") as HTMLInputElement).value;

   let noteContent = (document.getElementById("inputContent") as HTMLInputElement).value;

   
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

   const prioritizeElement = document.createElement("button");
   prioritizeElement.className = "prioritizeButton";
   prioritizeElement.innerHTML = "P";
   prioritizeElement.id = "prioritizeButton" + notes.getNotes().length;
   prioritizeElement.addEventListener("click", prioritizeNote);

   const unprioritizeElement = document.createElement("button");
   unprioritizeElement.className = "unprioritizeButton";
   unprioritizeElement.innerHTML = "NP";
   unprioritizeElement.id = "unprioritizeButton" + notes.getNotes().length;
   unprioritizeElement.style.visibility = 'hidden';
   unprioritizeElement.addEventListener("click", unprioritizeNote);

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
    containerElement.appendChild(prioritizeElement);
    containerElement.appendChild(unprioritizeElement);
    containerElement.appendChild(generateColor);
    containerElement.appendChild(dateOfCreation);

    const note = new Note(noteTitle, noteContent, false, today, currentColor);

   
    notes.addNote(note);

    if(shouldUseFirestore){
        console.log(notes);
        appFirestoreStorage.saveToDatabase(notes);
    } else {
        appStorage.saveToLocalStorage(notes);
    }
    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);

});

function deleteNote(this: HTMLElement) {

    let index = this.id.replace("deleteButton","");
    notes.getNotes().splice(+index,1);
    if(shouldUseFirestore){
        appFirestoreStorage.saveToDatabase(notes);
    } else {
        appStorage.saveToLocalStorage(notes);
    }
    this.parentElement.remove();
}

function editNote(this: HTMLElement) {
    let index = this.id.replace("editButton","");
    let noteContent = (document.getElementById("contentID" + index) as HTMLInputElement).value;
    notes.getNotes()[+index].content = noteContent;
    if(shouldUseFirestore){
        appFirestoreStorage.saveToDatabase(notes);
    } else {
        appStorage.saveToLocalStorage(notes);
    }
}

function getRandColor(this: HTMLElement)
{
    let index = this.id.replace("generateColor","");
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    notes.notesArray[+index].color = color;

    if(shouldUseFirestore){
        appFirestoreStorage.saveToDatabase(notes);
    } else {
        appStorage.saveToLocalStorage(notes);
    }
    document.getElementById("noteContainerID" + index).style.backgroundColor = "#" + color;
}

function prioritizeNote(this: HTMLElement) {
    let index = this.id.replace("prioritizeButton","");
    console.log(index);
    notes.getNotes()[+index].isImportant = true;
    if(shouldUseFirestore){
        appFirestoreStorage.saveToDatabase(notes);
    } else {
        appStorage.saveToLocalStorage(notes);
    }
    window.location.reload();
}

function unprioritizeNote(this: HTMLElement) {
    let index = this.id.replace("unprioritizeButton","");
    console.log(index);
    notes.getNotes()[+index].isImportant = false;
    if(shouldUseFirestore){
        appFirestoreStorage.saveToDatabase(notes);
    } else {
        appStorage.saveToLocalStorage(notes);
    }
    window.location.reload();
    }

function createNotesUI(notes: Notes){

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

            const prioritizeElement = document.createElement("button");
            prioritizeElement.className = "prioritizeButton";
             prioritizeElement.innerHTML = "P";
            prioritizeElement.id = "prioritizeButton" + index;
            prioritizeElement.addEventListener("click", unprioritizeNote);
            prioritizeElement.addEventListener("click", prioritizeNote);

            const unprioritizeElement = document.createElement("button");
            unprioritizeElement.className = "unprioritizeButton";
            unprioritizeElement.innerHTML = "NP";
            unprioritizeElement.id = "unprioritizeButton" + index;
            unprioritizeElement.addEventListener("click", unprioritizeNote);
            
             
            const dateOfCreation = document.createElement("p");
            let today = notes.getNotes()[index].date;
            dateOfCreation.innerHTML = today.toString();


            containerElement.appendChild(titleElement);
            containerElement.appendChild(contentElement);
            containerElement.appendChild(deleteElement);
            containerElement.appendChild(editElement);
            containerElement.appendChild(prioritizeElement);
            containerElement.appendChild(unprioritizeElement);
            containerElement.appendChild(generateColor);
            containerElement.appendChild(dateOfCreation);

            
            console.log(containerElement);

            document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);
            document.getElementById("noteContainerID" + index).style.backgroundColor = "#" + color;
           

            if(notes.getNotes()[index].isImportant) {
                document.getElementById('importantNotes').appendChild(
                    document.getElementById('noteContainerID' + index)
                  );
                  prioritizeElement.style.visibility = 'hidden';
            }

            if(!notes.getNotes()[index].isImportant) {
                document.getElementById('lessImportantNotes').appendChild(
                    document.getElementById('noteContainerID' + index)
                  );
                  unprioritizeElement.style.visibility = 'hidden';
            }

            
        })
    }
}

(function (){

    if(shouldUseFirestore){
        appFirestoreStorage.getNotesFromDatabase().then(data => {
            notes = new Notes();
            Object.assign(notes , data);
            createNotesUI(notes);
        });
    } else {
         let notesFromStorage = JSON.parse(localStorage.getItem('notesData')) as Notes;
         notes = new Notes();
         Object.assign(notes , notesFromStorage);
         createNotesUI(notes);
    }    
}());