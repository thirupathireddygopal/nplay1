// Example Failing Listener: logger.service.js
const eventBus = require('./eventBus');
eventBus.on('user:signedUp', async (user) => {
  throw new Error('Logging system down');
});
