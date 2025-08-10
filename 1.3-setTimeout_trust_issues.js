console.log('start');
function cb() {
    console.log('callback');
}
setTimeout(cb, 2000);
console.log('end');

// simulation of waiting for 9 seconds, like millions of line of code here...
let startDate = new Date().getTime(); // retuns time in milliseconds
let endDate = startDate;
while (endDate < startDate + 9000) { // added 9,000 milliseconds which is 9 sec to start date
    endDate = new Date().getTime();
}
console.log('while expired...');

console.log('start2');
function cb() {
    console.log('callback');
}
// cb(); // here we have defer the cb() function code to execute after sometime which is not so important
// for suppose if we want to defer a peace of code, or if the code is not so important then we can make use of setTimeout()
// which basically means after execution of all the code in GEC(Global execution context) executed then the cb registerd in web-apis will run
setTimeout(cb, 0);
console.log('end2');