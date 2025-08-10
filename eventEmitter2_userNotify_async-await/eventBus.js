const EventEmitter = require('events');

// using async-await
class AsyncEventEmitter extends EventEmitter {
  async emitAsync(event, ...args) { // async fun
    const listeners = this.listeners(event);
    for (const listener of listeners) {
      await listener(...args); // await
    }
  }

  // 🔁 Bonus: Want listeners to run in parallel?
  // Change emitAsync() in eventBus.js to:
  // async emitAsync(event, ...args) {
  //   const listeners = this.listeners(event);
  //   await Promise.all(listeners.map(listener => listener(...args)));
  // }
  // Now all post-signup tasks happen in parallel, and the main thread awaits all of them before proceeding.

}

module.exports = new AsyncEventEmitter();

