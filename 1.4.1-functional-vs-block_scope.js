// 1. Function Scope: Variables declared with var are function-scoped.
// That means they are visible throughout the entire function where they are declared — not just inside a block ({}).
function test1() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 — accessible outside the block
}
test1();
// ➡️ x is accessible outside the if block because var has function scope.

/** 2. Block Scope: Variables declared with let or const are block-scoped.
    In JavaScript, block scope means that variables declared inside a block ({ ... }) are only accessible within that block.
    explanation: we know once javascript executes this block and when control comes out of the block, 
    cont. these let and const are no longer accessible, we can't access these let and const outside the block, 
    cont. that is known as let & const are in block-scoped
 */
// 👉 A block is any code wrapped in curly braces — for example, in if, for, while, or {} directly.
// Example 1: Basic block scope
{
  let a = 10;
  const b = 20;
  var c = 30; // function or global scoped
}

// ✅ a and b are block-scoped, so they only exist inside {}.
// ❌ c is declared with var, so it is not block-scoped — it leaks out.
console.log(c); // ✅ 30 (accessible)
console.log(a); // ❌ ReferenceError: a is not defined
console.log(b); // ❌ ReferenceError: b is not defined

// Example 2: Inside an if block
if (true) {
  let message = "Hello block scope!";
  console.log(message); // ✅ Works here
}
console.log(message); // ❌ ReferenceError

// Example 3: Inside a for loop
// Each iteration creates a new block scope for i, so it doesn’t exist outside the loop.
// If you used var i = 0, it would be accessible outside the loop.
for (let i = 0; i < 3; i++) {
  console.log("Inside loop:", i);
}
console.log("Outside loop:", i); // ❌ ReferenceError

// Example 4: Nested block scopes
// Inner blocks can access variables from outer blocks, but not the other way around.
{
  let outer = "Outside block";
  {
    let inner = "Inside block";
    console.log(outer); // ✅ Accessible
    console.log(inner); // ✅ Accessible
  }
  console.log(inner); // ❌ ReferenceError
}


// Example 5: Block scope inside a function
function test2() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ReferenceError: y is not defined
  console.log(z); // ❌ ReferenceError: z is not defined
}
test2();
// ➡️ y and z are not accessible outside the block, because they are block-scoped.

// ✅ In one line:
// Function scope applies to var, visible throughout a function.
// Block scope applies to let and const, visible only inside the { } block where defined.