// Real-Time Chat Server (TCP)
// Uses Duplex streams for sending/receiving messages.
const net = require('net');
let clients = [];

const server = net.createServer((socket) => {
    // console.log('socket: ', socket);
    clients.push(socket);
    console.log('New client connected');

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log('Received:', message);


        // Broadcast to other clients
        clients.forEach(client => {
            if (client !== socket) {
                client.write(message + '\n');
            }
        });
    });

    socket.on('end', () => {
        clients = clients.filter(c => c !== socket);
        console.log('Client disconnected');
    });
});

server.listen(5000, () => {
    console.log('Chat server listening on port 5000');
});
