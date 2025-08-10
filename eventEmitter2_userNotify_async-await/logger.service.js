const eventBus = require('./eventBus');

eventBus.on('user:signedUp', async (user) => {
  await new Promise(res => setTimeout(res, 500)); // Simulate log delay
  console.log(`📝 Log recorded for ${user.name}`);
});
