// callback function with synchronous
const names = ['thirupathireddy', 'gopal', 'ohm', 'r.g']
const shortNames = names.filter((name) => {
  return name.length <= 5
})
console.log(shortNames);

// callback function with asynchronous programming 
setTimeout(() => {
  console.log(`prints after 2 seconds`)
}, 2000);

// print a string after a random amount of time
function printString(str) {
  setTimeout(() => {
    console.log(str)
  }, Math.floor(Math.random() * 100) + 1)
}

function printAll() {
  printString("A");
  printString("B");
  printString("c");
}
// printAll();

/**
    This is super annoying, so let’s fix it with a callback.
    A callback is a function that is passed to another function as an argument.
*/
function printCbString(str1, str2, callback) {
  setTimeout(() => {
    // console.log(str1, str2);
    callback(null, str1 + ' ' + str2); // null indicates no error, here callback is included with an error handling and result
  }, Math.floor(Math.random() * 100) + 1);
}

/**
    You can see that is is super easy to modify the original function to work with callbacks.
    Again, let’s try to print the letters A, B, C in that order:
*/
function printAllCbs() {
  printCbString("hi", "callback A", (err1, result1) => {
    if (err1) return console.error(err1);
    printCbString(result1, "callback B", (err2, result2) => {
      if (err2) return console.error(err2);
      printCbString(result2, "callback C", (err3, finalRes) => {
        if (err3) return console.error(err3);
        console.log('finalRes: ', finalRes);
      })
    })
  })
}
// printAllCbs();
/**
    Well, the code is a lot uglier now, but at least it works! Each time you call printAll, 
    cont. you get the same result.The problem with callbacks is it creates something called “Callback Hell.” 
    cont. Basically, which means you start nesting functions inside functions, 
    cont. and it starts to get really hard to read the code, and our code start to grow horizontally instead of vertically
    cont. and the code becomes un-maintainable or un-readable, and the structure is also know as "Pyramid of Doom"
    
    2nd problem is Inversion of control in callbacks: 
    Inversion of control is another problem we see while we are using callbacks
    Inversion of control is when we loose the control of code while we are using callbacks
    >> We are calling the createOrder api and passing the function as an argument to createOrder api 
    cont. and leaving our control to createOrder to call the function which we have sent as an argument later after the createOrder api completes, 
    cont. and we are blindly trusting createOrder api like it will call our function later, isn't risky yes? it's very very very risky
*/

// so, promises come into play to resolve Inversion of Control
// Promises try to fix this nesting problem. Let’s change our function to use Promises
function printStringPr(str1, str2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(str1, str2);
      // reject("Something went wrong"); // Uncomment this to test error handling
      resolve(str1 + str2);
    }, Math.floor(Math.random() * 100) + 1);
  })
}
/**
  You can see that code still looks pretty similar. 
  cont. you wrapped the whole function in a Promise, and instead of calling the callback, 
  cont. you call resolve (or reject if there is an error). The function returns this Promise object.
*/
// Again, let’s try to print the letters A, B, C in that order:
function printAllPr1() {
  printStringPr('', "promise A").then((res1) => {
    return printStringPr(res1, " promise B").then((res2) => {
      return printStringPr(res2, " promise C").then((result) => {
        console.log('final promise result: ', result);
      }).catch((err) => {
        console.error('Error occurred:', err);
      });
    })
  })
}
// printAllPr1();
/**
  A promise comes with an important feature known as “promise chaining” and here we need to remember
  cont. that we need to "return the result in every promise chain" for the next promise to take the result.
  cont. You can see that the code returns the result of the function (which will be a Promise),
  cont. and this gets sent to the next function in the chain.
*/

/**
    The code is no longer nested but it still looks messy!
    By using features of arrow functions, we can remove the “wrapper” function. 
    cont. The code becomes cleaner, but still has a lot of unnecessary parenthesis
    parentheses/round brackets ( ) , square brackets/box brackets [ ] , 
    braces/curly brackets { } , angle brackets < >
*/
function printAllPr2() {
  printStringPr("", "promise A")
    .then((val1) => printStringPr(val1, " promise B"))
    .then((val2) => printStringPr(val2, " promise C"))
    .then((finalVal) => console.log('final pr val: ', finalVal));
}
// printAllPr2();

/** Async-Await
    Await is basically syntactic sugar for Promises. It makes your Asynchronous code look more like 
    Synchronous/Procedural code, which is easier for humans to understand.
    The printString function doesn’t change at all from the promise version.
 */
// Again, let’s try to print the letters A, B, C in that order:
async function printAllAwait() {
  try {
    let res1 = await printStringPr("", "async-await A");
    let res2 = await printStringPr(res1, "async-await B");
    let finalRes = await printStringPr(res2, "async-await C");
    console.log('final async await result: ', finalRes);
  }
  catch (err) {
    console.error('Error occured: ', err);
  }
}
// printAllAwait();
/**
    Yeah…. MUCH better!
    You might notice that we use the “async” keyword for the wrapper function "printAllAwait". 
    This let’s JavaScript know that we are using async/await syntax, 
    and is necessary if you want to use Await. This means you can’t use Await at the global level; 
    it always needs a wrapper function. Most JavaScript code runs inside a function, so this isn’t a big deal.
*/

// example 2:
// here function >> add took 2 arguments depends on requirement and a callback function
const add = (num1, num2, callback) => {
  setTimeout(() => {
    callback(null, num1 + num2)
  }, 2000);
}

add(1, 2, (error, sum) => {
  if (error) {
    return console.log(error)
  }
  // do something, here we do not use else according to situation
  console.log('callback sum: ' + sum)
})

//promise vocabulary
//
//                         fullfiled
//                      /
// promise --> pending
//                      \
//                         rejected

