import messages from '../lang/messages/en/user.js'

//Handles the creation / updating of DOM elements

export function createTitle() {
  const divElement = document.createElement('p');
  divElement.className = "title-text";
  divElement.textContent = messages.titleIndex;
  const parentElement = document.querySelector('.title-index');
  parentElement.appendChild(divElement);
};

export function createButtons() {
  const buttonParent = document.querySelector('.app-buttons');
  const writerButton = document.createElement('a');
  const readerButton = document.createElement('a');

  writerButton.text = messages.writerButton;
  writerButton.href = messages.writerPath;
  readerButton.text = messages.readerButton;
  readerButton.href = messages.readerPath;

  buttonParent.appendChild(writerButton);
  buttonParent.append(readerButton);

}

export function createBackButton() {
  const backParent = document.querySelector('.back-button')
  const backButton = document.createElement('a');
  backButton.text = messages.backButton;
  backButton.href = messages.buttonPath;

  backParent.appendChild(backButton);
};


