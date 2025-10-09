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

// 2. Block Scope: Variables declared with let or const are block-scoped.
// They are only accessible within the nearest set of curly braces { } where they are defined.
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