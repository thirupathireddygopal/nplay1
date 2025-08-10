// File Compressor (Gzip)
// We’ll use a Readable stream → Transform stream (gzip) → Writable stream.
const fs = require('fs');
const zlib = require('zlib');

// Input and output files
const inputFile = 'bigfile.txt';
const outputFile = 'bigfile.txt.gz';

// Create streams
const readStream = fs.createReadStream(inputFile);
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream(outputFile);

// Pipe them together
readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', () => {
        console.log('File compressed successfully!');
    });
