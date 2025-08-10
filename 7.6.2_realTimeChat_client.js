// Run multiple clients and messages will stream between them.
const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('Connected to chat server');
});

client.on('data', (data) => {
    console.log('Received Message:', data.toString());
});

// Send user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    client.write(input);
});
