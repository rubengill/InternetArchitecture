export class Button {
  constructor(width = "10em", height = "5em", label, isClickable = false) {
    this.width = width;
    this.height = height;
    this.label = label;
    this.isClickable = isClickable;
    this.backgroundColor = this.randomColor();
  };

  createButtonElement() {
    console.log("Creating Button!");

    const button = document.createElement("div");
    button.classList.add("square-button")

    button.textContent = this.label;
    button.style.backgroundColor = this.backgroundColor;
    button.style.width = this.width;
    button.style.height = this.height;

    return button;
  };

  randomColor() {
    const letters = "456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    };

    return color;
  };
};

