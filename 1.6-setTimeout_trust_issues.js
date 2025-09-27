/**
    start
    end
    while expired...
    start2
    end2
    callback1
    callback2
 */
console.log('start');
function cb() {
    console.log('callback1');
}
setTimeout(cb, 2000);
console.log('end');

// simulation of waiting for 3 seconds, like millions of line of code here...
let startDate = new Date().getTime(); // retuns time in milliseconds
let exipryDate = startDate;
while (exipryDate < startDate + 3000) { // added 3,000 milliseconds
    exipryDate = new Date().getTime();
}
console.log('while expired...');

console.log('start2');
function cb2() {
    console.log('callback2');
}
// cb2(); // here we have defer the cb2() function code to execute after sometime which is not so important
// for suppose if we want to defer a peace of code, or if the code is not so important then we can make use of setTimeout()
// which basically means after execution of all the code in GEC(Global execution context) executed then the cb registerd in web-apis will run
setTimeout(cb2, 0);
console.log('end2');

