//✅ 4. Streams: Readable, Writable, and Transform streams (used for files, HTTP, sockets, etc.) 
// cont. are all based on EventEmitter.

const fs = require('fs');

// check weather the file exist or not
fs.access('./hello.txt', fs.constants.F_OK, (err) => {
  if (err) {
    // console.error(err);
    console.log('No such file exist');
  }
  else {
    console.log('file exist');
    const stream = fs.createReadStream('hello.txt');

    stream.on('data', (chunk) => {
      console.log('Received buffer chunk:', chunk.toString());
    });

    stream.on('end', () => {
      console.log('File reading finished.');
    });
  }
})

