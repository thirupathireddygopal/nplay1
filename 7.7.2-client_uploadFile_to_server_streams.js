// This will send the file in chunks, perfect for huge files.
// // Client (Uploader):
const fs = require('fs');
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream' }
};

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
});
fs.createReadStream('bigfile.txt').pipe(req); // file is sent as octet-stream
