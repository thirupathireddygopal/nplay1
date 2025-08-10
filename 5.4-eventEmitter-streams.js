//✅ 4. Streams: Readable, Writable, and Transform streams (used for files, HTTP, sockets, etc.) 
// cont. are all based on EventEmitter.

const fs = require('fs');
const stream = fs.createReadStream('hello.txt');

stream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.toString());
});

stream.on('end', () => {
  console.log('File reading finished.');
});
