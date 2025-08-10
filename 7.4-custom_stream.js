// You can create your own stream logic by extending Node's stream classes like Transform.
// UpperCase Transform Stream
const { Transform } = require('stream');

class UpperCaseStream extends Transform {
    constructor() {
        super();
    }

    //  _transform, _destroy, _final, _read, _write, _flush, _writev methods it provides
    _transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        this.push(upperChunk);
        callback();
    }
}

process.stdin
    .pipe(new UpperCaseStream())
    .pipe(process.stdout);

// Try typing in terminal and see it converted to uppercase

/**
| Use Case              | Type of Stream    | Node Module |
| --------------------- | ----------------- | ----------- |
| File I/O              | Readable/Writable | `fs`        |
| HTTP request/response | Readable/Writable | `http`      |
| Network (TCP)         | Duplex            | `net`       |
| Custom processing     | Transform         | `stream`    |
 */