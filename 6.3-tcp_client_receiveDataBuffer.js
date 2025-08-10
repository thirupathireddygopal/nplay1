// Client Example
const net = require('net');

const client = net.createConnection({ port: 4000 }, () => {
  console.log('Connected to server');

  const msg = Buffer.from('Hello server');
  client.write(msg);
});

client.on('data', (buffer) => {
  console.log('Server says:', buffer.toString()); // Server says: Hello from server
  client.end();
});
