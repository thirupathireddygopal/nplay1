/**
 * Yes, I/O (Input/Output) operations can absolutely be done using buffers, 
 * cont. and in fact, they often are — especially for performance and memory efficiency reasons.
 */
/**
 * ✅ What is a Buffer?
    A buffer is a temporary memory area used to hold data while it is being moved from one place to another, 
    cont. typically between a slow source/destination (like disk or network) and a fast CPU.
 */

// 🛠️ Examples of I/O Using Buffers
// 1. Reading a File with Buffer in Node.js
const fs = require('fs');

/** Buffer.alloc() allocates a new buffer of a specified size, 
    optionally filled with a specific value (defaulting to zeroes). 
    Buffer.alloc() is preferred for creating buffers that will hold sensitive data as it guarantees initialization.
*/
const buffer = Buffer.alloc(1024); // 1KB buffer

fs.open('example.txt', 'r', (err, fd) => {
    if (err) throw err;

    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
        if (err) throw err;
        console.log('Read:', buffer.toString('utf8', 0, bytesRead));
        fs.close(fd, () => { });
    });
});

// 2. Writing to a File with Buffer
/** Buffer.from() creates a new Buffer instance, 
    cont. meaning the original data source is not directly modified.
    >> Buffer.from() creates a buffer from existing data.
    >> When creating a Buffer from a string, 
    cont. an optional encoding parameter can be provided (e.g., 'utf8', 'ascii', 'hex', 'base64').
*/
const buffer2 = Buffer.from('Hello, buffered world!', 'utf8'); // if string then Default encoding is "utf8", 

fs.open('output.txt', 'w', (err, fd) => {
  if (err) throw err;

  fs.write(fd, buffer2, 0, buffer2.length, null, (err, written) => {
    if (err) throw err;
    console.log('Written bytes:', written);
    fs.close(fd, () => {});
  });
});

/** 🔄 Why Use Buffers in I/O?
| Benefit               | Explanation                                                           |
| --------------------- | --------------------------------------------------------------------- |
| **Performance**       | Reduces number of I/O system calls by batching data                   |
| **Memory Efficiency** | Avoids loading large files into memory all at once                    |
| **Streaming Support** | Enables reading/writing data chunks (e.g., from video, network, etc.) |
| **Non-blocking I/O**  | Especially useful in event-driven environments like Node.js           |
 */

// 📦 Streams + Buffers (Common Pattern)
// *** Streams internally use buffers to handle large I/O efficiently: ***
const fs = require('fs');
const readable = fs.createReadStream('bigfile.txt');
readable.on('data', (chunk) => {
  console.log('Chunk read:', chunk.toString());
});

/**
| Buffer Questions                           | Answer                                        |
| ------------------------------------------ | --------------------------------------------- |
| Can I/O operations be done using a buffer? | ✅ Yes                                         |
| Is it efficient?                           | ✅ Very efficient                              |
| Is it commonly used?                       | ✅ Especially with streams, files, and network |
 */