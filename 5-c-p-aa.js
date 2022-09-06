// for same amount of time
const printString1 = (string) => {
  setTimeout(() => {
    console.log(string)
  }, 2000);
}

// printString1('static time A');
// printString1('static time B');
// printString1('static time C');


const printString2 = (string) => {
  setTimeout(() => {
    console.log(string)
  }, Math.floor(Math.random() * 100) + 1);
}

const printAllStr2 = () => {
  printString2('dynamic A');
  printString2('dynamic B');
  printString2('dynamic C');
}

// callbacks came into existance
const printStringCb = (string, callback) => {
  setTimeout(() => {
    // console.log(`cb string: ${string}`);
    callback(undefined, string);
  }, Math.floor(Math.random() * 100) + 1);
}

const printAllCb = () => {
  printStringCb('A', (error, result) => {
    if (result) {
      console.log(result);
      printStringCb('B', (error, result) => {
        if (result) {
          console.log(result);
          printStringCb('C', (err, result) => {
            if (result) {
              console.log(result);
            }
          })
        }
      })
    }
  })
}

// printAllCb();

// promises came into existance
const printStringPr = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve()
    }, Math.floor(Math.random() * 100) + 1);
  })
}

const printAllPr1 = () => {
  printStringPr('Pr1 A').then(() => {
    printStringPr('Pr1 B').then(() => {
      printStringPr('Pr1 C').then(() => {
      })
    })
  })
}

const printAllPr2 = () => {
  printStringPr('Pr2 A')
    .then(() => printStringPr('Pr2 B')
      .then(() => printStringPr('Pr3 C'))
    )
}

// printAllPr1();
// printAllPr2();

const printAllAwait = async () => {
  let str1 = await printStringPr('asaw A');
  let str2 = await printStringPr('asaw B');
  let str3 = await printStringPr('asaw C');
}
// printAllAwait();

// adding all strings using Callbacks, Promises and Async-Await styles
const addStrsCb = (string1, string2, callback) => {
  setTimeout(() => {
    callback(undefined, string1 + string2);
  }, Math.floor(Math.random() * 100) + 1);
}

const addAllCb = () => {
  addStrsCb('', 'cb A ', (error, result) => {
    if (result) {
      addStrsCb(result, 'cb B ', (error, result) => {
        if (result) {
          addStrsCb(result, 'cb C', (err, result) => {
            if (result) {
              console.log(result);
            }
          })
        }
      })
    }
  })
}

// addAllCb();

const addStrsPr = (string1, string2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(string1 + string2)
    }, Math.floor(Math.random() * 100) + 1);
  })

}

const addAllPr = () => {
  addStrsPr('', 'Pr A ')
    .then(result => addStrsPr(result, 'Pr B ')
      .then(result => addStrsPr(result, 'Pr C')
        .then(result => console.log(result))))
}

// addAllPr();

const addAllAwait = async () => {
  let result = await addStrsPr('', 'Await A ');
  let result1 = await addStrsPr(result, 'Await B ');
  let result2 = await addStrsPr(result1, 'Await C');
  console.log(result2);
}

addAllAwait();