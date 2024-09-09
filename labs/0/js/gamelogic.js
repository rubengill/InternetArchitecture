import messages from "../lang/messages/en/user.js";

export class GameLogic {
  constructor(buttons, buttonArea) {
    this.buttons = buttons;
    this.buttonArea = buttonArea;
    this.currentClickIndex = 1;
  };

  getAreaDimensions() {
    return {
      width: this.buttonArea.offsetWidth,
      height: this.buttonArea.offsetHeight
    };
  };

  getButtonDimensions(button) {
    const width = this.convertEmToPixels(button.width);
    const height = this.convertEmToPixels(button.height);


    return { width, height };
  };

  randomizeButtons() {
    const dimensions = this.getAreaDimensions();

    this.buttons.forEach(button => {
      const buttonSize = this.getButtonDimensions(button);

      const maxX = dimensions.width - buttonSize.width;
      const maxY = dimensions.height - buttonSize.height;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      button.buttonElement.style.position = "absolute";
      button.buttonElement.style.left = `${randomX}px`;
      button.buttonElement.style.top = `${randomY}px`;
    })
  };

  randomizeMultipleTimes(n) {
    this.randomizeButtons();

    for (let i = 1; i < n; i++) {
      console.log(`${n}`)
      setTimeout(() => {
        this.randomizeButtons();
      }, i * 2000);
    };

    setTimeout(() => {
      this.prepareButtons();
    }, (n - 1) * 2000);
  };

  convertEmToPixels(emValue) {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return parseFloat(emValue) * fontSize;
  };

  prepareButtons() {
    this.buttons.forEach((button, index) => {
      button.hideButtonLabel();

      button.buttonElement.addEventListener("click", () => {
        if (this.currentClickIndex === index + 1) {
          button.buttonElement.textContent = button.label;
          this.currentClickIndex++;

          if (this.currentClickIndex > this.buttons.length) {
            alert(messages.congrats);
          }
        } else {
          alert(messages.error);
          this.showAllButtonLabels();
        }
      });
    });
  };

  showAllButtonLabels() {
    this.buttons.forEach((button) => {
      button.buttonElement.textContent = button.label;
    });
  };

};