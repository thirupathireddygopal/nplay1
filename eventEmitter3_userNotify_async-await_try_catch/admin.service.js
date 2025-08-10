const eventBus = require('./eventBus');

eventBus.on('user:signedUp', async (user) => {
  await new Promise(res => setTimeout(res, 800)); // Simulate notification delay
  console.log(`📢 Admin notified for ${user.name}`);
});
