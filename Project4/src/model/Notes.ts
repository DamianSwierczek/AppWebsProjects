import {Note} from './Note';

export class Notes {

notesArray: Note[];

constructor(){
    this.notesArray = Array<Note>();
}
  addNote(note: Note){
    this.notesArray.push(note);
    console.log(this.notesArray);
}

getNotes(): Note[]{

    return this.notesArray;

}

}