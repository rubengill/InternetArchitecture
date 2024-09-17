import messages from '../lang/messages/en/user.js'

/**
 * Handles the creation / updating of DOM elements
 */
export class NoteUI {

  /**
   * Store references to important DOM elements as instance variables
   */
  constructor() {
    this.titleIndexElement = document.querySelector('.title-index');
    this.appButtonsElement = document.querySelector('.app-buttons');
    this.backButtonElement = document.querySelector('.back-button');
    this.noteAreaElement = document.querySelector('.note-area');
    this.addButtonElement = document.querySelector('.add-button');
    this.noteInputElement = document.querySelector('.note-input');
  }

  createTitle() {
    const titleElement = document.createElement('p');
    titleElement.className = 'title-text';
    titleElement.textContent = messages.titleIndex;
    this.titleIndexElement.appendChild(titleElement);
  };

  createButtons() {
    const writerButton = document.createElement('a');
    const readerButton = document.createElement('a');

    writerButton.textContent = messages.writerButton;
    writerButton.href = messages.writerPath;
    readerButton.textContent = messages.readerButton;
    readerButton.href = messages.readerPath;
    this.appButtonsElement.appendChild(writerButton);
    this.appButtonsElement.appendChild(readerButton);
  };

  createBackButton() {
    const backButton = document.createElement('a');
    backButton.textContent = messages.backButton;
    backButton.href = messages.buttonPath;
    this.backButtonElement.appendChild(backButton);
  };

  createNoteElement(note, showDeleteButton = true) {
    const noteElement = document.createElement('div');
    noteElement.className = "note-element";
    this.noteAreaElement.appendChild(noteElement);

    const noteText = document.createElement('div');
    noteText.className = "note-text";
    noteText.textContent = note.content;
    noteElement.appendChild(noteText);

    if (showDeleteButton) {
      const deleteElement = document.createElement('button');
      deleteElement.className = "note-delete";
      deleteElement.textContent = messages.delete;
      noteElement.appendChild(deleteElement);
    }

    return noteElement;
  };

  createInputButtons() {
    const inputElement = document.createElement('input');
    this.noteInputElement.appendChild(inputElement);
    inputElement.type = 'text';
    inputElement.placeholder = 'Enter text...';
    inputElement.focus();

    const submitElement = document.createElement('button');
    submitElement.textContent = messages.submit;
    this.noteInputElement.appendChild(submitElement);

    this.addButtonElement.querySelector('button').disabled = true;
  };

  createAddButton() {
    const addElement = document.createElement('button');
    addElement.textContent = messages.add;
    this.addButtonElement.appendChild(addElement);
  };

  updateSaveTimeDisplay() {
    const saveTimeElement = document.querySelector('.time');
    saveTimeElement.textContent = `Last saved at: ${new Date().toLocaleTimeString()}`;
  };
};


