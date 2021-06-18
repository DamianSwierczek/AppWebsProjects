
import {Notes} from './Notes';

 export class AppStorage {
    
     notes: Notes;

    constructor(notes: Notes){
        this.notes = notes;
    };

    saveToLocalStorage(notes: Notes): void {
        if(notes){
             localStorage.setItem('notesData', JSON.stringify(notes));
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