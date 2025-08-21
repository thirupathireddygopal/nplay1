// In Node.js, EventEmitter is synchronous by default.
// What that means:
// When you emit an event using .emit(), all the listeners attached to that event are called immediately and synchronously, 
// cont. in the order they were registered, before .emit() returns.

// >> When to Use EventEmitter??
// You want loose coupling between modules.
// You want to broadcast events to multiple listeners.
// You’re dealing with async or lifecycle events.
// You want to reuse built-in patterns like in streams or HTTP servers.

// const EventEmitter = require('events');
const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.on('data', () => {
  console.log('Listener 1 registered');
});

emitter.on('data', () => {
  console.log('Listener 2 registered');
});
console.log('Before emit');
emitter.emit('data');
console.log('After emit');
console.log('=======================')
// result : As you can see, both listeners are called synchronously, between Before emit and After emit.
/**
  Before emit
  Listener 1 registered
  Listener 2 registered
  After emit
*/

// Can it be Asynchronous? Yes, you can make it Asynchronous by explicitly using setImmediate, setTimeout,
// cont. process.nextTick, or async/await in the listener:
emitter.on('event', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Async Listener 1 registered');
});

emitter.on('event', () => {
  console.log('Sync Listener 2');
});
console.log('Sync Before emit');
emitter.emit('event');
console.log('Sync After emit');
/**
 * result
  Sync Before emit
  Sync Listener 2
  Sync After emit
  Async Listener 1 registered
 */
/**
 * 🔍 Why this happens:
  emit() does not await async listeners — it just calls them and moves on.
  The async function runs in the background (returns a Promise), 
  so "Sync After emit" prints before "Async Listener 1 registered"
 */

// ✅ If you want to await all async listeners, you must handle that manually.
// Here’s a helper function to await all async listeners:
// const { EventEmitter } = require('events');

class AsyncEventEmitter extends EventEmitter {
  async emitAsync(event, ...args) {
    const listeners = this.listeners(event);
    /**
      Explanation about "this.listeners":
      Returns a copy of the array of listeners for the event named eventName.
      server.on('connection', (stream) => {
        console.log('someone connected!');
      });
      console.log(util.inspect(server.listeners('connection')));
     */
    for (const listener of listeners) {
      // console.log(listener); // [AsyncFunction (anonymous)]
      await listener(...args);
    }
  }
}

const emitter2 = new AsyncEventEmitter();

emitter2.on('event', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Async Listener 1');
});

emitter2.on('event', async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Async Listener 2');
});

(async () => {
  console.log('=======================')
  console.log('Before emit');
  await emitter2.emitAsync('event');
  console.log('After emit');
})();

