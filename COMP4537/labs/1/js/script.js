import messages from '../lang/messages/en/user.js'

const divElement = document.createElement('p');
divElement.className = "title-text";
divElement.textContent = messages.titleIndex;
const parentElement = document.querySelector('.title-index');

const buttonParent = document.querySelector('.app-buttons');
const writerButton = document.createElement('a');
writerButton.text = messages.writerButton;
writerButton.href = "./writer.html";
const readerButton = document.createElement('a');
readerButton.text = messages.readerButton;
readerButton.href = "./reader.html"

buttonParent.appendChild(writerButton);
buttonParent.append(readerButton);

parentElement.appendChild(divElement);

//const Notes = new Notes();

