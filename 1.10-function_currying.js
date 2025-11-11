// Function Currying essentially is a programming technique where you take a function with multiple arguments, 
// and you turn it into smaller sequential functions where you pass one argument at a time.

// 1) Bind method will create a copy of multiply method and we create more methods out of it
// by pre-sets the x(initial) value for later use-case
// we can use bind method for function currying
let multiply = function (x, y) {
    return x * y;
}
let multiplyByTwo = multiply.bind(this, 2); // pre-setting the first argument
console.log(multiplyByTwo(5)); // 10

let multiplyByThree = multiply.bind(this, 3, 2); // pre-setting the first and second argument
console.log(multiplyByThree(5)); // 6 is the result, here 5 is ignored

// 2) Using closures for function currying
let add = function (x) {
    return function (y) {
        return x + y;
    }
}
// currying using arrow
// const add = (a) => {
//   return (b) => {
//     return a + b;
//   }
// }
let addFive = add(5); // pre-setting the first argument
console.log(addFive(3)); // 8

// When you should use currying
// Now, let's say that we have an array of objects, something like this:
const listArr = [
    {
        id: 1,
        name: 'Steve',
        email: 'steve@gmail.com',
    },
    {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
    },
    {
        id: 3,
        name: 'Pamela',
        email: 'pam@gmail.com',
    },
    {
        id: 4,
        name: 'Liz',
        email: 'liz@gmail.com',
    },
];
// And I want to remove one of the objects if a specific property matches a value, 
// for example if the object name property is equal "John", you want to filter it out.

// The simplest way is to do it in this way:
const noJohn = listArr.filter(item => item.name !== 'John');
console.log(noJohn);
/**
[
  { id: 1, name: 'Steve', email: 'steve@gmail.com' },
  { id: 3, name: 'Pamela', email: 'pam@gmail.com' },
  { id: 4, name: 'Liz', email: 'liz@gmail.com' }
]
*/
/**
That works, but it's not reusable because you are hardcoding the name you want to remove.
A better way is to wrap it into a function and pass the name as an argument:
*/
const filterByName = (list, name) => {
    return list.filter(item => item.name !== name);
};
const filteredList = filterByName(listArr, 'John');
console.log(filteredList);
/**
Now, imagine that you are going to use the same filter function in two or more places in the same code,
or maybe you want to keep the code DRY and you want to place the filtering in a variable on its own. 
You could try this:
*/
//And here is where currying comes to action!
// So you will need to change the above code to this:
// we add another function on top of the previous
const filtering = (name) => (item) => item.name !== name;
// Function currying:
const filterByName = (list, name) => {
  return list.filter(filtering(name));
}
const filteredList1 = filterByName(listArr, 'John');

/** Function currying:
If we use the old fashion function syntax, for old timers like me, 
it would be translated to something like this: 
 */
function filterByName(list, name) {
    // 2) using listArr as second argument
    return list.filter(function (nameToFilter) {
        // nameToFilter = 'john', is declared at this point
        // 1) this function is returned by initially taking the 'john' value and returning which is 
        // cont. nothing but function currying
        return function (item) {
            // item is declared here
            return item.name !== nameToFilter; // '
        }
    }(name));
}
console.log(filterByName(listArr, 'John'));

const filterByProperty = (list, property, value) => {
    return list.filter(item => item[property] !== value);
};
const filteredList2 = filterByProperty(list, 'name', 'John');
console.log(filteredList2);

// using closures
const filterByName = (val) => {
    return (list) => {
        return list.filter(item => item['name'] !== val);
    };
};
const filterByNameJohn = filterByName('John'); // initial pre-set 'john'
const filteredList3 = filterByNameJohn(listArr); // function currying using closure
console.log(filteredList3);