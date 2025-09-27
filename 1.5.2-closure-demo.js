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
    let v3 = 9;
    function clos1(v2) {
        function clos2() {
            console.log('2nd inner closure: ', v1, v2, v3); // 99 hello thiru 9
        }
        // var v1 = 10;
        // let v1 = 10; // if it does not find v1 in local scope then check its lexical scope of its parents and their parents 
        return clos2; // closure is formed and it remembers v1, v2, v3 values if available
    }
    return clos1; // closure
}
let v1 = 99; // if we comment v1, then at, Uncaught ReferenceError: v1 is not defined at clos2 (1.5.2-closure-demo.js:24:48) 
var innerClos2 = call()('hi thiru'); // v2 is 'hi thiru'
innerClos2();
var innerClos2_2 = call()('how r u');
innerClos2_2();
// let v1 = 99; // Uncaught ReferenceError: Cannot access 'v1' before initialization at clos2 (1.5.2-closure-demo.js:24:48)
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

// difference between parameters and arguments
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




