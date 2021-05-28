document.getElementById("addNoteButton").addEventListener("click", function () {
    var noteTitle = document.getElementById("inputTitle").value;
    var noteContent = document.getElementById("inputContent").value;
    var containerElement = document.createElement("div");
    containerElement.className = "noteContainer";
    var titleElement = document.createElement("p");
    titleElement.innerHTML = noteTitle;
    var contentElement = document.createElement("p");
    contentElement.innerHTML = noteContent;
    containerElement.appendChild(titleElement);
    containerElement.appendChild(contentElement);
    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);
});
