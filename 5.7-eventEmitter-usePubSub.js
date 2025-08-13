// 2. Using the Pub/Sub
// index.js
const pubsub = require('./pubsub');

// Subscriber 1
pubsub.subscribe('orderPlaced', (data) => {
    console.log(`📦 Order Service: Processing order for ${data.item}`);
});

// Subscriber 2
pubsub.subscribe('orderPlaced', (data) => {
    console.log(`📧 Email Service: Sending email to ${data.customer}`);
});

// Publisher
pubsub.publish('orderPlaced', {
    item: 'Laptop',
    customer: 'thirupathireddygopal@gmail.com'
});

/** output
    📦 Order Service: Processing order for Laptop
    📧 Email Service: Sending email to thirupathireddygopal@gmail.com
*/

/** 3. How It Works
    Publisher: Sends out a message (event + data) using .publish().
    Subscriber: Registers a function to run when a specific event occurs using .subscribe().
    EventEmitter: Handles event registration and triggering.
 */