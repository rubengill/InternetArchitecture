const Utility = require('./modules/utils.js');
const messages = require('./lang/en/en.js');
const http = require('http');
const url = require('url');

class ServerHandler {
  constructor() {
    this.utility = new Utility();
  }

  handleGreeting(query, res) {
    const userName = query.name;

    const greetingMessage = this.utility.greetUser(userName);
    const greetingTime = this.utility.getDate();

    const responseMessage = `<p style="color: blue;">${greetingMessage} ${greetingTime}</p>`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(responseMessage);
  };

  handleWrite(query, res) {
    const text = query.text;

    try {
      this.utility.writeToFile(text);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(messages.successful);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(messages.errorWrite);
    };
  };

  handleRead(filePath, res) {
    const filename = filePath;

    try {
      const data = this.utility.readFromFile(filename);

      const responseMessage = `<pre>${data}</pre>`;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(responseMessage);
    } catch (err) {
      console.error(err);
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`404 File not found: ${filename}`);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(messages.errorRead);
      };
    };
  };
}

const serverHandler = new ServerHandler();

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Route to the correct API
  if (pathname.startsWith('/getDate')) {
    const queryObject = parsedUrl.query;
    serverHandler.handleGreeting(queryObject, res);
  } else if (pathname.startsWith('/writeFile')) {
    const queryObject = parsedUrl.query;
    serverHandler.handleWrite(queryObject, res);
  } else if (pathname.startsWith('/readFile/')) {
    const filePath = pathname.replace('/readFile/', '');
    serverHandler.handleRead(decodeURIComponent(filePath), res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(messages.four);
  };
});
