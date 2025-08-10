// ✅ 2. Custom Event-Driven Logic
// You can create your own events to communicate between parts of your application without tight coupling.

//✅ Useful when:
// Task completes at a later time.
// You want to notify other parts of your app when it's done.
const EventEmitter = require('events');
const emitter = new EventEmitter();

function doTask() {
    console.log('Doing some task...');
    setTimeout(() => {
        emitter.emit('done', 'Task completed!');
    }, 1000);
}

emitter.on('done', (message) => {
    console.log(message);
});

doTask();
