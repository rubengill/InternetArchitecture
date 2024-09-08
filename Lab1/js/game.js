// Responsible for setting up the game

export class Game {

  constructor() {
    this.start = document.getElementById('start-button');
    this.input = document.getElementById('number-input');
  };

  // Add event 
  attachEventListener() {
    console.log("event listener attatched !")
    this.start.addEventListener('click', () => this.validateInput());
  };

  // Validate user input 
  validateInput() {
    console.log("input being validated")
    const num = parseInt(this.input.value);

    return (num >= 3 && num <= 7) ? num : alert("Please enter a number between 3 and 7.");
  };

  // Call this every time randomizeSquares is called 
  // checkWindowSize() {

  // };
};