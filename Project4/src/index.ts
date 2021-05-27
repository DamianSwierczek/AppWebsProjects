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

    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);

})