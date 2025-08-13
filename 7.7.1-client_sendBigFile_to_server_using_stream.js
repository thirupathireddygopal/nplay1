// Client (file uploader script):
const fs = require('fs');
const http = require('http');

const filePath = 'bigfile.txt'; // File to upload
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream'
    }
};
const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
});
fs.createReadStream(filePath).pipe(req);

/**
    How it works
    req is a Readable Stream (incoming HTTP request with file data)
    gzip is a Transform Stream (compresses data chunk-by-chunk)
    writeStream is a Writable Stream (saves compressed file to disk)
    Pipeline: req → gzip → writeStream processes the file as it arrives — no full buffering in memory.
 */