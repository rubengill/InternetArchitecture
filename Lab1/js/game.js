import { Button } from './button.js'

export class Game {

  constructor() {
    this.start = document.getElementById('start-button');
    this.input = document.getElementById('number-input');
    
  };

  attachEventListener() {
    this.start.addEventListener('click', () => this.validateInput());
  };

  // Ensure input falls within the range
  validateInput() {
    console.log("input being validated")
    const num = parseInt(this.input.value);

    return (num >= 3 && num <= 7) ? num : alert("Please enter a number between 3 and 7.");
  };

  handleClick() {
    const validNum = this.validateInput();

    if (validNum) {
      
    };
  };

  // Call this every time randomizeSquares is called 
  // checkWindowSize() {

  // };
};