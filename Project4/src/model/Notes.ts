import {Note} from './Note';

export class Notes {

notesArray: Note[];

constructor(){
    this.notesArray = Array<Note>();
}
  addNote(note: Note){
    console.log(this.notesArray);
    this.notesArray.push(note);
}

getNotes(): Note[]{

    return this.notesArray;

}

}