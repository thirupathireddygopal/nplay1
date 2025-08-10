// We’ll upload a file without buffering it all into memory.
// Server:
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        const writeStream = fs.createWriteStream('uploaded.txt');
        req.pipe(writeStream);

        req.on('end', () => {
            res.end('File uploaded successfully!');
        });
    } else {
        res.end('Send a POST request to upload a file.');
    }
}).listen(3000, () => {
    console.log('File upload server running at http://localhost:3000');
});
