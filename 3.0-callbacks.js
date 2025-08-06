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

// now what we are doing is by using callbacks, we are defining function outside the main function like we are making it as abstract function
let abstractFun = function () {
  console.log(`I am called from call function`);
}

let call = function (callback) {
  console.log('main function');
  callback();
}
call(abstractFun);

let add = function (a, b) {
  return a + b;
}

let multiply = function (a, b) {
  return a * b;
}

let doWhatever = function (a, b) {
  return `here are your numbers ${a}, ${b}`;
}

let main = function (num1, num2, callback) {
  console.log(`entered into main fun..`);
  // this will check weather passed function is correct or not, 
  // cont. or just incase if somebody passed some garbage
  if (typeof callback === 'function') {
    return callback(num1, num2);
  }
}
console.log('add callback fun: ', main(2, 3, add)); // here we have defined the cb function name add
console.log('mul callback fun: ', main(2, 3, multiply)); // given cb function name multiply
console.log(main(2, 3, doWhatever)); // here we have defined the cb function name doWhatever

// here we do not defined the cb function name and we call it as anonymous function
// when we want to use something only once we do not want to define the function then we go for anonymous function
console.log(main(2, 3, function (a, b) {
  return a - b;
}));

// practical example
let myArr = [
  {
    name: 'thiru',
    age: 27
  },
  {
    name: 'ravi',
    age: 9
  },
  {
    name: 'kavya',
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