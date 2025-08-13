/** 4. Realistic Scenario
    You can connect this to microservices or distributed systems using Redis, RabbitMQ, Kafka, etc.
    For example, using Redis as the transport layer:
*/

// For example, using Redis as the transport layer:
// npm install redis
const { createClient } = require('redis');

const publisher = createClient();
const subscriber = createClient();

(async () => {
    await publisher.connect();
    await subscriber.connect();

    // Subscriber
    await subscriber.subscribe('orderPlaced', (message) => {
        console.log(`📥 Received: ${message}`);
    });

    // Publisher
    setTimeout(async () => {
        await publisher.publish('orderPlaced', JSON.stringify({ item: 'Phone', customer: 'thiru@gmail.com' }));
    }, 1000);
})();
