/**
    A pure function is a concept from functional programming. 
    It refers to a function that always behaves predictably 
    Pure function:
    Output depends only on input.
    No side effects (no logging, no DB write, no file change, etc.).

    Impure function:
    Causes side effects (logging, updating a variable outside the function, making API calls, etc.).
    Harder to test and reason about.
 */
// ✅ Characteristics of Pure Functions:
// 1) Deterministic: Always returns the same output for the same input.
function square(x) {
  return x * x;
}
square(4); // Always returns 16

// 2) No Side Effects: Does not modify external variables, files, databases, DOM, or logs to console.
// cont. It does not depend on or modify anything outside its scope.

// ❌ Not pure (side effect: logging to console)
function greet(name) {
  console.log("Hello " + name);
}

// ✅ Pure version
function greet(name) {
  return "Hello " + name;
}

//✅ Why Use Pure Functions? 
// Easier to test, More predictable, Easier to debug, Better for parallel and concurrent programming

// ❌ Examples of Impure Functions:
// 1) Modifying external state:
let count = 0;
function increment() {
  count++;
  return count;
}
console.log(increment());
console.log(increment());
console.log(increment());

// 2) Relying on random or current time:
function getRandomNumber() {
  return Math.random(); // Impure: output changes every time
}
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());

