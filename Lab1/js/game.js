import { Button } from './button.js'
import { GameLogic } from './gamelogic.js';

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

    return (num >= 3 && num <= 7) ? num : alert("Please enter a number between 3 and 7.");
  };

  handleClick() {
    const validNum = this.validateInput();

    if (validNum) {
      this.clearButtons();
      this.createButtons(validNum);
      this.insertButtons();
      this.gameLogic = new GameLogic(this.buttons, this.buttonArea);
    };
  };

  createButtons(n) {
    for (let i = 1; i <= n; i++) {
      console.log("Creating Button loop!");
      const button = new Button(undefined, undefined, i);
      const buttonElement = button.createButtonElement();
      this.buttons.push(buttonElement);
    };
  };

  insertButtons() {
    this.buttons.forEach(button => {
      this.buttonArea.appendChild(button);
    });
  };

  clearButtons() {
    this.buttons.length = 0;
    this.buttonArea.innerHTML = '';
  };

  // logStuff() {
  //   if (this.gameLogic) {
  //     console.log("I am called")
  //     this.gameLogic.getAreaDimensions();
  //     this.gameLogic.logDimensions();
  //   }
  // };

  // startGame() {
  //   if (this.gameLogic) {
  //     this.gameLogic.randomizeButton();
  //   }
  // };

};


// Call this every time randomizeSquares is called
// checkWindowSize() {

// };