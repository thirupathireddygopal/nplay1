// Great! Let’s now extend the same modular system with async/await, 
// cont. so the main flow waits for all post-signup tasks (email, logging, admin notification) before proceeding.

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

// Simulate user signup, Immediately Invoked Function Expression(IIFE)
(async () => {
  await signupUser({ name: 'Thiru', email: 'thiru@example.com' });
})();

/** 🖨️ Output (after delays):
  Saving user to DB: Thiru
  📧 Email sent to thiru@example.com
  📝 Log recorded for Thiru
  📢 Admin notified for Thiru
  ✅ All post-signup tasks completed
 */
// (Note: the order may vary based on the await sequence, 
// cont. but in our emitAsync, listeners run sequentially, one after another.)