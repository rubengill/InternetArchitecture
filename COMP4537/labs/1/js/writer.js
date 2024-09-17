import { NoteManager } from "./notemanager.js";
import { NoteUI } from "./notesui.js";

/**
 * Handles adding writing Note objects to LocalStorage
 */
export class Writer {

  /**
   * Instantiates a NoteManager and NoteUI object
   */
  constructor() {
    this.noteManager = new NoteManager();
    this.noteUI = new NoteUI();
  };

  displayButtons() {
    this.noteUI.createAddButton();
    this.noteUI.createBackButton();
    this.noteUI.updateSaveTimeDisplay();
  };

  addButtonClick() {
    const addButton = this.noteUI.addButtonElement.querySelector('button');
    addButton.addEventListener('click', () => {
      this.noteUI.createInputButtons();
      this.submitText();
    });
  };

  submitText(noteContent) {
    const submitElement = this.noteUI.noteInputElement.querySelector('button');
    submitElement.addEventListener('click', () => {
      const noteContent = this.noteUI.noteInputElement.querySelector('input').value.trim();
      if (noteContent) {
        console.log("Y");
        const newNote = this.noteManager.createNote();
        newNote.updateContent(noteContent);

        const noteElement = this.noteUI.createNoteElement(newNote);
        const deleteButton = noteElement.querySelector('.note-delete');
        this.handleDeleteClick(deleteButton, newNote, noteElement);

        const noteTextElement = noteElement.querySelector('.note-text');
        this.handleNoteClick(noteTextElement, newNote);

        this.noteManager.saveNotes();
        this.noteUI.updateSaveTimeDisplay();

        this.noteUI.noteInputElement.innerHTML = '';
        this.noteUI.addButtonElement.querySelector('button').disabled = false;
      }
    });
  };

  displayCreatedNotes() {
    this.noteManager.loadNotes();
    this.noteManager.notes.forEach(note => {
      const noteElement = this.noteUI.createNoteElement(note);
      const deleteButton = noteElement.querySelector('.note-delete');
      this.handleDeleteClick(deleteButton, note, noteElement);

      const noteTextElement = noteElement.querySelector('.note-text');
      this.handleNoteClick(noteTextElement, note);
    });
  };

  handleDeleteClick(deleteButton, note, noteElement) {
    deleteButton.addEventListener('click', () => {
      noteElement.remove();
      this.noteManager.removeNote(note.id);
      this.noteUI.updateSaveTimeDisplay();
    });
  };

  handleNoteClick(noteTextElement, note) {
    noteTextElement.addEventListener('click', () => {
      const inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.value = note.content;
      inputElement.className = 'note-edit-input';

      noteTextElement.replaceWith(inputElement);
      inputElement.focus();

      const saveEdit = () => {
        const newContent = inputElement.value.trim();
        if (newContent !== '') {
          this.noteManager.updateNote(note.id, newContent);

          noteTextElement.textContent = newContent;

          inputElement.replaceWith(noteTextElement);

          this.noteUI.updateSaveTimeDisplay();
        } else {
          inputElement.replaceWith(noteTextElement);
        }
      };

      inputElement.addEventListener('blur', saveEdit);
      inputElement.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          inputElement.blur();
        }
      });
    });
  }

};


