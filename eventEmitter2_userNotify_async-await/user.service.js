const eventBus = require('./eventBus');

async function signupUser(user) {
  console.log(`Saving user to DB: ${user.name}`);
  
  // Wait for all async listeners to complete
  await eventBus.emitAsync('user:signedUp', user);

  console.log('✅ All post-signup tasks completed');
}

module.exports = { signupUser };
