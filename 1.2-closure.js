// we are creating a function statement "x"
function x() {
    // let a = 9; // work out on this case
    var a = 9;
    // A closure basically means a function bind together along with its lexical enviorment or lexical scope is knows as closure
    function y() {
        console.log(a); // 9
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
    return y();
}
const res1 = x();
console.log("res1: ", res1);

// we can pass a fun as an arg while call
// x(function z() {
//     console.log("hi there");
// });

// passing a fun as an argument while calling a fun and similarly we can return a function from function
function x2() {
    let a2 = 9;
    function y2() {
        console.log("a2: ", a2); // 100, basically it points to the reference of the varaible but not the value
        return a2;
    }
    a2 = 100;
    return y2; // here when we return y2 right, not just that function code returned but the closure was returned, which means lexical scope of y2
    // in another way it returns function along with lexical scope
    // return function y2(){} // shortcut
}
let z2 = x2();
// console.log("z2: ", z2); // z2:  [Function: y2]
// once x2() function is called, gets executed and return somevalue, now at this moment callstack removes x2(),
// x2 execution context is no longer available in the callstack, x2 is gone, what will happen to this a2 let variable?
// when we call the z2 function after writing 1000's of line, i want to call this z2() which holds returned y2() fun and it's lexical scope
// so here comes closure into picture, functions are so beautiful that when they return from another function, they still remember or maintains there lexical scope
const res2 = z2();
console.log("res2: ", res2); // 100

function z3() {
    let z3 = 1000;
    function x3() {
        var a3 = 9;
        // Returning a function that closes over a3 and z3
        return function y3() {
            console.log("a3, z3: ", a3, z3);
            return a3 + z3;
        }
    }
    return x3(); // here we are calling and Return the closure from x3
};
// let r3 = z3(); // r3 is assigned the closure function which retruns y3 function
// let res3 =  r3(); // Invokes y3, logs: a3, z3: 9 1000, return the result of y3
// console.log("res3: ", res3);
const res3 = z3()();
console.log("res3: ", res3); // short way of calling the function, and calling once again the retuned function
