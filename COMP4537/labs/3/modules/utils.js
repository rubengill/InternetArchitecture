const messages = require('../lang/en/en.js');
const fs = require('fs');

class Utility {
  getDate() {
    return new Date();
  };

  greetUser(name) {
    return messages.greeting.replace('%1', name);
  };

  writeToFile(text) {
    fs.appendFileSync(messages.filePath, text + '\n');
  };

  readFromFile(filename) {
    return fs.readFileSync(filename, 'utf8');
  };
};


module.exports = Utility;