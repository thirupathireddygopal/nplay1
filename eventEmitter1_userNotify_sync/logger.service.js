const eventBus = require('./eventBus');

eventBus.on('user:signedUp', (user) => {
  console.log(`📝 Log: New user signed up -> ${user.name}`);
});
