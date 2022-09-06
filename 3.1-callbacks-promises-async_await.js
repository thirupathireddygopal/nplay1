function printStringCb(str1, str2, callback) {
  setTimeout(() => {
    console.log(str1);
    callback(str1 + str2);
  }, 2000);
}

function printAllCb() {
  printStringCb('A', 'B', (result1) => {
    printStringCb(result1, 'C', (result2) => {
      printStringCb(result2, 'D', (result3) => {
        console.log(`final callback: ${result3}`);
      })
    })
  })
}

// printAllCb();


function printStringPr(str1, str2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str1)
      resolve(str1 + str2);
    }, 2000);
  })
}

function printAllPr() {
  printStringPr('A', 'B').then((result1) => {
    printStringPr(result1, 'C').then((result2) => {
      printStringPr(result2, 'D').then((result3) => {
        console.log(`final promise: ${result3}`);
      })
    })
  })
}

// printAllPr();

async function printAllAA() {
  const result1 = await printStringPr('A', 'B');
  const result2 = await printStringPr(result1, 'C');
  const result3 = await printStringPr(result2, 'D');
  console.log(`final async await: ${result3}`);
}

printAllAA();
