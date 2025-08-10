const EventEmitter = require('events');

class AsyncEventEmitter extends EventEmitter {
  /**
   * Emit events and wait for all listeners to complete.
   * - Each listener runs in parallel.
   * - Handles errors per listener.
   * - Optional timeout support.
   * 
   * @param {string} event 
   * @param {any[]} args 
   * @param {object} options - { timeout: number } in milliseconds
   */
  async emitAsync(event, ...args) {
    console.log(...args); //{ name: 'Thiru', email: 'thiru@example.com' } { __options: { timeout: 2000 } }
    const options = typeof args[args.length - 1] === 'object' && args[args.length - 1]?.__options
      ? args.pop().__options : {};

    const listeners = this.listeners(event);
    const promises = listeners.map(listener => this._runWithTimeout(listener, args, options.timeout));

    const results = await Promise.allSettled(promises);

    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.error(`❌ Listener ${index + 1} failed:`, result.reason.message || result.reason);
      }
    });
  }

  _runWithTimeout(listenerFn, args, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Listener timeout')), timeout);

      Promise.resolve(listenerFn(...args))
        .then(res => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch(err => {
          clearTimeout(timer);
          reject(err);
        });
    });
  }
}

module.exports = new AsyncEventEmitter();
