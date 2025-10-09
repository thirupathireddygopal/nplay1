// >> scope, scope-chain, lexical enviorment
/**
    Scope in javascript directly dependent on the Lexical Environment
    the term "Scope" indicates the capability of accessing any specific function or variable in our code
    *** Wherever an execution context is created, a lexical environment is also created, 
    so, the lexical environment is the local memory along with the lexical environment of its parent(parents and its parents).***
    So lexical is the term which means a hierarchy or in a sequence
    *** Scope-chain is a way of finding the value of the variable by searching the local, 
    or its parent environments lexically.***
*/
function x() {
    console.log('a val: ', a); // 9, generally, here is "a" refering to local memory component of scope method
    // if it is not found it looks out it's closest parents enviorment which we call as lexical enviorment
    var c = 11;
    y(); // hoisting >> trying to access the variable and function before it is intialized
    function y() {
        console.log('y a val: ', a); // 9
        console.log('y c val: ', c); // 11
    }
    console.log('b val: ', b); // undefined, hoisted
}
var a = 9;
x();
var b = 9; // if it is not there: we will get Uncaught ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined, because we are trying to access variable outside the function
// scope of c variable is defined to x() methods and it's children methods but not outside of method
