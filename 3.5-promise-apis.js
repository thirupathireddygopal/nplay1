// const promise1 = fetch(''); // here we can fetch api and return a promise
// for this demo i am writing a normal promise

/** 1) promise.all([p1, p2, p3]); 
 * will return all the values in an array (or) returns error if any promise rejected
 */
const prAll1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: 'prAll 1 returned a promise after 3 secs' });
    }, 3000);
});

const prAll2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('prAll 2 REJECTED after 2 secs');
    }, 2000);
});

const prAll3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: 'prAll 3 returned a promise after 5 secs' });
    }, 5000);
});
// console.log(Promise.all([prAll1, prAll2, prAll3])); // it returns a promise
// if we don't catch the error, it will return "Uncaught Error", NEVER EVER MISS, Write the catch block
Promise.all([prAll1, prAll2, prAll3])
    .then(result => {
        console.log(result);
    })
    .catch((err) => { console.log(err) });

/** 2) promise.allSettled([p1, p2, p3]); 
 * promise.allSettled will wait for all the promises to get settled,
 * it will return all the values in an array including rejected promise
*/
const prAllSettled1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('prAllSettled 1 REJECTED after 3 secs');
    }, 3000);
});

const prAllSettled2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: 'prAllSettled 2 returned a promise after 2 secs' });
    }, 2000);
});

const prAllSettled3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: 'prAllSettled 3 REJECTED after 5 secs' });
    }, 5000);
});
// console.log(Promise.allSettled([prAllSettled1, prAllSettled2, prAllSettled3])); // it returns a promise
Promise.allSettled([prAllSettled1, prAllSettled2, prAllSettled3])
    .then(result => {
        console.log(result);
    })
    .catch((err) => { console.log(err) });

/** 3) promise.race([p1, p2, p3]);
 * it will return the first finishes (or) return the first rejected
*/
const prRace1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('prRace 1 REJECTED after 3 secs'); // it will executes and returns first
    }, 3000);
});

const prRace2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: 'prRace 2 returned a promise after 2 secs' }); // it will return first, when no rejection happens before
    }, 2000);
});

const prRace3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('prRace 3 will not execute'); // it will not execute
    }, 5000);
});
// console.log(Promise.race([prAllSettled1, prAllSettled2, prAllSettled3])); // it returns a promise
Promise.race([prRace1, prRace2, prRace3])
    .then(result => {
        console.log(result);
    })
    .catch((err) => { console.log(err) });

// 4) promise.any([p1, p2, p3]); // it will wait for the first promise to return
const prAny1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: 'prAny 1 returned a promise after 3 secs' }); // it will execute
    }, 3000);
});

const prAny2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('prRace 2 REJECTED after 2 secs');
    }, 2000);
});

const prAny3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('prAny 3 will not execute'); // will not execute
    }, 5000);
});
console.log(Promise.any([prAny1, prAny2, prAny3])); // it returns a promise as a result
Promise.any([prAny1, prAny2, prAny3]).then(result => {
    console.log(result);
}).catch((err) => {
    console.log(err); // here we can't able to see the total errors
    console.log(err.errors); // here we will see all the errors inside we will have AggregateError
});

