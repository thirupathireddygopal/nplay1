const eventBus = require('./eventBus');

async function signupUser(user) {
  console.log(`Saving user to DB: ${user.name}`);
  // Emit with timeout of 2 seconds
  await eventBus.emitAsync('user:signedUp', user, { __options: { timeout: 2000 } });
  console.log('✅ Signup and notifications done.');
}

module.exports = { signupUser };
