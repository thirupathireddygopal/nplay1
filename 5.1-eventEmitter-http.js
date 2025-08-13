// EventEmitter is helpful in Node.js when you want to build event-driven, decoupled, and modular systems.
// It’s especially useful in:

// ✅ 1. Core Node.js Modules: Many built-in Node.js modules use EventEmitter under the hood.
// ex: HTTP Server
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.on('request', (req, res) => {
    console.log('Request received'); // prints, when we make a GET request http://localhost:3000/
});
server.listen(3000, () => {
    console.log('server listening on port: ', 3000)
});

