import {Note} from './Note';

export class Notes {

notesArray: Note[];

constructor(){
    this.notesArray = Array<Note>();
}
  addNote(note: Note){
    this.notesArray.push(note);
}

getNotes(): Note[]{

    return this.notesArray;

}

}