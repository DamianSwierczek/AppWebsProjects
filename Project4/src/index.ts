import './main.scss';
import {Note} from './model/Note';
import {Notes} from './model/Notes';
import {AppStorage} from './model/AppStorage';


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

   const deleteElement = document.createElement("button");
   deleteElement.className = "deleteButton";
   deleteElement.innerHTML = "X";

   const editElement = document.createElement("button");
   editElement.className = "editButton";
   editElement.innerHTML = "E";

   const generateColor = document.createElement("button");
   generateColor.className = "generateColorButton";
   generateColor.innerHTML = "G";

   containerElement.appendChild(titleElement);
    containerElement.appendChild(contentElement);
    containerElement.appendChild(deleteElement);
    containerElement.appendChild(editElement);
    containerElement.appendChild(generateColor);

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

            const deleteElement = document.createElement("button");
            deleteElement.className = "deleteButton";
            deleteElement.innerHTML = "X";
         
            const editElement = document.createElement("button");
            editElement.className = "editButton";
            editElement.innerHTML = "E";
         
            const generateColor = document.createElement("button");
            generateColor.className = "generateColorButton";
            generateColor.innerHTML = "G";

            containerElement.appendChild(titleElement);
            containerElement.appendChild(contentElement);
            containerElement.appendChild(deleteElement);
            containerElement.appendChild(editElement);
            containerElement.appendChild(generateColor);
      
            document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);

        })
    
    }

}) ();
