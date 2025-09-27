// Reference Error:
console.log(b); // undefined, 'b' is in global scope
// console.log(a); // ReferenceError: Cannot access 'a' before initialization, since it is in temporal dead zone
let a = 10;
var b = 20;

// Syntax error: 
let syn = 10;
// let syn = 30; // >> we get a syntax error, identifier "syn" has already been declared

// Type error:
let c; // we need to initialize(if we do not initialize we will get syntax error) with “a” value,
console.log(c); // undefined
const d = 10; // when const is used and it cannot be updated or re-declared(if we do, will get type error). 
c = 33; // we can initialized value whenever required but cannot re-declared
console.log(c); // 33
// d = 20; // TypeError: Assignment to constant variable.
