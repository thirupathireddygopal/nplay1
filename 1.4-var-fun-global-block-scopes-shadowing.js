//1. Variable Scope: Determines where a variable can be accessed
function test() {
  let x = 10; // block-scoped variable
  console.log(x); // ✅ accessible here
}
// console.log(x); // ❌ ReferenceError — x is not defined outside

//2. Function Scope: Determines where a function can be accessed or called.
function outer() {
  function inner() {
    console.log("Hello from inner");
  }
  inner(); // ✅ works inside outer
}
outer();
// inner(); // ❌ ReferenceError — inner is not accessible outside outer
// So just like variables, functions declared inside another function have local (function) scope.

//3. Global Scope: If declared "outside any block or function", both variables and functions become globally scoped.
let b = 5;
function greet() {
  console.log("Hello");
}
console.log(b); // ✅
greet();        // ✅

//4. Block Scope: Applies to let and const (not to var or function declarations).
{
  let x = 1;
  function sayHi() {
    console.log("Hi");
  }
}
// console.log(x);     // ❌ ReferenceError
sayHi();            // ✅ Works in most browsers — BUT discouraged
/** As we know once javascript executes this block right and when control comes out of the block, 
    these let and const are no longer accessible, we can't access these let and const outside the block, 
    that is known as let & const are in block-scoped
 */
// Example:
// var a = 5
// let b = 100
// {
//     var a = 10; // global scope
//     let b = 23; // block-scope
//     const c = 20; // block-scope
//     console.log(a); // 10
//     console.log(b); // 23
//     console.log(c); // 20
// };
// console.log(a); //10, points to same memory ← since this "a" shadows the value which is defined outside the block and modified the value, why because these are pointing to a same memory location
// console.log(c); // ReferenceError: c is not defined
// console.log(b); // 100, since “b” is block scope since it defined by let and here "b" is shadowing in the block scope and it will be the value of block itself, 
// cont. outside the block b is stored in script memory location, so there are script and block memory for let and const variables when defined with same name variables


// >> 2nd example:
// illegal shadowing: we cannot shadow let using var that’s we call as illegal shadowing
// Remember if any variable is shadowing something it should not cross the boundary of its scope, 
// if it crosses we call it as illegal shadowing, in a particular scope "a" let variable cannot be redeclared right

// var-->let(shadowing possible), let-->var(shadowing not-possible/illegal shadowing)-->throws error
let a = 3; // script scope
{
    // var a = 2; // illegal shadowing
    let a = 10; // block scope, yes we can create a new block scope varibale
    {
        let a = 20; // block scope
        console.log(a); // 20
    }
    console.log(a); // 10
}
console.log(a); // 3

// Shadowing is not only limited to block but also for function it behaves similar
const s = 9;
function x() {
    const s = 3;
    console.log(s); // 3
}
x();
console.log(s); // 9
