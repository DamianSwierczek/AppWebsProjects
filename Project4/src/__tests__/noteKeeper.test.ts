import {Note} from '../model/Note';
import {Notes} from '../model/Notes';
import {AppStorage} from '../model/AppStorage';
import firebase from "firebase";
import { firebaseConfig } from '../model/config';
import { AppFirestoreStorage } from '../model/AppFirestoreStorage';
import { deleteNote } from '..';
import { isAssertionExpression, isNonNullExpression } from 'typescript';

let notes = new Notes();
let appStorage = new AppStorage(notes);

test('ifAddNoteToArray', () => {
    let today = new Date();
    let note = new Note("testTitle", "testContent", false, today, "nothing");
    notes.addNote(note);
    expect(notes.getNotes().length).toBe(1);
    });

test('ifAddNoteToLocalStorage', () => {
    let today = new Date();
    let note = new Note("testTitle", "testContent", false, today, "nothing");
    notes.addNote(note);
    appStorage.saveToStorage(notes);
    expect(window.localStorage.getItem("notesData")).not.toBe(null);
});