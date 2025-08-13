/** let’s build a simple Publish/Subscribe (Pub/Sub) mechanism in Node.js.
    We’ll do this from scratch, not using any external library, so you can clearly see how it works.
 */

// 1. Basic Pub/Sub Implementation
// We can use Node.js’s built-in EventEmitter to mimic a Pub/Sub system.
// pubsub.js
const EventEmitter = require('events');

class PubSub extends EventEmitter {
    publish(event, data) {
        this.emit(event, data);
    }

    subscribe(event, listener) {
        this.on(event, listener);
    }

    unsubscribe(event, listener) {
        this.removeListener(event, listener);
    }
}

module.exports = new PubSub();
