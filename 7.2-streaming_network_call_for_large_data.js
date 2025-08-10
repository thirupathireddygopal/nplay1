/**
    Alright — let’s make a streaming network call in Node.js where data is read in buffered chunks
    cont. so we don’t block the event loop or overload memory.
    cont. We’ll use an HTTP GET to download a large file (or simulate it) and process it chunk-by-chunk.
 */

// 🌐 Example — Streaming a Large File Over HTTP
// Server (Simulating a large file response)
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send chunks every 500ms (simulating a slow network stream)
    let count = 1;
    const interval = setInterval(() => {
        const chunk = Buffer.from(`Chunk ${count}\n`);
        console.log('Sending:', chunk.toString());
        res.write(chunk);

        count++;
        if (count > 5) { // After 5 chunks, end the stream
            clearInterval(interval);
            res.end('--- End of Stream ---\n');
        }
    }, 500);
}).listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});

// ===========================
// const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const stream = fs.createReadStream('bigfile.txt');
    stream.pipe(res);
}).listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
