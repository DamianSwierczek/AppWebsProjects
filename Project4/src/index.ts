import './main.scss';
import {Note} from './model/Note';
import {Notes} from './model/Notes';
import {AppStorage} from './model/AppStorage';

// let weather = [] as any [];


let notes = new Notes();

document.getElementById("addNoteButton").addEventListener("click", () => {

    let noteTitle = (document.getElementById("inputTitle") as HTMLInputElement).value;

   let noteContent = (document.getElementById("inputContent") as HTMLInputElement).value;

   
   const containerElement = document.createElement("div");
   containerElement.className = "noteContainer";

   const titleElement = document.createElement("p");
   titleElement.innerHTML = noteTitle;

   const contentElement = document.createElement("p");
   contentElement.innerHTML = noteContent;

   containerElement.appendChild(titleElement);
    containerElement.appendChild(contentElement);

    const note = new Note(noteTitle, noteContent, false);

    if(!notes){
        notes = new Notes();
    }
    notes.addNote(note);

    const appStorage = new AppStorage(notes);

    appStorage.saveToLocalStorage();

    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);

});

(function (){

    notes = JSON.parse(localStorage.getItem('notesData')) as Notes;
    if(notes){
        notes.notesArray.forEach((element) => {

            const containerElement = document.createElement("div");
            containerElement.className = "noteContainer";
            const titleElement = document.createElement("p");
            titleElement.innerHTML = element.title;

            const contentElement = document.createElement("p");
            contentElement.innerHTML = element.content;
            containerElement.appendChild(titleElement);
            containerElement.appendChild(contentElement);
      
            document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);

        })
    
    }

}) ();
