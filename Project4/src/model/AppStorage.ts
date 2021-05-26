
import {Notes} from './Notes';

 export class AppStorage {
    
    const notes: Notes;

    constructor(notes: Notes){
        this.notes = notes;
    };

    saveToLocalStorage(): void {
        if(this && this.notes){
        localStorage.setItem('notesData', JSON.stringify(this.notes));
        }
    };
}
}