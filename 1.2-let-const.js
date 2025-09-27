// >> let & const, these are hosted in the Temporal Deadzone
// comparison of let and var(global scope) in case of hoisting
/**
    let & const variables are stored in different space, not in global memory or not attached to global object, 
    they are stored in seperate memory space called script block
    *** we can't able to access this seperate memory space (or) 
    cont. this let & const variables declarations can't able to access before we initalize or put some value to them, 
    cont. this is what hoisting in let and const ***
*/
// console.log(a); // ReferenceError: Cannot access "a" before initialization, script >> a: <value unavailable></value>
let a = 10; // script >> a:10 // now the indentifier "a" points to 10, now we can get a value.
// let a = 13; // SyntaxError: Identifier "a" has already been declared, cannot re-declare let/const identifier
var b = 100;

// const c; // SyntaxError: Missing Identifier in const declaration
const c = 99; // we have to put some value to const otherwise we will get syntax error
// c = 100; // TypeError: Assignment to constant variable. we can't re-assign value to const variable