// Client (Streaming + Buffering)
const http = require('http');

http.get('http://localhost:5000', (res) => {
    console.log('Connected to server, streaming data...');

    res.on('data', (chunk) => {
        console.log('Received chunk (buffer):', chunk);
        console.log('As string:', chunk.toString());
    });

    res.on('end', () => {
        console.log('Stream ended.');
    });
});

/**
    🧠 How This Works
    Server sends data in small Buffer chunks over time
    Client processes each chunk as it arrives — it never waits for the whole file before starting
    This pattern:
    Prevents memory bloat with huge files
    Allows real-time processing (e.g., parsing logs as they arrive)
    Keeps the event loop non-blocking

    💡 This is basically how video streaming, file downloads,
    cont. and API data streaming (like fetch with streaming) work under the hood in Node.js.
 */

// ==============================
// const http = require('http');

http.get('http://localhost:3000', (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log('Received chunk:', chunk.length);
    });
    res.on('end', () => {
        console.log('No more data.');
    });
});
