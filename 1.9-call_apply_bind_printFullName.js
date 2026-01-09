// name obj
let obj1 = {
    firstName: "thiru",
    lastName: "gopal",
    // 1) each and every function in javascript has access to "this keyword", that this keyword will point to obj1 object
    // 2) generally we will don't keep our method like this in obj method if we want to reuse them 
    // cont. for other code part rather we take this method outside the object
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
obj1.printFullName(); // thiru gopal, calls printFullName() method

// function borrowing: using call method we can barrow a function from other object
let obj2 = {
    firstName: "kavya",
    lastName: "t",
}
// function barrowing: call(ref, args...)
obj1.printFullName.call(obj2); // kavya t

// example 2: got the object method outside so that it can used everywhere
let printFullName2 = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ', ' + state);
}
// if we want to pass arguments to the function, the first argument will be the "refernce object"
// and later arguments are the "arguments to the function" 
printFullName2.call(obj1); // thiru gopal from undefined, undefined
printFullName2.call(obj1, "Nizampur", "TS"); // thiru gopal from Nizampur, TS
printFullName2.call(obj2, "Chandanagar", "TS"); // kavya t from Chandanagar, TS
// So we can pass "N" no.of arguments to the function, it will work fine
// but if the no.of arguments are more, then it is difficult to manage

// Apply method: the only difference between call and apply is the way we pass the arguments
// cont. apply method takes the arguments in an array
printFullName2.apply(obj1, ["Nizampur", "TS"]);

// Bind method: it returns a copy of the method that can be invoked later
// Explanation: Bind method looks excatly same as the call method, but the only difference is instead of directly
// cont. calling the method, it returns a copy of the method
let printMyName = printFullName2.bind(obj2, "Chandanagar", "TS");
printMyName(); // kavya t from Chandanagar, TS

let obj3 = {
    name: "thiru",
    age: 30,
    city: "Nizampur"
}
function printDetails(country, state) {
    console.log(this.name + ", " + this.age + ", " + this.city + ", " + country + ", " + state);
}
printDetails.call(obj3, "India", "TS"); // thiru, 30, Nizampur, India, TS
printDetails.apply(obj3, ["India", "TS"]); // thiru, 30, Nizampur, India, TS
// let boundPrintDetails = printDetails.bind(obj3, "India", "TS");
// boundPrintDetails();
let bind = printDetails.bind(obj3, "India");
bind("TS"); // thiru, 30, Nizampur, India, TS
