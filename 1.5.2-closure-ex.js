// case1: Normal function: calling "x" function and returning value 
function x() {
    let a = 91;
    // A closure basically means a function bind together along with its lexical enviorment or lexical scope is knows as closure
    function y() {
        console.log("returned y value:", a); // 91
        // inside y fun, it forms a closure with the variables which were part of x fun lexical scope
        // cont. basically an inner function using the variables of outer function which we call as closure
        return a;
    }
    // y(); // <-- just calling the function, not returning back
    // assigning fun to a variable
    let b = function z() {
        console.log(a);
    }
    console.log(b); // it returns the total copy of function
    return y(); // retuning value
}
const res1 = x();
console.log("res1: ", res1); // 91

// we can pass a "function as an argument" while calling a function 
// x(function z() {
//     console.log("hi there");
// });

// case 2: closure: we are creating a function statement "x2" and returning the total-function "y2" block
// we already know we can pass a function as an argument while calling a function, similarly we can return function from a function
function x2() {
    let a2 = 9;
    function y2(p1) {
        console.log("a2: ", a2); // 100, basically it points to the reference of the varaible but not the value
        return a2 + p1;
    }
    a2 = 100;
    return y2; // here when we return y2 right, not just that function code returned but the closure was returned, which means lexical scope of y2
    // in another way it returns function along with lexical scope
    // return function y2(){} // shortcut
}
let res2 = x2();
// console.log("res2: ", res2); // res2:  [Function: y2]
// once x2() function is called, gets executed and return somevalue, now at this moment callstack removes x2(),
// x2 execution context is no longer available in the callstack, x2 is gone, what will happen to this a2 let variable?
// when we call the res2 function after writing 1000's of line, i want to call this res2() which holds returned y2() fun and it's lexical scope
// so here comes closure into picture, functions are so beautiful that when they return from another function, they still remember or maintains there lexical scope
const finalRes2 = res2(9);
console.log("finalRes2: ", finalRes2); // 109

function a(p) {
    let a = 1000;
    function b(p) {
        var b = 9;
        // Returning a function that closes over b and a
        return function c() {
            console.log("a, b, p: ", a, b, p);
            return a + b + p;
        }
    }
    return b(p); // here we are calling and Return the closure "c" from "b" 
};
// let r3 = a(9); // r3 is assigned the closure function which retruns c function
// let res3 =  r3(); // Invokes c, logs(a, b, p:  1000 9 9), returns result of c
// console.log("res3: ", res3);
const res3 = a(9)();
console.log("res3: ", res3); // short way of calling the function, and calling once again the retuned function
