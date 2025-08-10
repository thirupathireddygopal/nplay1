// i want to transform into new array
// so transformation means getting a new array from the given array like doubling/trippling of array values
// transform to Double >> [2, 4, 6, 8, 10]
// transform to Triple >> [3, 6, 9, 12, 15]
// transform to Binary >> ["1", "10", "11", "100", "101" ]
let arr = [1, 2, 3, 4, 5]
const doubleArr = arr.map((item) => { return item * 2 });
const tripleArr = arr.map((item) => item * 3);
console.log(doubleArr, tripleArr);

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

// In typescript we write like this
// function binary(x: number): string {
//     return x.toString(2);
// }

function binary(x) {
    if (typeof x !== 'number') {
        throw new TypeError('Expected a number');
    }
    return x.toString(2);
}

// this is what is known as High Order Functions, remember we pass a function as an argument to another function
let binary2 = arr.map(function binary(x) {
    if (typeof x !== 'number') {
        throw new TypeError('Expected a number');
    }
    return x.toString(2);
});

console.log(arr.map(double)); // doubling the arr
console.log(arr.map(triple)); // trippling the arr
console.log(arr.map(binary)); // trippling the arr
console.log(binary2); // same result

// filter: filter function is basically used to filter
// filter odd values
// here % is used to get reminder and if reminder is not equal to 0, then it is odd
console.log(arr.filter(item => item % 2 !== 0))
function isOdd(x) {
    return x % 2 !== 0; // return true or false based on the vl
};
console.log(arr.filter(isOdd));

// reduce: reduce function is used to get some values based out of an array based on the condition
// findsum
// 1st way: using for loop
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total;
};
console.log(sum(arr));

/** Reduce implementation:
    accumalator/previous value: At start we will set the intial value and in every iteration,
    cont. the value of acc will be updated with the returned value
    and current value will be 2nd index and process cont. till end of the arr
 */

function sumReduce(acc, current) {
    acc = acc + current;
    return acc;
}
console.log(arr.reduce(sumReduce, 0));

console.log(arr.reduce((prev = 0, current) => {
    return prev + current
}));

// find max value in an array
function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log(max(arr));

function maxReduce(acc, current) {
    if (acc < current) {
        acc = current;
    }
    return acc;
};
console.log(arr.reduce(maxReduce, 0));

const users = [
    { name: 'thiru', age: 28 },
    { name: 'vijay', age: 19 },
    { name: 'kishore', age: 28 },
    { name: 'kalyan', age: 19 },
    { name: 'harish', age: 18 },
];

// find out how we get array of all names
function addName(obj) {
    return obj.name;
}
console.log(users.map(addName));

// list of vways for checking the object is present or not
// 1. Using the "in" operator >> if ('key1' in myObject)
// 2. The hasOwnProperty() method checks if a property exists directly on the object, excluding inherited properties. >> if (myObject.hasOwnProperty('key1'))
// 3. Checking if the property value is not "undefined" >> if (myObject.key1 !== undefined)
// 4. Using "Object.keys() and includes()" >> if (Object.keys(myObject).includes('key1'))
// 5. The "Reflect.has()" method is a more modern way to check if a property exists in an object and is similar to using the in operator. >> if (Reflect.has(myObject, 'key1'))
function ageReduce(acc, item) {
    if (item.age in acc) {
        acc[item.age]++;
    }
    else {
        acc[item.age] = 1;
    }
    return acc;
}
console.log(users.reduce(ageReduce, {}));

// find the name of the all the users whose age is less than or equal to 20
function lessAge20(item) {
    if (item.age <= 20) return true;
}
// using filter and map
console.log(users.filter(lessAge20).map((item) => item.name));
// using reduce
function reduceAge20(acc, item) {
    if (item.age <= 20) {
        acc.push(item.name)
    }
    return acc;
};
console.log(users.reduce(reduceAge20, []));






