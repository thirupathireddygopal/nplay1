// ✅ 6. Plugin Systems
// You can allow plugins/modules to hook into lifecycle events:

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('startup', () => console.log('Plugin A initialized'));
emitter.on('startup', () => console.log('Plugin B initialized'));

emitter.emit('startup');
