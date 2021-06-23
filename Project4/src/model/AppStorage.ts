
import { IAppStorage } from './interfaces/IAppStorage';
import {Notes} from './Notes';

 export class AppStorage implements IAppStorage {
    
     notes: Notes;

    constructor(notes: Notes){
        this.notes = notes;
    };

    saveToStorage(notes: Notes): void {
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