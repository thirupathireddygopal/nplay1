// Higher order function: 
// A function which takes another function as an argument is known as Higher order function
// cont. This is only possible because function are first class citizens
function x() {
    console.log('hi thiru');
}

// in this case the function "y" is known as higher order function and "x" is the callback function
// return "undefined" since we did not return anything
function y(x) {
    x();
}
console.log(y(x));

let radiusArr = [2, 3, 4, 5];
// Area of circles pi*r*r
let circlesAreas = function (arr) {
    let circlesArea = [];
    for (let i = 0; i < arr.length; i++) {
        circlesArea.push(Math.PI * arr[i] * arr[i]);
    }
    return circlesArea;
}

// calculate Circumference of circles, 2*pi*r
let calCircumferenceOfCircles = function (arr) {
    let circlesCircumfernce = [];
    for (let i = 0; i < arr.length; i++) {
        circlesCircumfernce.push(2 * Math.PI * arr[i]);
    }
    return circlesCircumfernce;
}

// calculate Diameter of circles, 2*r
let calDiameterOfCircles = function (arr) {
    let circlesDiameters = [];
    for (let i = 0; i < arr.length; i++) {
        circlesDiameters.push(2 * arr[i]);
    }
    return circlesDiameters;
}

// still here we are using all 3 for loops
let calculate = function (name, arr) {
    switch (name) {
        case "calCircleArea":
            let circlesArea = [];
            for (let i = 0; i < arr.length; i++) {
                circlesArea.push(Math.PI * arr[i] * arr[i]);
            }
            return circlesArea;
        case "calCircleCircum":
            let circlesCircumfernce = [];
            for (let i = 0; i < arr.length; i++) {
                circlesCircumfernce.push(2 * Math.PI * arr[i]);
            }
            return circlesCircumfernce;
        case "calCircleDia":
            let circlesDiameters = [];
            for (let i = 0; i < arr.length; i++) {
                circlesDiameters.push(2 * arr[i]);
            }
            return circlesDiameters;
        default:
            break;
    }
}
// console.log(calculate("calCircleArea", radiusArr));
// console.log(calculate("calCircleCircum", radiusArr));
// console.log(calculate("calCircleDia", radiusArr));

console.log('========= Higher Order Functions ==============');
// now let's see how we pass logic to the function i.e: functional programming
// here we have abstracted this logic out from the code
// 1st we will write all the methods by using Function Expression, 
// cont. then we will call these methods as function arguments in the function 
let area = function (radius) {
    return Math.PI * radius * radius
}
let circumference = function (radius) {
    return 2 * Math.PI * radius
}
let diameter = function (radius) {
    return 2 * radius
}

// here "cal_HOF_logic" function is a Higher Order Function
// this is kind of a polyfill for map function
let cal_HOF_logic = function (cbLogic, arr) { // here we are passing "cbLogic callback function" as an argument 
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cbLogic(arr[i]));
    }
    return result;
}
// here we can see that function logic is sent as an argument to another function which is known as Higher order functions/first class functions
// if we observe "cal_HOF_logic" function carefully this is something similar to map function in javascript
console.log(cal_HOF_logic(area, radiusArr));
console.log(cal_HOF_logic(circumference, radiusArr));
console.log(cal_HOF_logic(diameter, radiusArr));

// if we write like array.someOurOwnMethod(), then it will call array methods
Array.prototype.methodLogic1 = function (cbLogic) {
    let result = [];
    // here we are using "this.length"
    for (let i = 0; i < this.length; i++) {
        result.push(cbLogic(this[i]));
    }
    return result;
}
console.log(radiusArr.map(area)); // same result we get
console.log(radiusArr.methodLogic1(area)); // same result we will get

/**
    hi thiru
    undefined
    ========= Higher Order Functions ==============
    [
    12.566370614359172,
    28.274333882308138,
    50.26548245743669,
    78.53981633974483
    ]
    [
    12.566370614359172,
    18.84955592153876,
    25.132741228718345,
    31.41592653589793
    ]
    [ 4, 6, 8, 10 ]
    [
    12.566370614359172,
    28.274333882308138,
    50.26548245743669,
    78.53981633974483
    ]
    [
    12.566370614359172,
    28.274333882308138,
    50.26548245743669,
    78.53981633974483
    ]
 */
