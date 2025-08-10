/** USER NOTIFY EVENTS
    project/
    ├── index.js              # main app entry
    ├── eventBus.js           # shared event emitter
    ├── user.service.js       # user-related logic
    ├── email.service.js      # email handler
    ├── logger.service.js     # logging handler
    └── admin.service.js      # admin notification
 */
const { signupUser } = require('./user.service');

// Register event handlers by simply requiring these files
require('./email.service');
require('./logger.service');
require('./admin.service');

// Simulate user signup
signupUser({ name: 'Alice', email: 'alice@example.com' });
/**
  Saving user to DB: Alice
  📧 Sending welcome email to alice@example.com
  📝 Log: New user signed up -> Alice
  📢 Notify Admins: New user - Alice
 */

/** ✅ Why this pattern is useful:
| Feature            | Benefit                                    |
| ------------------ | ------------------------------------------ |
| Loose coupling     | Handlers are separate modules              |
| Easily extendable  | Add more listeners without changing signup |
| Cleaner code       | No nested logic in `signupUser()`          |
| Better testability | You can test each handler independently    |

  ✅ Real-World Applications:
  User activity/event tracking systems
  Microservice event buses (like Kafka/RabbitMQ alternatives)
  Modular CLI tools
  Internal pub-sub systems
  Plugins/extensions in large apps
 */