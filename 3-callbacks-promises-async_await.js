// callback function with asynchronous programming 
setTimeout(() => {
  console.log(`prints after 2 seconds`)
}, 2000);

// callback function with synchronous
const names = ['thirupathireddy', 'gopal', 'ohm', 'r.g']
const shortNames = names.filter((name) => {
  return name.length <= 5
})
console.log(shortNames);

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

// This is super annoying, so let’s fix it with a callback.
// A callback is a function that is passed to another function as an argument. When the first function is done, it will run the second function.
function printStringCb(str1, callback) {
  setTimeout(() => {
    console.log(str1);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}
// You can see that is is super easy to modify the original function to work with callbacks.

// Again, let’s try to print the letters A, B, C in that order:
function printAllCb() {
  printStringCb("callback A", () => {
    printStringCb("callback B", () => {
      printStringCb("callback C", () => {

      })
    })
  })
}
// printAllCb()

// Well, the code is a lot uglier now, but at least it works! Each time you call printAll, you get the same result.
// The problem with callbacks is it creates something called “Callback Hell.” 
// cont. Basically, which means you start nesting functions within functions, and it starts to get really hard to read the code.
// cont. and our code start to grow horizontally instead of vertically
// cont. and the code becomes un-maintainable or un-readable
// cont. and the structure is also know as "Pyramid of Doom"

// Inversion of control: in 



// >> so, >> promises come into play to resolve this
// Promises try to fix this nesting problem. Let’s change our function to use Promises
function printStringPr(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  })
}
// You can see that it still looks pretty similar. You wrap the whole function in a Promise, and instead of calling the callback, you call resolve (or reject if there is an error). The function returns this Promise object.

// Again, let’s try to print the letters A, B, C in that order:
function printAllPr1() {
  printStringPr("promise A").then(() => {
    return printStringPr("promise B").then(() => {
      return printStringPr("promise C")
    })
  })
}
// This is called a "Promise Chain". You can see that the code returns the result of the function (which will be a Promise), and this gets sent to the next function in the chain.

// The code is no longer nested but it still looks messy!
// By using features of arrow functions, we can remove the “wrapper” function. The code becomes cleaner, but still has a lot of unnecessary parenthesis:
// parentheses or "round brackets" ( ) "square brackets" or "box brackets" [ ] braces or "curly brackets" { } "angle brackets" < >
function printAllPr2() {
  printStringPr("promise A")
    .then(() => printStringPr("promise B"))
    .then(() => printStringPr("promise C"))
}

// printAllPr1();
// printAllPr2();

// Async-Await
// Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.
// The printString function doesn’t change at all from the promise version.

// Again, let’s try to print the letters A, B, C in that order:
async function printAllAwait() {
  await printStringPr("async-await A");
  await printStringPr("async-await B");
  await printStringPr("async-await C");
}

// printAllAwait();
// Yeah…. MUCH better!
// You might notice that we use the “async” keyword for the wrapper function "printAllAwait". This let’s JavaScript know that we are using async/await syntax, and is necessary if you want to use Await. This means you can’t use Await at the global level; it always needs a wrapper function. Most JavaScript code runs inside a function, so this isn’t a big deal.

// ==============================

// BUT WAIT THERE'S MORE
// The printString function doesn’t return anything and is independent, all we cared about was the order. But what if you wanted to take the output of the first function, do something with it in the second function, and then pass it to the third function?
// Instead of printing the string each time, let’s make a function that will concatenate the string and pass it on.

// Here it is in callback style:
// concatinating strings str1 and str2 string
//function takes arguments along with another argument called callback fun
function addStringCb(str1, str2, callback) {
  setTimeout(() => {
    callback((str1 + '' + str2))
  }, Math.floor(Math.random() * 100) + 1)
}

// And in order to call it:
function addAllCb() {
  addStringCb('', 'cb add-A', (result) => {
    addStringCb(result, 'cb add-B', (result) => {
      addStringCb(result, 'cb add-C', (result) => {
        console.log(result) // prints out ABC
      })
    })
  })
}
// addAllCb()

// example 2:
// here function >> add took 2 arguments depends on requirement and a callback function
const add = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1 + num2)
  }, 2000);
}

add(1, 2, (error, sum) => {
  if (error) {
    return console.log(error)
  }
  // do something, here we do not use else according to situation
  console.log('callback sum: ' + sum)
})

// Here is a promise style
// it takes the arguments in the function
function addStringPr(str1, str2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((str1 + '' + str2))
    }, Math.floor(Math.random() * 100) + 1);
  })
}

function addAllPr() {
  addStringPr('', 'pr add-A ').then(
    result => addStringPr(result, 'pr add-B ').then(
      result => addStringPr(result, 'pr add-C').then(
        result => console.log(result)
      )
    )
  )
}
// addAllPr();

// Here is a await style
// The "addStringPr" function stays the same as the Promise version.
async function addAllAwait() {
  let result = await addStringPr('', 'await add-A')
  result = await addStringPr(result, 'await add-B')
  result = await addStringPr(result, 'await add-C')
  console.log(result)
}
// addAllAwait();


//promise vocabulary
//
//                                fullfiled
//                            /
// promise       --> pending
//                            \
//                                rejected

