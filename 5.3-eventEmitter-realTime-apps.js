//✅ 3. Real-time Applications:
// In apps like chat, game servers, or notifications,
// cont. EventEmitter can broadcast events when something changes.
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('message', (msg) => {
  console.log('New message:', msg);
});

// ✅ 5. Logging & Monitoring
// Emit events when something interesting happens — e.g., errors, performance thresholds, etc.
emitter.on('error', (err) => {
  console.error('App error:', err.message);
});

// somewhere else
emitter.emit('message', 'Hello from user!');

