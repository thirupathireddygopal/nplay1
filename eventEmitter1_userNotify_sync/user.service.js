const eventBus = require('./eventBus');

function signupUser(user) {
  // Simulate DB save
  console.log(`Saving user to DB: ${user.name}`);
  
  // Emit event after saving
  eventBus.emit('user:signedUp', user);
}

module.exports = { signupUser };
