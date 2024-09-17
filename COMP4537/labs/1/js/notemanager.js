import { Storage } from "./storage.js";
import messages from "../lang/messages/en/user.js";
import { Note } from "./note.js"

/**
 * Handles the creation of notes, as well as updating and removing notes
 */
export class NoteManager {
  /**
   * Instantiate a NoteManager object
   * 
   * @param {string} storageKey - The key used for local storage
   */
  constructor(storageKey = messages.storageKey) {
    this.notes = [];
    this.storageKey = storageKey;
    this.storage = new Storage();
  };

  createNote() {
    const maxId = this.notes.reduce((max, note) => Math.max(max, note.id), 0);
    const newId = maxId + 1;
    const newNote = new Note(newId, '');
    this.notes.push(newNote);
    return newNote;
  };

  removeNote(id) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  };

  updateNote(id, newContent) {
    const note = this.notes.find(note => note.id === id);
    if (note) {
      note.updateContent(newContent);
      this.saveNotes();
    };
  };

  saveNotes() {
    this.storage.save(this.storageKey, this.notes);
  };

  loadNotes() {
    const notesData = this.storage.load(this.storageKey);
    this.notes = notesData ? notesData.map(note => new Note(note.id, note.content)) : [];
  };
};