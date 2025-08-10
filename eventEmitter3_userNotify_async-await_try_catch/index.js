// Great! Let's enhance the AsyncEventEmitter to be production-friendly with the following:
/**
 * 🔄 Goal: Use an AsyncEventEmitter to support await.
  Emit user:signedUp and wait for all listeners to complete.
  Avoid changing the listener modules — only their internal logic will be async.
 */
const { signupUser } = require('./user.service');

// Register event handlers by simply requiring these files
require('./email.service');
require('./logger.service');
require('./admin.service');

// Simulate user signup
(async () => {
  await signupUser({ name: 'Thiru', email: 'thiru@example.com' });
})();

/** 🖨️ Sample Output:
  Saving user: Alice
  📧 Email sent to alice@example.com
  📢 Admin notified for Alice
  ❌ Listener 3 failed: Logging system down
  ✅ Signup and notifications done.
 */

/**
| Feature   | Description                                |
| --------- | ------------------------------------------ |
| Parallel  | All listeners run at the same time         |
| Robust    | Failures are logged but don’t crash system |
| Timeout   | Prevents forever-waiting listeners         |
| Clean API | No listener changes needed                 |

 */