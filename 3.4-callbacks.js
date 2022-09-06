// without callbacks
// using normal functions and here we can call this cal_normal as a libaray which it provides some results
let cal_normal = function (num1, num2, calType) {
  // here call type is a string argument
  if (calType == 'add') {
    return num1 + num2
  }
  if (calType == 'multiply') {
    return num1 * num2
  }
}
console.log(cal_normal(2, 3, 'add'));
console.log(cal_normal(2, 3, 'multiply'));

// now what we are doing using callbacks is we are defining functions out the main functions like we are making it as abstract functions
let x = function () {
  console.log(`I am called from inside a function`);
}

let y = function (callback) {
  console.log('main function');
  callback();
}
y(x);

let add = function (a, b) {
  return a + b;
}

let multiply = function (a, b) {
  return a * b;
}

let doWhatever = function (a, b) {
  return `here are your numbers ${a}, ${b}`;
}

let calc_callback = function (num1, num2, callback) {
  console.log(`entered into callback func`);
  // this will check weather passed function is correct or not, or  just incase if somebody pass some garbage is passed
  if (typeof callback === 'function') {
    return callback(num1, num2);
  }
}
console.log(calc_callback(2, 3, multiply)); // here we have defined the cb function name multiply
console.log(calc_callback(2, 3, doWhatever)); // here we have defined the cb function name doWhatever

// here we do not defined the cb function name and we call it as anonymous function
// when we want to use something only once we do not want to define the function then we go for anonymous function
console.log(calc_callback(2, 3, function (a, b) {
  return a - b;
}));

// practical example
let myArr = [
  {
    name: 'thiru',
    age: 27
  },
  {
    name: 'abhinav',
    age: 9
  },
  {
    name: 'praveen',
    age: 15
  }
]

myArr.sort(function (val1, val2) {
  if (val1.age > val2.age) {
    return 1;
  }
  else {
    return -1;
  }
});

console.log(myArr)