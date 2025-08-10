const eventBus = require('./eventBus');

eventBus.on('user:signedUp', (user) => {
  console.log(`📢 Notify Admins: New user - ${user.name}`);
});
