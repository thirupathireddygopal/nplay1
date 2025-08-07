// array destructing >>
// 1) Basic variable assignment
const fruit = ['apple', 'banana'];
const [fruit1, fruit2] = fruit;
console.log(fruit2); // banana

const [fruit3, fruit4, fruit5, fruit6] = fruit;
console.log(fruit3); // apple
console.log(fruit4); // banana
console.log(fruit5); // undefined
console.log(fruit6); // undefined


// 2)Assigning values to declared variables via destrcucting
let a, b, rest; // declaring variables
[a, b] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70];
console.log(a);
console.log(b);
console.log(rest);

// 3) Default values >> A variable can be assigned a default, in the case that the value unpacked from the array is undefined
[a = 1, b = 3] = [2];
console.log(`default a: ${a}`); //default a: 2
console.log(`default b: ${b}`); //default b: 3

// 4) Swapping variables
[a, b] = [2, 3, 4];
[a, b] = [b, a];
console.log(`Swapping a: ${a}`);
console.log(`Swapping b: ${b}`);

// let {v1, v2, ...rest} = { v1: 10, v2: 20, v3: 30, v4: 40, v5: 50, v6: 60, v7: 70 }; // since rest has already been declared instead u can use like rest1

// object destructing
let { v1, v2, ...rest1 } = { v1: 10, v2: 20, v3: 30, v4: 40, v5: 50, v6: 60, v7: 70 };
console.log(v1);
console.log(v2);
console.log(rest1);

const x = [11, 22, 33, 44, 55];
// const[y,z] = x;
// console.log(y);
// console.log(z);
console.log(x[2]);

// parsing an array returned from a function
function f() {
  return [1, 2, 3, 4];
}

let parse1, parse2, parse4;
[parse1, parse2, , parse4] = f();
console.log(parse1); // 1
console.log(parse2); // 2
console.log(parse4); // 4 >> ignoring 3rd index

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// Object destructuring

// 1) The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.
// 2) {a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.
// However, ({a, b} = {a: 1, b: 2}) is valid, as is const {a, b} = {a: 1, b: 2}
// 3) Your ( ... ) expression needs to be preceded by a semicolon; or it may be used to execute a function on the previous line.

// let a, b; >> already declared
({ a, b } = { a: 1, b: 2 });
console.log(a);
console.log(b);

// 1)Basic assignment
const user = {
  id: 42,
  isVerified: true
};
const { id, isVerified } = user;
console.log(id); // 42
console.log(isVerified); // true


// assigning to new variable names
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;
console.log(foo); // 42
console.log(bar); // true
//Here, for example, const {p: foo} = o takes from the object o the property named p and assigns it to a local variable named foo.

// default values
const { a1 = 10, b1 = 5 } = { a1: 3 };
console.log(a1); // 3
console.log(b1); // 5

// Assigning to "NEW VARIABLES NAMES" and providing default values. A property can be both
// 1)Unpacked from an object and assigned to a variable with a different name.
// 2)Assigned a default value in case the unpacked value is undefined.
const { a2: aa22 = 10, b2: bb22 = 5 } = { a22: 3 };
console.log(aa22); // 3
console.log(bb22); // 5

// final example1, consider user1 obj coming from req.body.user1
const user1 = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
function userId({ id }) {
  return id;
}
function whois({ surname = 'gopal', displayName: dp, fullName: { firstName: fname } }) {
  return `${dp} is ${fname}, surname: ${surname}`;
}
console.log(userId(user1)); // 42
console.log(whois(user1));  // "jdoe is John"

// Nested object and Array destructing
// consider data is coming from request body >> req.body.data
const data = {
  description: 'user list',
  userList: [
    {
      firstName: 'thiru',
      lastName: 'gopal',
      age: 28
    },
    {
      firstName: 'praveen',
      lastName: 'j',
      age: 27
    }
  ],
  url: 'https://google.com'
}

// assinging a new varibles to data obj, finally we destrcuted into varibles for the packed obj
let {
  description: description_new,
  userList: [
    {
      firstName: firstName_new1,
      lastName: lastName_new1,
      age: age_new1
    }
  ],
  url: url_new
} = data

console.log(description_new);
console.log(firstName_new1);
console.log(lastName_new1);
console.log(url_new);

// for of iteration and destructing
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];
for (const { name: n, family: { father: f } } of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// Combined Array and Object Destructuring
// Array and Object destructuring can be combined. Say you want the 2nd element in the array props below
const props = [
  { id: 1, proname: 'Fizz' },
  { id: 2, proname: 'Buzz' },
  { id: 3, proname: 'FizzBuzz' }
];
const [, { proname }] = props;
console.log(proname); // "Buzz"

// >> Enhanced Object literals
function getMobile(manufacturer, model, year) {
  return {
    manufacturer, model, year
  }
}

const mobile = getMobile('HMT', 'zje', 1994);
console.log(mobile);

// >> classes
class UserProfile {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);
  }
}

let obj = new UserProfile('thiru', 'gopal');
console.log(obj.getName());
