/**
    Perfect — we’ll build a real-world streaming pipeline in Node.js that:
    Accepts a file upload from a client (HTTP Readable stream)
    Compresses it on-the-fly using zlib (Transform stream)
    Writes it to disk (Writable stream) without loading into memory
 */

//📂 Streaming File Upload + Compression
// Server (streaming pipeline):
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const PORT = 3000;

http.createServer((req, res) => {
    if (req.method === 'POST') {
        const filename = `upload-${Date.now()}.gz`;
        const filepath = path.join(__dirname, filename);

        console.log('Receiving file...');

        // Create streams
        const gzip = zlib.createGzip();
        const writeStream = fs.createWriteStream(filepath);

        // Pipeline: req -> gzip -> writeStream
        req.pipe(gzip).pipe(writeStream);

        writeStream.on('finish', () => {
            console.log(`File saved as ${filename}`);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`File uploaded and compressed as ${filename}`);
        });

        req.on('error', (err) => {
            console.error('Upload error:', err);
            res.statusCode = 500;
            res.end('Server error');
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form method="POST" enctype="application/octet-stream">
                <input type="file" name="file" />
                <button type="submit">Upload</button>
            </form>
        `);
    }
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
