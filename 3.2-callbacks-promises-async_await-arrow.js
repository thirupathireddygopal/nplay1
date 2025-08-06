// print a string after a random amount of time
const printString = (string) => {
  setTimeout(() => {
    console.log(string)
  }, Math.floor(Math.random() * 100) + 1)
}

const printAll = () => {
  printString("A");
  printString("B");
  printString("c");
}
// printAll();

// Callbacks
const printStringCb = (string, callback) => {
  setTimeout(() => {
    console.log(string);
    callback()
  }, Math.floor(Math.random() * 100) + 1);
}

const printAllCb = () => {
  printStringCb("callback A", () => {
    printStringCb("callback B", () => {
      printStringCb("callback C", () => {

      })
    })
  })
}
// printAllCb()

// this add took 2 arguments depends on requirement
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

// Promises
const printStringPr = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve()
    }, Math.floor(Math.random() * 100) + 1);
  })
}

const printAllPr1 = () => {
  printStringPr("promise A")
    .then(() => {
      return printStringPr("promise B")
        .then(() => {
          return printStringPr("promise C")
        })
    })
}

const printAllPr2 = () => {
  printStringPr("promise A")
    .then(() => printStringPr("promise B"))
    .then(() => printStringPr("promise C"))
}

// printAllPr1();
// printAllPr2();

// Async-Await
const printAllAwait = async () => {
  await printStringPr("async-await A");
  await printStringPr("async-await B");
  await printStringPr("async-await C");
}

// printAllAwait();

// ==============================

// BUT WAIT THERE'S MORE
// The printString function doesn’t return anything and is independent, all we cared about was the order. But what if you wanted to take the output of the first function, do something with it in the second function, and then pass it to the third function?
// Instead of printing the string each time, let’s make a function that will concatenate the string and pass it on.

// Here it is in callback style:
const addStringCb = (previous, current, callback) => {
  setTimeout(() => {
    callback((previous + '' + current))
  }, Math.floor(Math.random() * 100) + 1)
}

// And in order to call it:
const addAllCb = () => {
  addStringCb('', 'cb add-A ', (result) => {
    addStringCb(result, 'cb add-B ', (result) => {
      addStringCb(result, 'cb add-C', (result) => {
        console.log(result) // prints out ABC
      })
    })
  })
}
// addAllCb()

// Here is a promise style
const addStringPr = (str1, str2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((str1 + '' + str2))
    }, Math.floor(Math.random() * 100) + 1);
  })
}

const addAllPr = () => {
  addStringPr('', 'prom add-A ').then(
    result => addStringPr(result, 'prom add-B ').then(
      result => addStringPr(result, 'prom add-C').then(
        result => console.log(result)
      )
    )
  )
}
// addAllPr();

// Here is a await style
// The "addStringPr" function stays the same as the Promise version.
const addAllAwait = async () => {
  let result = await addStringPr('', 'await add-A ')
  result = await addStringPr(result, 'await add-B ')
  result = await addStringPr(result, 'await add-C')
  console.log(result)
}

addAllAwait();


//promise vocabulary
//
//                                fullfiled
//                            /
// promise       --> pending
//                            \
//                                rejected
