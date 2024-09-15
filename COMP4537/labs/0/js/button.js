import messages from '../lang/messages/en/user.js'

/**
 * Defines the logic and methods for the buttons in the game
 * 
 */
export class Button {
  static defaultWidth = messages.width;
  static defaultHeight = messages.height;

  /**
   * 
   * @param width - Width of the button element
   * @param height - Height of the button element
   * @param label - Index of the button 
   */
  constructor(width = Button.defaultWidth, height = Button.defaultHeight, label) {
    this.width = width;
    this.height = height;
    this.label = label;
    this.backgroundColor = this.randomColor();
    this.buttonElement = null;
  };

  createButtonElement() {
    const button = document.createElement("div");
    button.classList.add("square-button")

    button.textContent = this.label;
    button.style.backgroundColor = this.backgroundColor;
    button.style.width = this.width;
    button.style.height = this.height;
    this.buttonElement = button;

    return button;
  };

  randomColor() {
    const letters = messages.letters;
    let color = messages.color;
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    };

    return color;
  };

  hideButtonLabel() {
    if (this.buttonElement) {
      this.buttonElement.textContent = '';
    };
  };
};


