// To extract the name property from the emp object using object destructuring without using dot (.) notation
// you can use destructuring directly like this:
const name = "Thiru";
const emp = {
    name: 'Dheerendra',
    age: 30
}
/**
 * ⚠️ Note: In your code, there's also a const name = "Thiru"; already declared. 
 * If you try to destructure name again, you'll get a conflict:
 */
// here we can get "age" since it is not declared outside but not name
// const { name, age } = emp; // ❌ SyntaxError: Identifier 'name' has already been declared
// ✅ To avoid this conflict, you can use aliasing:
const { name: empName } = emp;
console.log(empName); // Output: "Dheerendra"

// ==========================================
const words = ["apple", "banana", "apricot", "apple", "blueberry", "banana", "avocado"];
// result >> [{ fruit: 'apple', count: 2 },{ fruit: 'banana', count: 2 },{ fruit: 'apricot', count: 1 },{ fruit: 'blueberry', count: 1 },{ fruit: 'avocado', count: 1 }]
// reduce method for converting into >> { apple: 2, banana: 2, apricot: 1, blueberry: 1, avocado: 1 }
/**
 * Calls the specified callback function for all the elements in an array. 
 * cont. The return value of the callback function is the accumulated result, 
 * cont. and is provided as an argument in the next call to the callback function.
@param callbackfn — A function that accepts up to four arguments. 
cont. The reduce method calls the callbackfn function one time for each element in the array.
@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. 
cont. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
// let intial value is empty object {}
// previousVal >> accumulator
// currentVal >> item
// reduce() >> Best for counting, object creation, array creation etc
const reduceResult = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1; // intial value of acc[word] is "undefined"
    return acc;
}, {});
console.log(reduceResult); // { apple: 2, banana: 2, apricot: 1, blueberry: 1, avocado: 1 }

/** Object.entries() turns that into an array of [key, value] pairs. here key will be string type
    const result = Object.entries(reduceResult); // ArrayLike<any>): [string, any][], 
    console.log(result); // [['apple', 2], ['banana', 2], ['apricot', 1],['blueberry', 1],['avocado', 1]]
 */
const finRes = Object.entries(reduceResult)
    .map(([key, value], index) => {
        return { fruit: key, count: value, index: index }
    })
    .sort((a, b) => {
        return a.fruit.localeCompare(b.fruit)
    });
console.log(finRes);
/** ✅ Using Set with filter (not recommended for performance, but educational):
    const words = ["apple", "banana", "apricot", "apple", "blueberry", "banana", "avocado"];
    const uniqueFruits = [...new Set(words)];
    const result = uniqueFruits.map(fruit => ({
    fruit,
    count: words.filter(w => w === fruit).length
    }));
    console.log(result);
 */
// retuns object with unique elements
console.log(new Set(words)); // Set(5) { 'apple', 'banana', 'apricot', 'blueberry', 'avocado' }
// object converts to an array
console.log([...new Set(words)]) // [ 'apple', 'banana', 'apricot', 'blueberry', 'avocado' ]
//======================================
// Using Arithmetic (+ and -)
let a = 5;
let b = 3;
a = a + b; // a = 8
b = a - b; // b = 5
a = a - b; // a = 3
console.log("a =", a); // 3
console.log("b =", b); // 5

// Using Bitwise XOR (^)
/**
    XOR stands for "exclusive OR". It compares two bits and returns:
    1 if the bits are different
    0 if the bits are the same
    | A | B | A ^ B |
    | - | - | ----- |
    | 0 | 0 | 0     |
    | 0 | 1 | 1     |
    | 1 | 0 | 1     |
    | 1 | 1 | 0     |
 */
let a1 = 5; // binary: 0101
let b1 = 3; // binary: 0011

a1 = a1 ^ b1; // Step 1: a1 = 0101 ^ 0011 = 0110 (6)
b1 = a1 ^ b1; // Step 2: b1 = 0110 ^ 0011 = 0101 (5)
a1 = a1 ^ b1; // Step 3: a1 = 0110 ^ 0101 = 0011 (3)

console.log("a1 =", a1); // 3
console.log("b1 =", b1); // 5
// =====================================
let nestedObj = {
    name: "thiru",
    country: {
        state: "TS",
        district: {
            mandal: {
                village: "nizampur"
            }
        }
    }
};
function extractValues(obj) {
    let result = [];
    function recurse(currentObj) {
        if (typeof currentObj === "object" && currentObj !== null) {
            for (let key in currentObj) {
                recurse(currentObj[key]); // pushing the key, it may be an object or a value of the key
            }
        } else {
            result.push(currentObj);
        }
    }
    recurse(obj);
    return result;
}
console.log(extractValues(nestedObj)); // ["thiru", "TS", "nizampur"]

// we can use a stack or queue-based iterative approach to traverse the nested object. 
// cont. Here's the full code using a stack to extract only the string values from nested objects:
function extractValues2(obj) {
    let result = [];
    let stack = [obj];  // initialize with the root object, converted into an array
    console.log(stack); // [ { name: 'thiru', country: { state: 'TS', district: [Object] } } ]
    while (stack.length > 0) {
        let current = stack.pop();  // get the last inserted object
        let keys = Object.keys(current);
        for (let i = 0; i < keys.length; i++) {
            let value = current[keys[i]];
            if (typeof value === "object" && value !== null) {
                stack.push(value); // push nested object to the stack
            } else {
                result.push(value); // collect primitive value
            }
        }
    }
    return result;
}
console.log(extractValues2(nestedObj)); // ["thiru", "TS", "nizampur"]
//=====================================
function varTest() {
    var x = 1;
    {
        var x = 2;  // same variable!
        console.log('var in: ' + x);  // 2
    }
    console.log('var out: ' + x);  // 2
}
varTest();

function letTest() {
    let x = 1;
    {
        let x = 2;  // different variable
        console.log('let in: ' + x);  // 2, if inner x commented then it is 1
    }
    console.log('let out:' + x);  // 1
}
letTest();

