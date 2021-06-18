
import {Notes} from './Notes';

 export class AppStorage {
    
     notes: Notes;

    constructor(notes: Notes){
        this.notes = notes;
    };

    saveToLocalStorage(notes: Notes): void {
        if(this.notes){
        localStorage.setItem('notesData', JSON.stringify(this.notes));
        }
    }

    getData() {
        const data = localStorage.getItem('notesData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}