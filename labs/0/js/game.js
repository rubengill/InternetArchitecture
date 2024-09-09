import { Button } from './button.js'
import { GameLogic } from './gamelogic.js';
import messages from '../lang/messages/en/user.js';

export class Game {

  constructor() {
    this.start = document.getElementById('start-button');
    this.input = document.getElementById('number-input');
    this.buttonArea = document.getElementById('button-area');
    this.buttons = [];
    this.gameLogic = null;
  };

  attachEventListener() {
    this.start.addEventListener('click', () => this.handleClick());
  };

  // Ensure input falls within the range
  validateInput() {
    const num = parseInt(this.input.value);

    return (num >= 3 && num <= 7) ? num : alert(messages.alert);
  };

  handleClick() {
    const validNum = this.validateInput();

    if (validNum) {
      this.clearButtons();
      this.createButtons(validNum);
      this.insertButtons();
      this.gameLogic = new GameLogic(this.buttons, this.buttonArea);

      setTimeout(() => {
        this.gameLogic.randomizeMultipleTimes(validNum);
      }, validNum * 1000);
    };
  };

  createButtons(n) {
    for (let i = 1; i <= n; i++) {
      const button = new Button(undefined, undefined, i);
      button.createButtonElement();
      this.buttons.push(button);
    };
  };

  insertButtons() {
    this.buttons.forEach(button => {
      this.buttonArea.appendChild(button.buttonElement);
    });
  };

  clearButtons() {
    this.buttons.length = 0;
    this.buttonArea.innerHTML = '';
  };

};
