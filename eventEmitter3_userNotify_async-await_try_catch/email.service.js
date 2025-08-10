const eventBus = require('./eventBus');

eventBus.on('user:signedUp', async (user) => {
  await new Promise(res => setTimeout(res, 1000)); // Simulate email delay
  console.log(`📧 Email sent to ${user.email}`);
});
