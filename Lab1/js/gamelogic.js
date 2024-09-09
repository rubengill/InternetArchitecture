export class GameLogic {
  constructor(buttons, buttonArea) {
    this.buttons = buttons;
    this.buttonArea = buttonArea;
  };

  getAreaDimensions() {
    // Get infomration about the button-area div 
    return {
      width: this.buttonArea.offsetWidth,
      height: this.buttonArea.offsetHeight
    };
  };

  logDimensions() {
    const dimensions = this.getAreaDimensions(); // Call the method
    console.log('Button Area Dimensions:', dimensions); // Log the returned object
    console.log('Width:', dimensions.width); // Log width specifically
    console.log('Height:', dimensions.height); // Log height specifically
  }

  randomizeButton() {

  };

  checkOrder() {

  };
};