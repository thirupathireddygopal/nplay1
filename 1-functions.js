// In Javascript, if a function does not explicityly use a retun statement, it will implicityly return "undefined".
// this happens when function completes its execution without encountring a return keyword or when the return keyword is used without an associated value.
// It's important to note that explicitly returning "undefined" is functionally equivalent to not using a return statement at all.
function call() {
    // NO RETURN STATEMENT
}
let result = call();
console.log(result); // output: undefined

function call2() {
    return; // return statement without a value : undefined
}
let result2 = call2();
console.log(result2); // output: undefined

// >> How js code gets executed?
// Memory component / memory creation phase / variable creation enviorment
var n = 2; // intial value >> undefined
function square(num) { // intial value >> total function block is copied and saved in memory component
    var res = num * num;
    return res;
}
var sq2 = square(n); // intial value >> undefined, local execution context1
var sq4 = square(4); // intial value >> undefined, local execution context2
console.log(sq2);
console.log(sq4);

// how default parameters works in js
function sum(x = 10, y = 15) {
    console.log(x + y);
}
sum(null, 5); // 0+5 = 5
sum(undefined, 6); // 10+6 = 16
sum(); // 10+15 = 25

// >> Hoisting:
/**
    Hoisting is a phenomenon in javascript by which we can access variable and functions even before we have initialized it 
    cont. or we have put some value in it, which means we can access them without any reference Error.
    we can access variables value as "undefined" even before we have intialized with some value
    cont. javascript allocates the memory for both variables and functions even before single of line code executed
*/
getName(); // getName somehow managed to the value of function which is not initalized before
console.log(hostx); // initial value >> undefined, hostx variable can't able to get the value
console.log(getName); // we are trying to access the value of getName function intially we know it saves total function itself in memory creation phase
var hostx = 9; // if we comment this out we will get the value as "ReferenceError: hostx is not defined"
function getName() {
    // Javascript considers this as a function and it just saves a copy of function block in memory component
    console.log('hello javascript');
}
// getName(); // normal >> we get the value
// console.log(hostx); // normal >> we get the value
// console.log(getName); // normal >> it prints total function itself something like [Function: getName]

// function declarations/function statement vs function expression?
// 1. Function Declaration (also called Function Statement)
// Key Features:
// Hoisted: Fully hoisted to the top of the scope, meaning you can call the function before its definition.
// Used when you want to define a named function that can be reused.
sayHello(); // ✅ Works because it's hoisted
function sayHello() {
    console.log("Hi there!");
}

// 2. Function Expression
// Key Features:
// javascript considers this as a variable itself instead of function
// Not hoisted (only the variable is hoisted, not the function value).
// Can be anonymous or named.
// Stored in a variable or passed as a value.
// greet(); // ❌ Error: greet is not a function
const greet = function () {
    console.log("Hi");
};
greet(); // ✅ Works
// javascript consider as a normal variable instead of function when we use as function expression
var greet1 = () => {
    console.log('Hello javascript..');
}
greet1(); // ✅ Works

// 3. Named Function Expression
// This is a special type of function expression where the function has a name
// Still not hoisted like declarations.
const greet2 = function greetMe(name) {
    if (name) {
        console.log(`Hello, ${name}`);
    } else {
        // Recursive call using the internal name
        greetMe("Guest"); // greetMe is only accessible inside the function body (for recursion or debugging).
    }
};
greet2();       // Output: Hello, Guest
greet2("Thiru"); // Output: Hello, Thiru

// >> undefined v/s not defined
var y; // global scope
// the typeof operator in javascript is used to determine the data type of a variable or value.
// it returns a string indicating the type of the operand.
console.log(typeof y); // "undefined"
if (y === undefined) {
    console.log('y is created but undefined'); // yes, enters into this block
}
else {
    console.log('y is not defined or not created');
}
// never ever write a = undefined
// var z = undefined; // not a good practice
