// example 1: async fun returns returns promise
async function getDesc() {
    // return new Error('not found');
    return "async function returning string, and it wraps with the promise and returns back..."
}
getDesc().then(result => console.log(result)).catch((err) => console.log(err.errors));

// example 2: async function always returns a promise
async function getData(params) {
    return new Promise((resolve, reject) => {
        resolve('returns promise since we are using promise - resolve')
    })
}
getData().then((value) => console.log(value)).catch(err => console.log(err.errors));

// example 3: JS Engine will not wait for promise to be resolved.
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise value after 8 secs...')
    }, 8000);
});
// 1st way: promise way of calling
function getNormalPr2() { // behaves synchronously
    pr.then(val => console.log(val)).catch(err => console.log(err.errors));// ** JS Engine will not wait for promise to be resolved. **
    console.log('handle promise - normal way'); // it prints this line first
}
// getNormalPr2();
// console.log('Hey I AM IN THE CALLSTACK SINCE getNormalPr2 is SUSPENDED, 😍');

// 2nd way: async-await way of calling
async function getAsyncAwaitPr2(params) {
    console.log('hi thiru..');
    let value = await pr; // supsended for the time being
    console.log(value); // prints value after 8 secs
    console.log('handle promise - async-await way'); // prints later
}
// getAsyncAwaitPr2();
console.log('Hey I AM IN THE CALLSTACK SINCE getAsyncAwaitPr2 is SUSPENDED, 😍');

// ============================
// Mocking if we have 2 awaits inside the async function and how they function
const asyncAwaitPr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('asyncAwaitPr1 resolved value after 2 secs...');
    }, 2000);
});
const asyncAwaitPr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('asyncAwaitPr2 resolved value after 5 secs...');
    }, 5000);
});
// what it we have two async awaits in the function
async function handle2PrUsingAsyncAwait() {
    console.log('entered async-await handle2PrUsingAsyncAwait');

    // let val1 = await asyncAwaitPr1; // prints 1st promise callback since it takes less time than 2nd promise to get resolved
    // console.log('hey, now val 1 entered into callstack 😊');
    // console.log(val1);

    let val2 = await asyncAwaitPr2; // prints both after 5 seconds, since asyncAwaitPr1 is also been resolved in 2 secs
    console.log('hey, now val 2 entered into callstack 😊');
    console.log(val2);

    let val1 = await asyncAwaitPr1;
    console.log('hey, now val 1 entered into callstack 😊');
    console.log(val1);
}
handle2PrUsingAsyncAwait();
console.log('Hey I AM IN THE CALLSTACK SINCE handle2PrUsingAsyncAwait is SUSPENDED, 😍');

// =====================
// mocking using promsie and async-await way for getting the github details
const api_url = 'https://api.github.com/users/thirupathireddygopal';
async function handlePrNewWay() {
    // using promise way
    // fetch(api_url) // returns a promise, so we are making use of .then
    //     .then((response) => response.json()) // returns a promise, so we are making use of .then
    //     .then(result => console.log(result)); // using promises

    // using async-await along with error handling using try-catch block
    // newer way of handling errors is to use try-catch block
    try {
        const data = await fetch(api_url); // using async await, whenever we see we will get a promise, we need to use await before
        const result = await data.json(); // once again returns a promise
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
handlePrNewWay(); // newer way

// older fashion of handling errors using promises .then(), .catch()
// handlePrNewWay().catch(err => {console.log(err)}); // remember, async function always retuns a promise

/** difference b/w async-await & promise.then/.catch
    async-await is a syntatic sugar over promise native methods >> .then() and .catch()
    when we are using async-await, behind the scenes javascript is using promise.then(), promise.catch() 
    and all that stuff only, basically the only effect happening is, happening in the code how we write
*/

