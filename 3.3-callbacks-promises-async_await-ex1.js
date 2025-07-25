// ======== ex1 ========
const pingMe = new Promise((resolve, reject) => {
  if (true) {
    resolve('resolve')
  }
  else {
    reject('false')
  }
});

pingMe.then(result => {
  console.log(result);
}).catch(err => {
  console.log(err)
});

// ============ ex2 =========
// async-await
async function doWork1() {
  // return a promise based response
  return 'learning, understanding and typing...'
}

async function doWork2() {
  // return a promise based response
  throw new Error('something went wrong...')
}

function work1() {
  doWork1().then(result => {
    console.log('result: ', result)
  }).catch(e => {
    console.log('e', e);
  })
}
work1();

function work2() {
  doWork2().then(result => {
    console.log('result: ', result)
  }).catch(e => {
    console.log('e', e);
  })
}
work2();

// ========= ex3 =========
const add_promise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        // directly redirecting to out of function
        return reject('please provide +ve integer')
      }
      resolve(a + b);
    }, Math.floor(Math.random() * 100) + 1);
  })
}

// always retruns promsie
const addNums = async () => {
  let sum1 = await add_promise(1, 2);
  let sum2 = await add_promise(sum1, 3);
  // let sum3 = await add(sum2, 2);
  let sum3 = await add_promise(sum2, -2);
  return sum3
}

addNums().then(result => {
  console.log('add num result', result);
}).catch(e => {
  console.log('add number error', e)
})

// const callMe = async () => {
//   if (true) {
//     return 'Hello!'
//   }
//   else {
//     return 'switched off'
//   }
// }

// const parent1 = async () => {
//   console.log('entered into parent1...')
//   return await callMe()
// }

// (async () => {
//   let result = await parent1();
//   console.log(result);
//   console.log(await parent1())
// })

// ============================
