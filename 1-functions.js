// In Javascript, if a function does not explicityly use a retun statement, it will implicityly return "undefined".
// this happens when function completes its execution without encountring a return keyword or when the return keyword is used without an associated value.
// It's important to note that explicitly returning "undefined" is functionally equivalent to not using a return statement at all.
function call() {
    // NO RETURN STATEMENT
}
let result = call();
console.log(result); // output: undefined

function call2() {
    return; // return statement without a value
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

// Javascript considers this as a function and it just saves a copy of function block in memory component
function getName() {
    console.log('hello javascript');
}
// getName(); // normal >> we get the value
// console.log(hostx); // normal >> we get the value
// console.log(getName); // normal >> it prints total function itself something like [Function: getName]

// >> functions in js
x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log('fun a: ', x);
}
function b() {
    var x = 9;
    console.log('fun b: ', x);
}

// Difference b/w function declarations/function statement vs function expression?
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
var y;
// the typeof operator in javascript is used to determine the data type of a variable or value.
// it returns a string indicating the type of the operand.
console.log(typeof y); // here value will be "undefined"
if (y === undefined) {
    console.log('y is created but undefined');
}
else {
    console.log('y is not defined or not created');
}

// never ever write a = undefined
// var z = undefined; // not a good practice

// >> scope, scope-chain, lexical enviorment
/**
    Scope in javascript directly dependent on the Lexical Environment
    Scope means where we can access any specific function or variable in our code
    *** Wherever an execution context is created, a lexical environment is also created, 
    so, the lexical environment is the local memory along with the lexical environment of its parent(parents and its parents).***
    So lexical is the term which means a hierarchy or in a sequence
    *** Scope-chain is a way of finding the value of the variable by searching the local, 
    or its parent environments lexically.***
*/
function scope() {
    console.log('s1 val: ', s1); // 9, generally, here is "s1" refering to local memory component of scope method
    // if it is not found it looks out it's closest parents enviorment which we call as lexical enviorment
    var s3 = 11;
    scope2(); // hoisting >> trying to access the variable and function before it is intialized
    function scope2() {
        console.log('scope2 s1 val: ', s1); // 9
        console.log('scope2 s3 val: ', s3); // 11
    }
    console.log('s2 val: ', s2);
}
var s1 = 9;
scope();
var s2 = 9;
// console.log(s3); // ReferenceError: s3 is not defined
// s3 variable is not defined because we are trying to access variable outside the function
// scope of s3 variable is defined to scope() methods and it's children methods but not outside of method

// >> let & const, these are hosted in the Temporal Deadzone
// comparison of let and var(global scope) in case of hoisting
/**
    let & const variables are stored in different space, not in global memory or not attached to global object, 
    they are stored in seperate memory space called script block
    *** we can't able to access this seperate memory space (or) 
    cont. this let & const variables declarations can't able to access before we initalize or put some value to them, 
    cont. this is what hoisting in let and const ***
*/
// console.log(l1); // ReferenceError: Cannot access "l1" before initialization, script >> l1: <value unavailable></value>
let l1 = 10; // script >> l1:10 // now the indentifier "l1" points to 10
console.log(l1); // here we can access since we have intialized the variable l1
// we cannot re-declare l1 for let or const identifier
// let l1 = 13; // SyntaxError: Identifier "l1" has already been declared
var l2 = 100;

// const l3; // SyntaxError: Missing Identifier in const declaration
// l3 = 999; // TypeError: Assignment to constant variable.
const l3 = 99; // we have to put some value to const otherwise we will get syntax error

//illegal shadowing
let shadow1 = 1;
{
    // var shadow1 = 2; // illegal shadowing
    let shadow1 = 3; // yes we can
}

// Closures: function along with its lexical scope bundled together forms a closures
// closure = fun + lexical scope
// when we return some function it returns the closure
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
function outer() {
    function inner() {
        console.log('inner func: ', a); // 10
    }
    // var a = 10;
    let a = 10;
    return inner; //closure
}
// 1st paranthesis () is for calling the outer function which in turn returns inner function,
// 2nd paranthesis () is for calling the return function whenever required which basically forms a closure
outer()(); // shortest way
// longest way
// var innerClose = outer();
// innerClose();

function call() {
    let c = 9;
    function clos1(b) {
        function clos2() {
            console.log('2nd inner closure: ', a2, b, c); // 99 hello thiru 9
        }
        // var a2 = 10;
        // let a2 = 10; // if it does not find a2 in local scope then check its lexical scope of its parents and their parents 
        return clos2; // closure is formed and it remembers a2, b, c values if available
    }
    return clos1; // closure
}
let a2 = 99; // if we comment a2, then at, 1_functions.js:187 Uncaught ReferenceError: a2 is not defined 
var innerClos2 = call()('hi thiru');
innerClos2(); // innerClos2 lexical environment, b is 'hi thiru',
// let a2 = 99; // 1_functions.js:187 Uncaught ReferenceError: Cannot access 'a2' before initialization
var innerClos2_2 = call()('how r u');
innerClos2_2(); // lexical environment for innerClos2_2, b is 'how r u'.
// here innerClos2 and innerClos2_2 are both closures. 
// cont. They share the same function body definition, but store different lexical environments. 

// function encapsulation, where count can't be accessed outside the code
// cont. here counter will be available for all the users who is making use of browser and other person can increase the counter
function counter() {
    let count = 0;
    function incrementalCounter() {
        count++;
        console.log('count: ', count);
        return count;
    }
    return incrementalCounter;
}
// console.log(count); // ReferenceError: count is not defined
var countRes = counter();
console.log(countRes()); // 1
console.log(countRes()); // 2

var countRes2 = counter(); // fresh counter itself, it won't touch inital counter
console.log(countRes2()); // 1

// since it is not scable way of incrementing the counter, 
// cont. we make of constructor function Counter for incrementing and decrementing
// cont. so that each user will have his own counter when he opens his browser
function counterConstructor1() {
    let count = 0;
    this.incrementalCounter = () => {
        count++;
        // console.log(count);
        return count;
    }
    this.decrementalCounter = () => {
        count--;
        // console.log(count);
        return count;
    }
}
var counterConstr1 = new counterConstructor1();
console.log('counterConstr1 count: ', counterConstr1.incrementalCounter());
console.log('counterConstr1 count: ', counterConstr1.incrementalCounter());
console.log('counterConstr1 count: ', counterConstr1.decrementalCounter());

class CounterConstructor2 {
    constructor() {
        let count = 0;
        this.incrementalCounter = () => {
            count++;
            // console.log(count);
            return count;
        }
        this.decrementalCounter = () => {
            count--;
            // console.log(count);
            return count;
        }
    }
}
var classCounter = new CounterConstructor2();
console.log('classCounter count: ', classCounter.incrementalCounter());
console.log('classCounter count: ', classCounter.incrementalCounter());
console.log('classCounter count: ', classCounter.decrementalCounter());

// relation between garbage collection and closures
function garbColl() {
    let x = 9;
    let y = 8; // here y variable is smartly garbage collected by V8 js engine which used in chrome or in node.js
    return function innerGarbage() {
        console.log('x val: ', x);
    }
}
var gar1 = garbColl();
gar1();

// >> setTimeout, Closures Q & A
function sC() {
    var i = 100;
    setTimeout(() => {
        console.log(i); // 100
    }, 3000);
    console.log('namastae js');
}
sC();

// print numbers 1,2,3,4,5 for each seconds one after another till it reaches 5 secs
function closureTimeout() {
    // 1st way: here we are using "var i=1; i<6 ; i++", we know var is global scope
    // and all the values of i reference to the same memory
    // for (var i = 0; i < 6; i++) {
    //     let x = i; // so that is why in order to provide the new memory location we are using a variable
    //     setTimeout(() => {
    //         console.log(x);// here arrow functions become a closure, since it takes the reference value of x  
    //     }, x * 1000);
    // }
    // 2nd way:  remeber here we are using "let j=0; j<6; j++" >> let is a block scope
    // cont. remember when we use "let variable" >> it is a block scope that means for each and every loop iteration
    // cont. this "j" will be new variable alltogether, and the arrow function forms a closure withe the new variable itself
    // for (let j = 0; j < 6; j++) {
    //     setTimeout(() => {
    //         console.log(j);// here arrow functions become a closure, since it takes the reference value of x  
    //     }, j * 1000);
    // }
    // 3rd way: using Closures
    for (var k = 0; k < 6; k++) {
        function close1(k) {
            setTimeout(() => {
                console.log(k)
            }, k * 1000);
        }
        close1(k);
    }
}
closureTimeout()

// difference b/w parameters and arguments
// parameters: whenever we put some labels or identifiers inside the parameters we call it as parameter
// here param1 & param2 are local variables in the function scope and we cannot access param1 & param2 outside the function block
var p1 = function xParam(param1, param2) {
    console.log(param1, param2);
}
// Arguments: when we pass some value to the function while invoking it, is known as arguments
p1('hi', 'thiru');

// First Class Functions(fcf):
/**
    Ability to use pass functions as arguments to another function and can return a function from that function,
    cont. is known as first class functions in javascript as well as in many languages also
    sometimes “we call as functions are first class citizens (or) first class functions”
 */
var f1 = function fcf1(param1, param2) {
    console.log(param1, param2);
}
// 1st way passing anonymous function
f1(function () { console.log('passed anonymous fun pass as an argument'); }, 'got it');

// 2nd way of passing anonymous function
function xName() {
    console.log('named fun passed as an argument');
}
f1(xName, 'got it'); // here we have passed named function as an argument

// fcf example2: return a function from the function
let f2 = function fcf2(param1) {
    return function (xParam) { // forms a closure
        return `hey ${param1}, got ${xParam}`;
    }
}
let f2res = f2('thiru');
console.log(f2res); // retruns an anonymous function
// Even though param1 is not used, it's still in scope for the retruned function >> this is what closures enable.
console.log(f2res('some value here'));

// >> callbacks
setTimeout(() => {
    console.log('timer');
}, 3000);

// here param can be a variable (or) anonymous function (or) another function
function cb1(funParam) {
    console.log('x callback1');
    funParam();
}
// here yCB() is called as an argument to another function
cb1(function yCB() {
    console.log('y callback2');
});

// Event Listeners
// here xyz is the callback function which will be executed in callstack upon user clicks the button
// incrementing the counter using the global variable is not a good solution
// The "ReferenceError: document is not defined" error in Javascript is a common issue that occurs when trying to access the document object outside the browser enviorment such as in Node.js.
// This error can also occur if the script is executed before the HTML document is fully loaded.
// let eventCounter = 0;
// document.getElementById('clickMe').addEventListener('click', function xyz() {
//     console.log('button clicked: ', ++eventCounter);
// });

// so we now make use of closure along with the eventListeners to make sure the count is secured
// so that it will not modified by any other operation inside the clode
// remember we use closure for data hiding
function attachEventListeners(params) {
    let eventCounter2 = 0;
    document.getElementById('clickEventClosure').addEventListener('click', function xyz() {
        console.log('clickEventClosure button clicked: ', ++eventCounter2);
    });
};
// attachEventListeners(1);
/** Explanation:
1. Function Declaration: attachEventListeners()
A function is defined which will set up a click event listener on an HTML element (probably a button) with the id="clickEventClosure".

2. let eventCounter2 = 0;
This is a local variable declared inside attachEventListeners.
It keeps track of how many times the button has been clicked.
The key thing here: eventCounter2 is not global, so it cannot be accessed or modified directly from outside.

3. Adding an Event Listener
We’re attaching an event listener to the button.
Every time the button is clicked, the anonymous function xyz is triggered.
Inside xyz, the eventCounter2 variable is incremented and logged.

4. Closure in Action
The inner function xyz is a closure.
Even after the attachEventListeners() function finishes executing, the inner function retains access to the variable eventCounter2 because of the closure.
This means the variable is "closed over" by the function and remains in memory for as long as the event listener exists.

Why Use Closures Here?
Persistent State:
eventCounter2 is preserved across multiple clicks.
If it weren’t in a closure, you'd either use a global variable (which is unsafe) or risk losing state.

Encapsulation:
Only the click handler has access to eventCounter2.

Memory Efficiency:
The variable lives as long as the DOM element and its listener live.
*/




