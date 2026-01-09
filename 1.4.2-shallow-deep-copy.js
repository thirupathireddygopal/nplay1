/** Shallow Copy: A shallow copy creates a new object, but nested objects still reference the same memory.
    ✔️ Top-level values → copied
    ❌ Nested objects/arrays → shared reference
    Why it matters?
    If you modify a nested object in the copied version, the original also changes.
*/
// Shallow Copy Examples
// ex1. Using spread operator (...)
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
console.log(shallowCopy); // { a: 1, b: { c: 2 } }
shallowCopy.b.c = 100;
console.log(original.b.c); // 100 (changes original!)

// ex2. Using Object.assign()
const shallowCopy2 = Object.assign({}, original);

// ex3. Shallow copy for arrays
const arrOriginal = [1, 2, { a: 3 }];
const arrShallowCopy = [...arrOriginal];
arrShallowCopy[2].a = 300;
console.log(arrOriginal[2].a); // 300 (changes original!)

/** Deep Copy: A deep copy creates a completely independent copy of the object, including all nested objects.
    ✔️ No shared references
    ✔️ Changing deep copy does NOT affect original
*/
// Deep Copy Examples
// ex1. Using JSON methods (only works for JSON-safe objects)
const original2 = { a: 1, b: { c: 100 } };
const deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.b.c = 200;
console.log(original2.b.c); // 100 (original remains unchanged)

// ex2. Using structuredClone (modern browsers and Node.js)
const deepCopy2 = structuredClone(original2);
deepCopy2.b.c = 300;
console.log(original2.b.c); // 100 (original remains unchanged)
