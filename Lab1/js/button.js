class Button {
  constructor(width = "10em", height = "5em", label) {
    this.width = width;
    this.height = height;
    this.label = label;
  };

  // Create the Square
  createButtonElement() {
    console.log("Creating Button!");

    button.textContent = this.label;
    button.style.width = this.width;
    button.style.height = this.height;
    button.style.background = this.randomColor();

    return button;
  };

  // Create the correct number of buttons
  createButtons(n) {
    const buttonArray = [];

    for (let i = 0; i < n; i++) {
      console.log("Creating Button!");
      const button = this.createButtonElement();
      buttonArray.push(button);
    };

    return buttonArray;
  };

  // Assign a random color to the button
  randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
  };


};

