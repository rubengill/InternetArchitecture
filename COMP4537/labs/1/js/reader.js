import { NoteUI } from "./notesui.js";
import { NoteManager } from "./notemanager.js";

/**
 * Handles logic for displaying the current notes in LocalStorage
 */
export class Reader {

  /**
   * Creates a NoteManager and NoteUI, as well as sets up the event
   * listener for the LocalStorage
   */
  constructor() {
    this.noteManager = new NoteManager();
    this.noteUI = new NoteUI();
    this.initializeStorageListener();
  };

  displayReadButtons() {
    this.noteUI.createBackButton();
    this.noteUI.updateSaveTimeDisplay();
  };

  displayCreatedNoteRead() {
    this.noteManager.loadNotes();
    this.noteManager.notes.forEach(note => {
      this.noteUI.createNoteElement(note, false);
    });
  };

  initializeStorageListener() {
    window.addEventListener('storage', (event) => {
      if (event.key === this.noteManager.storageKey) {
        this.noteUI.noteAreaElement.innerHTML = '';

        this.noteManager.loadNotes();

        this.noteManager.notes.forEach(note => {
          this.noteUI.createNoteElement(note, false);
        });

        this.noteUI.updateSaveTimeDisplay();
      };
    });
  };
};