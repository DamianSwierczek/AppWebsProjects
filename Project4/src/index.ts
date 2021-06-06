import './main.scss';
import {Note} from './model/Note';
import {Notes} from './model/Notes';
import {AppStorage} from './model/AppStorage';


let notes = new Notes();
const appStorage = new AppStorage(notes);

document.getElementById("addNoteButton").addEventListener("click", () => {

    let noteTitle = (document.getElementById("inputTitle") as HTMLInputElement).value;

   let noteContent = (document.getElementById("inputContent") as HTMLInputElement).value;

   if(!notes){
    notes = new Notes();
}
   
   const containerElement = document.createElement("div");
   containerElement.className = "noteContainer";

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

    const note = new Note(noteTitle, noteContent, false, today);

   
    notes.addNote(note);

    const appStorage = new AppStorage(notes);

    appStorage.saveToLocalStorage();

    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);


});

function deleteNote(this: HTMLElement) {
    console.log(this);
    let index = this.id.replace("deleteButton","");
    notes.getNotes().splice(+index,1);
    localStorage.setItem('notesData', JSON.stringify(notes.getNotes()));
    console.log(index);

}

function editNote(this: HTMLElement) {
    let index = this.id.replace("editButton","");
    let noteContent = (document.getElementById("contentID" + index) as HTMLInputElement).value;
    console.log(index);
    notes.getNotes()[+index].content = noteContent;
    localStorage.setItem('notesData', JSON.stringify(notes.getNotes()));
}
//  const editNoteFunction = (this: HTMLElement) => {

// console.log(this);

//  }

// document.getElementById("deleteButton").addEventListener("click", () => {
//     appStorage.getData().splice(index,1);
// localStorage.setItem('notesData', JSON.stringify(appStorage.getData()));

// });

// function getRndColor() {
//     return 'hsl(' + (360 * Math.random()) + ',50%,50%)'; // H,S,L
// }

// document.getElementById("generateColor").addEventListener('click', () => {

// });

(function (){

   let notesFromStorage = JSON.parse(localStorage.getItem('notesData')) as Notes;

  notes = new Notes();

    Object.assign(notes , notesFromStorage);

    if(notes){
        notes.getNotes().forEach((element, index) => {

            const containerElement = document.createElement("div");
            containerElement.className = "noteContainer";

            const titleElement = document.createElement("text");
            titleElement.innerHTML = element.title;

            const contentElement = document.createElement("textArea");
            contentElement.innerHTML = element.content;

            const deleteElement = document.createElement("button");
            deleteElement.className = "deleteButton";
            deleteElement.innerHTML = "X";
            
         
            const editElement = document.createElement("button");
            editElement.className = "editButton";
            editElement.innerHTML = "E";
            editElement.addEventListener("click", editNote);
         
            const generateColor = document.createElement("button");
            generateColor.className = "generateColorButton";
            generateColor.innerHTML = "G";

            const dateOfCreation = document.createElement("p");
            let today = notes.getNotes()[index].date;
            dateOfCreation.innerHTML = today.toString();


            containerElement.appendChild(titleElement);
            containerElement.appendChild(contentElement);
            containerElement.appendChild(deleteElement);
            containerElement.appendChild(editElement);
            containerElement.appendChild(generateColor);
            containerElement.appendChild(dateOfCreation);
      
            document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);

        })
    
    }

}) ();
