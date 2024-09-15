import messages from '../lang/messages/en/user.js'

const divElement = document.createElement('p');
divElement.className = "title-text";
divElement.textContent = messages.titleIndex;
const parentElement = document.querySelector('.title-index');

parentElement.appendChild(divElement);

//const Notes = new Notes();

