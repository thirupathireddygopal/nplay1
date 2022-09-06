// for loop
let str = '';
for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);
// expected output: "012345678"

// for-in >> obj[key] , res[roleId]
// majorly for-in is used for objects
// 1)for object properties
var obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`key: ${key}, value: ${obj[key]}`);
}
// 2) for array using indexes >> 0,1,2 ...
const numbersForIn = [1, 3, 5, 7, 9];
for (const index in numbersForIn) {
  // if (Object.hasOwnProperty.call(object, key)) {
  //   const element = object[key];
  // }
  console.log(numbersForIn[index]);
}

// for-of >> loop over iterable
// generally for-of is used for arrays of iterable
// for-of does not work with objects because they are not iterable
const numbers = [1, 3, 5, 7, 9];
for (const item of numbers) {
  console.log(item)
}


// myMap1.forEach((value, key) => {
//   console.log(`key: ${key}, val: ${value}`);
// });

// var 
// ex1
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log('var in: ' + x);  // 2
  }
  console.log('var out: ' + x);  // 2
}
varTest();

// ex2
'use strict';
function foo() {
  console.log(x); // undefined (Note: Not reference error)
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  // console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}
foo();

// The let statement declares a block-scoped local variable, optionally initializing it to a value.
function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log('let in: ' + x);  // 2
  }
  console.log('let out:' + x);  // 1
}

letTest();


// Closure
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function makeAdder(x) {
  return function (y, z) {
    return x + y + z;
  };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5); // [Function (anonymous)]
console.log(add10); // [Function (anonymous)]
console.log(add5(2, 3));  // 10
console.log(add10(2, 3)); // 15

//add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

console.log(1); // first
setTimeout(() => {
  console.log(`2`) // third
}, 2000);
console.log(3) // second