"use strict";
exports.__esModule = true;
require("./main.scss");
var Note_1 = require("./model/Note");
var Notes_1 = require("./model/Notes");
var AppStorage_1 = require("./model/AppStorage");
var config_1 = require("./model/config");
var AppFirestoreStorage_1 = require("./model/AppFirestoreStorage");
var notes = new Notes_1.Notes();
var appStorage = new AppStorage_1.AppStorage(notes);
var currentColor = "nothing";
var appFirestoreStorage = new AppFirestoreStorage_1.AppFirestoreStorage();
var shouldUseFirestore = config_1.firebaseConfig.databaseActive;
document.getElementById("addNoteButton").addEventListener("click", function () {
    var noteTitle = document.getElementById("inputTitle").value;
    var noteContent = document.getElementById("inputContent").value;
    var containerElement = document.createElement("div");
    containerElement.className = "noteContainer";
    containerElement.id = "noteContainerID" + notes.getNotes().length;
    var titleElement = document.createElement("text");
    titleElement.innerHTML = noteTitle;
    titleElement.id = "titleID" + notes.getNotes().length;
    var contentElement = document.createElement("textArea");
    contentElement.innerHTML = noteContent;
    contentElement.id = "contentID" + notes.getNotes().length;
    var deleteElement = document.createElement("button");
    deleteElement.className = "deleteButton";
    deleteElement.innerHTML = "X";
    deleteElement.id = "deleteButton" + notes.getNotes().length;
    deleteElement.addEventListener("click", deleteNote);
    var editElement = document.createElement("button");
    editElement.className = "editButton";
    editElement.innerHTML = "E";
    editElement.id = "editButton" + notes.getNotes().length;
    editElement.addEventListener("click", editNote);
    var prioritizeElement = document.createElement("button");
    prioritizeElement.className = "prioritizeButton";
    prioritizeElement.innerHTML = "P";
    prioritizeElement.id = "prioritizeButton" + notes.getNotes().length;
    prioritizeElement.addEventListener("click", prioritizeNote);
    var unprioritizeElement = document.createElement("button");
    unprioritizeElement.className = "unprioritizeButton";
    unprioritizeElement.innerHTML = "NP";
    unprioritizeElement.id = "unprioritizeButton" + notes.getNotes().length;
    unprioritizeElement.style.visibility = 'hidden';
    unprioritizeElement.addEventListener("click", unprioritizeNote);
    var generateColor = document.createElement("button");
    generateColor.className = "generateColorButton";
    generateColor.innerHTML = "G";
    generateColor.id = "generateColor" + notes.getNotes().length;
    generateColor.addEventListener("click", getRandColor);
    var dateOfCreation = document.createElement("p");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    dateOfCreation.innerHTML = today.toString();
    containerElement.appendChild(titleElement);
    containerElement.appendChild(contentElement);
    containerElement.appendChild(deleteElement);
    containerElement.appendChild(editElement);
    containerElement.appendChild(prioritizeElement);
    containerElement.appendChild(unprioritizeElement);
    containerElement.appendChild(generateColor);
    containerElement.appendChild(dateOfCreation);
    var note = new Note_1.Note(noteTitle, noteContent, false, today, currentColor);
    notes.addNote(note);
    if (shouldUseFirestore) {
        console.log(notes);
        appFirestoreStorage.saveToDatabase(notes);
    }
    else {
        appStorage.saveToLocalStorage(notes);
    }
    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);
});
function deleteNote() {
    var index = this.id.replace("deleteButton", "");
    notes.getNotes().splice(+index, 1);
    if (shouldUseFirestore) {
        appFirestoreStorage.saveToDatabase(notes);
    }
    else {
        appStorage.saveToLocalStorage(notes);
    }
    this.parentElement.remove();
}
function editNote() {
    var index = this.id.replace("editButton", "");
    var noteContent = document.getElementById("contentID" + index).value;
    notes.getNotes()[+index].content = noteContent;
    if (shouldUseFirestore) {
        appFirestoreStorage.saveToDatabase(notes);
    }
    else {
        appStorage.saveToLocalStorage(notes);
    }
}
function getRandColor() {
    var index = this.id.replace("generateColor", "");
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    notes.notesArray[+index].color = color;
    if (shouldUseFirestore) {
        appFirestoreStorage.saveToDatabase(notes);
    }
    else {
        appStorage.saveToLocalStorage(notes);
    }
    document.getElementById("noteContainerID" + index).style.backgroundColor = "#" + color;
}
function prioritizeNote() {
    var index = this.id.replace("prioritizeButton", "");
    console.log(index);
    notes.getNotes()[+index].isImportant = true;
    if (shouldUseFirestore) {
        appFirestoreStorage.saveToDatabase(notes);
    }
    else {
        appStorage.saveToLocalStorage(notes);
    }
    window.location.reload();
}
function unprioritizeNote() {
    var index = this.id.replace("unprioritizeButton", "");
    console.log(index);
    notes.getNotes()[+index].isImportant = false;
    if (shouldUseFirestore) {
        appFirestoreStorage.saveToDatabase(notes);
    }
    else {
        appStorage.saveToLocalStorage(notes);
    }
    window.location.reload();
}
function createNotesUI(notes) {
    if (notes) {
        notes.getNotes().forEach(function (element, index) {
            var containerElement = document.createElement("div");
            containerElement.className = "noteContainer";
            containerElement.id = "noteContainerID" + index;
            var titleElement = document.createElement("text");
            titleElement.innerHTML = element.title;
            titleElement.id = "titleID" + index;
            var contentElement = document.createElement("textArea");
            contentElement.innerHTML = element.content;
            contentElement.id = "contentID" + index;
            var deleteElement = document.createElement("button");
            deleteElement.className = "deleteButton";
            deleteElement.innerHTML = "X";
            deleteElement.id = "deleteButton" + index;
            deleteElement.addEventListener("click", deleteNote);
            var editElement = document.createElement("button");
            editElement.className = "editButton";
            editElement.innerHTML = "E";
            editElement.id = "editButton" + index;
            editElement.addEventListener("click", editNote);
            var generateColor = document.createElement("button");
            generateColor.className = "generateColorButton";
            generateColor.innerHTML = "G";
            generateColor.id = "generateColor" + index;
            generateColor.addEventListener("click", getRandColor);
            var color = notes.getNotes()[index].color;
            var prioritizeElement = document.createElement("button");
            prioritizeElement.className = "prioritizeButton";
            prioritizeElement.innerHTML = "P";
            prioritizeElement.id = "prioritizeButton" + index;
            prioritizeElement.addEventListener("click", unprioritizeNote);
            prioritizeElement.addEventListener("click", prioritizeNote);
            var unprioritizeElement = document.createElement("button");
            unprioritizeElement.className = "unprioritizeButton";
            unprioritizeElement.innerHTML = "NP";
            unprioritizeElement.id = "unprioritizeButton" + index;
            unprioritizeElement.addEventListener("click", unprioritizeNote);
            var dateOfCreation = document.createElement("p");
            var today = notes.getNotes()[index].date;
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
            if (notes.getNotes()[index].isImportant) {
                document.getElementById('importantNotes').appendChild(document.getElementById('noteContainerID' + index));
                prioritizeElement.style.visibility = 'hidden';
            }
            if (!notes.getNotes()[index].isImportant) {
                document.getElementById('lessImportantNotes').appendChild(document.getElementById('noteContainerID' + index));
                unprioritizeElement.style.visibility = 'hidden';
            }
        });
    }
}
(function () {
    if (shouldUseFirestore) {
        appFirestoreStorage.getNotesFromDatabase().then(function (data) {
            notes = new Notes_1.Notes();
            Object.assign(notes, data);
            createNotesUI(notes);
        });
    }
    else {
        var notesFromStorage = JSON.parse(localStorage.getItem('notesData'));
        notes = new Notes_1.Notes();
        Object.assign(notes, notesFromStorage);
        createNotesUI(notes);
    }
}());
