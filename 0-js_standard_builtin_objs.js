console.clear();
// console.log(7); // 7
// javascript built in objects >> Set, Map, Array, Math

// 1) Set: add, has, delete 
// The Set object lets you store unique values of any type, whether primitive values or object references.
const mySet1 = new Set();
mySet1.add(1);
mySet1.add(1);
mySet1.add(5);
mySet1.add('some text');
mySet1.add([1, 2, 3]);
mySet1.add({ a: 1, b: 2 });
console.log(mySet1); // Set(5) { 1, 5, 'some text', [ 1, 2, 3 ], { a: 1, b: 2 } }
console.log(mySet1.has(1)); // true
console.log(mySet1.has(2)); // false
console.log(mySet1.has(Math.sqrt(25))); // true
console.log(mySet1.size); // 5
console.log('checking string: ' + mySet1.has('Some Text'.toLowerCase())) // true
mySet1.delete(1); // Set(4) { 5, 'some text', [ 1, 2, 3 ], { a: 1, b: 2 } }
console.log(mySet1);
// for loop to get set values
for (const item of mySet1) {
  console.log(item) // logs >> 5, some text, [ 1, 2, 3 ], { a: 1, b: 2 }
}

// 2) Map: set, get, has, size, keys(), values() 
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
let myMap1 = new Map();
myMap1.set('a', 1);
myMap1.set('b', 'thiru');
myMap1.set('c', 'gopal');
myMap1.set('d', [1, 2, 3]);
console.log(myMap1.get('a')); // 1
console.log(myMap1.has('a')); // true
console.log(myMap1.size); // 4
myMap1.set('a', 9);
console.log("myMap1:-----");
console.log(myMap1); // Map(4) { 'a' => 9, 'b' => 'thiru', 'c' => 'gopal', 'd' => [ 1, 2, 3 ] }

// 1) FOR-OF:loop over arrays: myMap1.keys(), myMap1.values(), const [key, value] of myMap1
// for-of does not work with objects because they are not iterable
const arrforof1 = ['a', 'b', 'c'];
for (const element of arrforof1) {
  console.log(element);
}
for (const key of myMap1.keys()) {
  console.log(`key: ${key}`);
}
for (const value of myMap1.values()) {
  console.log(`val: ${value}`);
}
for (const [key, value] of myMap1) {
  console.log(`key: ${key}, val: ${value}`);
  // iterate over objects key value pairs >> [key, value]
}

const object = {
  a: "some string",
  b: 42,
};

for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}
// Expected output:
// "a: some string"
// "b: 42"

// 2) FOR-IN: obj[key], arr[index]
// for-in works with objects and arrays
var objkv = { a: 1, b: 2, c: 3 };
for (const key in objkv) {
  console.log(`key: ${key}, value: ${objkv[key]}`);
}
const numArr = [1, 3, 5, 7, 9];
for (const index in numArr) {
  console.log(numArr[index]);
}

// 3) FOR-EACH: myMap1.forEach((value, key)
// forEach method executes the given function on every elements from an array
myMap1.forEach((value, key) => {
  console.log(`key: ${key}, val: ${value}`);
});


// 3) Array =================
// array static methods
// Creates a new Array instance from an array-like object or iterable object.
// >> array from a string
const arr1 = Array.from('thiru');
console.log(arr1); // [ 't', 'h', 'i', 'r', 'u' ]

// >> array from a set
const arr2 = Array.from(mySet1);
console.log(arr2); // [ 5, 'some text', [ 1, 2, 3 ], { a: 1, b: 2 } ]

// >> array from a map
const arr3 = Array.from(myMap1);
console.log(arr3);
// [
//   [ 'a', 1 ],
//   [ 'b', 'thiru' ],
//   [ 'c', 'gopal' ],
//   [ 'd', [ 1, 2, 3 ] ]
// ]

// The Array.isArray() method determines whether the passed value is an Array. Returns true if the argument is an array, or false otherwise.
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({ foo: 123 })); // false
console.log(Array.isArray('foobar'));   // false
console.log(Array.isArray(undefined));  // false

// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(1));         // [1]
console.log(Array.of(1, 2, 3));   // [1, 2, 3]
console.log(Array.of(undefined)); // [undefined]

// array instance property >> length
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);

// Array Instance Methods: .filter(), .map(), .forEach(), .reduce(), .join(), .concat(), .includes()
// .filter(): The filter() method creates a new array with all elements that pass the test implemented by the function.
// ex1
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // Array ["exuberant", "destruction", "present"]

// ex2
const arr_f1 = [1, 2, 3, 4, 5, 6];
const fres1 = arr_f1.filter(even);
// using callbackfunction
function even(item) {
  // if (item % 2 === 0) {
  //   return item;
  // }
  return item % 2 === 0;
}
console.log('fres1: ' + fres1);

//ex3
const arr_filter3 = [
  { name: 'thiru', age: 16 },
  { name: 'kavya', age: 18 },
  { name: 'ravi', age: 24 },
  { name: 'praveen', age: 2 }
];
const voteAge = arr_filter3.filter(item => item.age >= 18);
console.log(voteAge); // [ { name: 'kavya', age: 18 }, { name: 'ravi', age: 24 } ]

/** .map(): The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    [1, 2, 3, 4] >> [ 2, 4, 6, 8 ] >> item*2
    ['1', '2', '3'] >> [ 1, 2, 3 ] >> parseInt(item)
    ['a', 'b', 'c'] >> [ 97, 98, 99 ] >> str.charCodeAt("a")
*/
const arr_map = [1, 2, 3, 4];
const m1 = arr_map.map(x => x * 2); // pass a function to map
console.log(m1); // [2, 8, 18, 32]

const arr_map2 = ['1', '2', '3'];
const m2 = arr_map2.map(item => parseInt(item));
console.log(m2); // [ 1, 2, 3 ]

const arr_letters = ['a', 'b', 'c'];
const m3 = arr_letters.map(item => {
  let str = '' + item; // convert to string type
  return str.charCodeAt(0)
});
console.log(m3); //[ 97, 98, 99 ]

// use case1: update some variable(sum) outside the function
// .forEach(): forEach method executes the given function on every elements from an array 
const numbersForEach = [1, 3, 5, 7, 9];
let sum = 0;
numbersForEach.forEach((item, index, arr) => {
  // console.log(arr)
  sum += item;
  console.log(`item: ${item} , index: ${index}`);
});
console.log(sum); // 25
/** prints
    item: 1 , index: 0
    item: 3 , index: 1
    item: 5 , index: 2
    item: 7 , index: 3
    item: 9 , index: 4
 */
// use case2: updating empty obj with { a: 3, b: 1, c: 2 }
// using forEach, we can build a new obj from the given array of numbers or letters or objects..,etc
const lettersForeach = ['a', 'b', 'a', 'c', 'a', 'c'];
let count = {}; // initial empty obj
lettersForeach.forEach(item => {
  // if we have property inside the object then we are increatmenting value by 1
  if (count[item]) {
    // count[item] += 1;
    count[item]++
  }
  else {
    // console.log('count[item]: ' + count[item]); // undefined
    count[item] = 1; // we are initialising item by value 1
    // console.log(item);
    // console.log('count[item]: ' + count[item]);
  }
});
console.log(count); // { a: 3, b: 1, c: 2 }

// .reduce()
const arr_red = [
  { name: 'thiru', age: 3 },
  { name: 'kavya', age: 2 },
  { name: 'ravi', age: 4 },
  { name: 'praveen', age: 2 }
];
const reduce_total = arr_red.reduce((currentTotal, item) => {
  // console.log('currentTotal: ' + currentTotal);
  return currentTotal + item.age;
}, 5); // initial val = num / {} / [] / anything
// 5 is the intial value which we are providing for the currentTotal
console.log('reduce_total: ' + reduce_total); // 16

/** 🔁 filter() vs reduce()
| Feature         | `filter()`                            | `reduce()`                                 |
| --------------- | ------------------------------------- | ------------------------------------------ |
| **Purpose**     | Filters elements based on a condition | Reduces an array to a single value         |
| **Return type** | A new array (subset of original)      | Any value (number, object, array, etc.)    |
| **Callback**    | Should return `true` or `false`       | Should return the accumulator              |
| **Used for**    | Keeping some items                    | Transforming the array into something else |

🧠 When to Use What?
| Scenario                                  | Use      |
| ----------------------------------------- | -------- |
| Need to remove unwanted items             | `filter` |
| Need a single result (sum, object, etc.)  | `reduce` |
| Count how many of something exists        | `reduce` |
| Extract certain items by condition        | `filter` |
| Group items into categories               | `reduce` |
| Combine all values to one (e.g., flatten) | `reduce` |
 */

// .join()
const arr_join = ['Fire', 'Air', 'Water'];
console.log(arr_join.join('-')); // "Fire-Air-Water"

// .concat()
const array_1 = ['a', 'b', 'c'];
const array_2 = ['d', 'e', 'f'];
const array_3 = array_1.concat(array_2);
console.log(array_3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// .includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.includes('at')); // false

const animals = ['lion', 'cheetah', 'giraffe', 'elephant'];
animals.pop();
animals.push('cows');

// Extracts a section of the calling array and returns a new array.
console.log(animals.slice(2, 3)); // [ 'giraffe' ]
console.log(animals.sort()); // default: Ascending order: [ 'cheetah', 'cows', 'giraffe', 'lion' ]
animals.splice(2, 0, 'deer', 'kangaro');
console.log(animals); // [ 'cheetah', 'cows', 'deer', 'kangaro', 'giraffe', 'lion' ]

console.log(animals.shift()); //cheetah, Removes the first element from an array and returns that element.
console.log(animals.unshift('bear', 'rabbit')); // Adds elements at the beginning of the array.
const rev_animals = animals.reverse();
console.log(rev_animals);

// .indexOf(): The indexOf() method returns the first index at which a given element can be found in the array, 
// cont. or -1 if it is not present.
console.log(animals.indexOf('tiger')); // expected output: 1

// Remove duplicate element from array 
// 1) using for, empty arr[], indexOf condition check
let a1Arr = [1, 3, 5, 2, 4, 3, 5];
let b1Arr = [];
for (let i = 0; i <= a1Arr.length; i++) {
  if (b1Arr.indexOf(a1Arr[i]) === -1) {
    b1Arr.push(a1Arr[i]);
  }
}
console.log('b1Arr: ' + b1Arr); //b1Arr: 1,3,5,2,4,

// 2) using SORT, TEMP and FOR loop
let a2Arr = [1, 3, 5, 3, 2, 4, 3, 5];
let b2Arr = [];
let temp;
console.log(temp); // undefined
// a2Arr.sort();
for (let i = 0; i < a2Arr.length; i++) {
  if (a2Arr[i] !== temp) {
    b2Arr.push(a2Arr[i]);
    temp = a2Arr[i]
  }
}
console.log(temp); // 5
console.log('b2Arr: ' + b2Arr); // b2Arr: 1,2,3,4,5

//3) using for-of (iterables) and obj
// assigning the true value for the element
// very fast
let a3Arr = [1, 3, 5, 2, 4, 3, 5];
let obj = {};
for (const i of a3Arr) {
  obj[i] = true;
}
console.log(obj); // { '1': true, '2': true, '3': true, '4': true, '5': true }
let b3Arr = Object.keys(obj);
console.log('b3Arr: ' + b3Arr) // b3Arr: 1,2,3,4,5

//4) in one line using set >>  it takes unique values
let a4Arr = [1, 3, 5, 2, 4, 3, 5];
let bSet = new Set(a4Arr); // Set(5) { 1, 3, 5, 2, 4 }
let b4Arr = Array.from(bSet); // [ 1, 3, 5, 2, 4 ]
// in a shortest way
console.log([... new Set(a4Arr)]);

// Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.
// .find() >>  gives item when item is validated
// The find() method returns the first element in the provided array that satisfies the provided testing function.
// cont. If no values satisfy the testing function, undefined is returned.
const array_find = [5, 12, 8, 130, 44];
const found = array_find.find(element => element > 10);
console.log(found); // 12

// .findIndex() >>  gives index of item validated
const array_find_in = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13; // returns boolean true or false
console.log(array_find_in.findIndex(isLargeNumber)); // 3

// .every() >> check weather condition is true
const array_ev = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array_ev.every(isBelowThreshold)); // expected output: true

// 4) Math ======================
// pi value
console.log(`PI value: ${Math.PI}`);

// abosolute value: conver -ve to +ve integers along with the same decimal digits
console.log(Math.abs(1.3), Math.abs(1.6), Math.abs(0), Math.abs(-1.399), Math.abs(-1.6)); //1.3, 1.6, 0, 1.399, 1.6

// Math.random() >> floating value from 0 to 1 excluding
console.log(`Math.random(): ${Math.random()}`); // 0.18180901283416584 return a value b/w 0,1

// Math.sqrt()
console.log(Math.sqrt(16), Math.sqrt(-9)); // 4, NaN

// rounding numbers
// ceil: greater
console.log(Math.ceil(5.3), Math.ceil(5.6), Math.ceil(-5.3), Math.ceil(-5.6)) // 6, 6, -5, -5

// floor: lower
console.log(Math.floor(5.3), Math.floor(5.6), Math.floor(-5.3), Math.floor(-5.6)) // 5, 5, -6, -6

// round
console.log(Math.round(5.3), Math.round(5.5), Math.round(-5.3), Math.round(-5.5), Math.round(-5.6)) // 5, 6, -5, -5, -6

// largest and smallest number
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1

// Power(x,y)= base x, power y
console.log(Math.pow(3, 2)); // 9

const date1 = Date.now().valueOf();
console.log(`new date: ${date1}`);

const date2 = new Date(Date.UTC(2021, 4, 10, 11, 25, 35));
console.log(date2.getTime() / 1000);
console.log("----------------------------------------------------")


// not so important =======
// .fill()
// const array_fill = [1, 2, 3, 4];
// // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4)); // expected output: [1, 2, 0, 0]
// // fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // expected output: [1, 5, 5, 5]
// console.log(array1.fill(6));
// // expected output: [6, 6, 6, 6]

// // .copyWithin()
// const arraycp1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arraycp1.copyWithin(0, 3, 4)); // copy to index 0 the element at index 3
// // expected output: Array ["d", "b", "c", "d", "e"]
// console.log(arraycp1.copyWithin(1, 3)); // copy to index 1 all elements from index 3 to the end
// // expected output: Array ["d", "d", "e", "d", "e"]

// we can also find the maximum or minimum value within an array or an array-like object using the apply() method
// var numbers = [1, 2, 3];
// console.log(Math.max.apply(null, numbers)); // 3
// console.log(Math.min.apply(null, numbers)); // 1
// ============================