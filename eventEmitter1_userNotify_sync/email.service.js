const eventBus = require('./eventBus');

eventBus.on('user:signedUp', (user) => {
  console.log(`📧 Sending welcome email to ${user.email}`);
});
