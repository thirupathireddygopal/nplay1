// EventEmitter is helpful in Node.js when you want to build event-driven, decoupled, and modular systems.
// It’s especially useful in:

// ✅ 1. Core Node.js Modules: Many built-in Node.js modules use EventEmitter under the hood.
// ex: HTTP Server
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World'); // sending the response
});

server.on('request', (req, res) => { // listening requests
    console.log('Request received for:', req.url); // prints, when we make a GET request http://localhost:3000/
});
server.listen(3000, () => {
    console.log('server listening on port: ', 3000)
});


/**
if (req.url === '/favicon.ico') {
    // serve a small favicon
    const faviconPath = path.join(__dirname, 'favicon.ico');
    fs.readFile(faviconPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end();
        return;
      }
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      res.end(data);
    });
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
 */

/**
 * The reason is: it’s not your code, it’s the browser.
 * When you type http://localhost:3000/ in Chrome/Firefox/Edge, 
 * the browser always tries to fetch a favicon (the little icon that shows up in the browser tab).
    const http = require('http');
    const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
    // ignore favicon requests
    res.writeHead(204); // No Content
    res.end();
    return;
    }

    console.log('Request received for:', req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
    });

    server.listen(3000, () => {
    console.log('Server listening on port: 3000');
    });

*/