// 2️⃣ Example — HTTP Request Using Buffers
// When you make an HTTP request, the response comes as chunks of Buffer data:
const http = require('http');

http.get('http://example.com', (res) => {
  let chunks = [];

  res.on('data', (chunk) => {
    console.log('Chunk is a buffer:', Buffer.isBuffer(chunk)); // true
    chunks.push(chunk);
  });

  res.on('end', () => {
    const body = Buffer.concat(chunks).toString();
    console.log('Full Response:', body);
  });
});

/**
 * Why Node.js Uses Buffers for Network I/O??
    TCP/UDP are byte-based → Data comes as raw bytes
    Buffers store binary data efficiently before converting to string
    Allows streaming large network responses without loading them fully in memory
 */

// =======================
// HTTP Client with Stream
http.get('http://localhost:3000', (res) => {
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log('Received chunk:', chunk.length);
  });
  res.on('end', () => {
    console.log('No more data.');
  });
});