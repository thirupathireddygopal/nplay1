const growObj = {
  input1: 'water',
  pourWater: function () { // es5 method defination
    return this.input1
  }
}
console.log('input1: ' + growObj.input1);
console.log('grow plant: ' + growObj.pourWater());

// writing an event apple obj which has varibles and functions which uses var
const appleObj = {
  var1: 'water',
  minerals: ['dap', 'urea', 'potash'],
  getMinerals: function () { // ES5 method defination syntax
    // we can access object properties by using "this" keyword
    // console.log(`es5 minerals: ${this.minerals}`);
    return this.minerals;
  },
  addOrganic(organic1, organic2) { // ES6 method defination syntax
    console.log('es6 var1: ' + this.var1); // water
    console.log(`other obj fun: ${growObj.pourWater()}`); //outside obj fun: water 
    // cannot able to access their properities of an obj using this
    // instead we directly write function, But we access other properties of other obj
    /**
        const that = this; // for accessing var1 inside forEach method of an array using normal function,not preffered
        this.minerals.forEach(function (item) {
          console.log(item + ' grown using ' + that.var1);
        })
    */
    this.minerals.forEach((item) => {
      console.log(item + ' used along with ' + this.var1);
    })
    return `${organic1}, ${organic2}`; // neem leaves oil
  },
  checkArrow: () => {
    console.log(this.var1); // undefined, we cannot able to access this keyword
  }
}
let ms = appleObj.getMinerals();
console.log(ms) // [ 'dap', 'urea', 'potash' ]

let organics = appleObj.addOrganic('vegetable-waste', 'vermi-compost')
console.log(organics); // vegetable-waste, vermi-compost

appleObj.checkArrow(); // undefined

//Arrow Function Break Down
const mul = (num1, num2) => {
  // Removed the word "function" and place arrow between the argument and opening body bracket
  return num1 * num2;
};
let mul_1 = (num1, num2) => num1 * num2; // Removed braces and return keyword
let add_2 = a => a + 100; // Removed paranthesis()
// console.log(mul(2, 3), mul_1(3, 5), add_2(2));

// And finally, for named functions we treat arrow expressions like variables
// cont. { braces } and ( parentheses ) and "return" are required in some cases.

// An empty arrow function returns undefined
let empty = () => { };
console.log('empty: ' + empty()); // undefined

// finding max
var simple = a => a > 15 ? 15 : a;
let max = (a, b) => a > b ? a : b;
console.log(simple(16), max(16, 15)); // 15 , 16

// Array filtering, mapping, ...
var arr = [5, 6, 13, 0, 1, 18, 23];
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18],  new array
var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46] , new array
var sum = arr.reduce((a, b) => a + b);
var sum1 = arr.reduce((a, b) => { // here b intial value is 5
  // console.log(a,b);
  return a + b
}, 0); // if intial value not given then it consider as first initial values a=5, b=6
console.log(sum1);// 66




