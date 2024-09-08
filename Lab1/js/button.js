export class Button {
  constructor(width, height, label) {
    this.width = width;
    this.height = height;
    this.label = label;
  };

  // Create the Button
  createButtonElement() {
    console.log("Creating Button!");

    const button = document.createElement("div");
    button.classList.add("square-button")

    button.textContent = this.label;
    button.style.backgroundColor = this.randomColor();

    return button;
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

