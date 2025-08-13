/**
    In Node.js, streams are a powerful way to handle reading and writing data Asynchronously,
    cont. especially when working with large volumes of data like files, network communications,
    cont. or incoming HTTP requests/responses.

    🔄 What is a Stream?
    A stream is an abstract interface for working with streaming data in Node.js.
    There are four fundamental types of streams:
    | Type        | Description                               | Example                    |
    | ----------- | ----------------------------------------- | -------------------------- |
    | `Readable`  | Stream from which data can be read        | Reading a file             |
    | `Writable`  | Stream to which data can be written       | Writing to a file          |
    | `Duplex`    | Stream that is both readable and writable | TCP socket                 |
    | `Transform` | Duplex stream that can modify the data    | Compression (gzip), crypto |
 */

// Example: Reading a File Using Stream
const fs = require('fs');
const readStream = fs.createReadStream('bigfile.txt', { encoding: 'utf-8' });
readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.length);
});
readStream.on('end', () => {
    console.log('Finished reading file');
});
readStream.on('error', (err) => {
    console.error('Error:', err);
});

// Example: Writing to a File Using Stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello, ');
writeStream.write('World!');
writeStream.end();
writeStream.on('finish', () => {
    console.log('Finished writing');
});

// 🔄 Pipe: Connecting Readable to Writable
// This approach is memory-efficient and non-blocking—great for large files.
const readStream2 = fs.createReadStream('bigfile.txt');
const writeStream2 = fs.createWriteStream('copy.txt');
readStream2.pipe(writeStream2);

// 🔁 Transform Stream Example (Gzip Compression)
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream3 = fs.createReadStream('bigfile.txt');
const writeStream3 = fs.createWriteStream('bigfile.txt.gz');
readStream3.pipe(gzip).pipe(writeStream3);

// ✅ Why Use Streams?
// Handles large data efficiently (doesn’t load entire file into memory).
// Enables chaining operations (like compression, encryption).
// Useful for real-time data processing.




