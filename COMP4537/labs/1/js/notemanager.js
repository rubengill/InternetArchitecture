import { Storage } from "./storage";
import messages from "../lang/messages/en/user";

export class NoteManager {
  /**
   * Handles interactions involving Note objects
   * 
   * @param notes - Array of note objects 
   */
  constructor(storageKey = messages.storageKey) {
    this.notes = [];
    this.storageKey = storageKey;
    this.storage = new Storage();
  };

  createNote() {

  };

  removeNote(id) {

  };

  updateNode(id) {

  };

  getNotes() {

  };

  saveNotes() {

  };

  loadNotes() {
    const notesData = this.storageService.load(this.storageKey);
    this.notes = this.notesData ? notesData.map(note => new Note(note.id, note.content)) : [];
  };


};