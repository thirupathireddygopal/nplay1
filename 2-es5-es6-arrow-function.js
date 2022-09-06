console.log('-------------------')
// Traditional Anonymous Function
const add = function (num1, num2) {
  return num1 + num2;
}
console.log(add(2, 3))

// var acts as a event obj(has args and functions)
// writing a event plant obj which has 1var,1 func which uses var
const growPlantEvent = {
  input1: 'water',
  // es5 method defination
  pourWater: function () {
    console.log(`growing plant using: ${this.input1}`)
    return this.input1
  }
}
console.log('input1: ' + growPlantEvent.input1);
console.log('grow plant: ' + growPlantEvent.pourWater());

// writing an event apple obj which has varibles and functions which uses var
const growAppleEvent = {
  arg1: 'water',
  appleInput1: 'neem leaves oil',
  minerals: ['dap', 'urea', 'potash'],

  // ES5 method defination syntax
  // we can access object properties by using "this" keyword
  addMinerals: function () {
    // console.log(`es5 minerals: ${this.minerals}`);
    return this.minerals;
  },

  // ES6 method defination syntax 
  // cannot able to access their properities of an obj using this
  // instead we directly write function
  // But we access other properties of other obj
  addOrganic(organic1, organic2) {
    console.log('es6 agr1: ' + this.arg1);
    console.log(`es6 minerals: ${this.minerals}`);
    console.log(`outside obj fun: ${growPlantEvent.pourWater()}`);
    console.log(`organics: ${organic1}, ${organic2}`);
    // const that = this; // for accessing arg1 inside forEach method of an array, not preffered
    // this.minerals.forEach(function (item) {
    //   console.log(item + ' grown using ' + that.arg1);
    // })
    this.minerals.forEach((item) => {
      console.log(item + ' used along with ' + this.arg1);
    })
    return this.appleInput1; // neem leaves oil
  },

  // arrow fun method defination
  // we cannot able to access this keyword
  checkArrow: () => {
    console.log(this.appleInput1); // undefined
  }
}

console.log(`first arg: ${growAppleEvent.appleInput1}`);

let ms = growAppleEvent.addMinerals();
console.log(ms) // [ 'dap', 'urea', 'potash' ]

let organics = growAppleEvent.addOrganic('vegetable waste', 'vermi compost')
console.log(organics); // neem leaves oil

growAppleEvent.checkArrow(); // undefined

// Arrow Function Break Down
// Removed the word "function" and place arrow between the argument and opening body bracket
const mul = (num1, num2) => {
  return num1 * num2;
};
console.log("arrow mul: " + mul(2, 3));

// Removed braces and return keyword
let mul_1 = (num1, num2) => num1 * num2;
console.log("mul_1: " + mul_1(3, 5))

// Removed paranthesis()
let add_2 = a => a + 100;
console.log('add_2: ' + add_2(2));

// And finally, for named functions we treat arrow expressions like variables
// The { braces } and ( parentheses ) and "return" are required in some cases.

// An empty arrow function returns undefined
let empty = () => { };
console.log('empty: ' + empty());

var simple = a => a > 15 ? 15 : a;
console.log(simple(16)); //15
console.log(simple(10)); //10

let max = (a, b) => a > b ? a : b;
console.log(max(16, 15)); //16
console.log(max(10, 14)); //10

// Easy array filtering, mapping, ...
var arr = [5, 6, 13, 0, 1, 18, 23];

// addition
// var sum = arr.reduce((a, b) => a + b);
var sum = arr.reduce((a, b) => {
  console.log(`a: ${a}, b: ${b}`);
  return a + b
}
);
console.log(sum);// 66

//even numbers
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
console.log(even);

var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]
console.log(double);



