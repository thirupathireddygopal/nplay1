// Yes — in Node.js, network I/O almost always uses buffers under the hood, even if you don’t manually manage them.
// When you send or receive data over TCP, HTTP, WebSockets, etc., the raw data comes in as a Buffer.

//  1. Network Stream (TCP Socket with Buffers)
// Using the built-in net module, you can create TCP servers/clients, which use Duplex Streams.
const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // When data is received from the client
  socket.on('data', (buffer) => {
    console.log('Received buffer:', buffer); // Received buffer: <Buffer 48 65 6c 6c 6f 20 73 65 72 76 65 72>
    console.log('As string:', buffer.toString()); // As string: Hello server

    // Send the data back as a buffer to client
    const reply = Buffer.from('Hello from server');
    socket.write(reply);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Listen on port 4000
server.listen(4000, () => {
  console.log('Server listening on port 4000');
});

// Great! Let’s dive deeper with examples of streams in network, HTTP, and even custom stream creation in Node.js.