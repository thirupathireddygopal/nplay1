const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

// initializing events
var myEmitter = new MyEmitter();
var myEmitter1 = new MyEmitter();
var myEmitter2 = new MyEmitter();



myEmitter.on('thiruEvent', () => {
  console.log(`thiru event occured`);
})

function fun1(arg1) {
  console.log(`fun1 event occured: ${arg1}`)
}

function fun2(arg1) {
  console.log(`fun2 event occured: ${arg1}`)
}

// myEmitter.on('thiru_e2', fun1);
// myEmitter.on('thiru_e2', fun1);
// myEmitter.on('thiru_e2', fun2);

// myEmitter.emit('thiruEvent');
// myEmitter.emit('thiru_e2', 'gopal');
// myEmitter.removeListener('thiru_e2',fun1);
// myEmitter.emit('thiru_e2', 'gopal');
// myEmitter.removeAllListeners('thiru_e2');
// myEmitter.emit('thiru_e2', 'gopal');

console.log(`dafult max listeners ${myEmitter.getMaxListeners()}`);

// setting local emitter to 3
myEmitter.setMaxListeners(3);
console.log(`dafult local listeners ${myEmitter.getMaxListeners()}`);
for (let i = 0; i < 3; i++) {
  myEmitter.addListener('thiru_e2', fun1)
}

console.log(`final myEmitter listeners: ${myEmitter.getMaxListeners()}`)

myEmitter.emit('thiru_e2', 'gopal1');
// myEmitter.emit('thiru_e2', 'gopal2');
// myEmitter.emit('thiru_e2', 'gopal3');
// myEmitter.emit('thiru_e2', 'gopal4');
