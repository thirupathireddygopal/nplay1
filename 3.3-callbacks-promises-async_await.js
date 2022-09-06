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

const callMe = async () => {
  if (true) {
    return 'Hello!'
  }
  else {
    return 'switched off'
  }
}

const parent = async () => {
  return await callMe()
}

(async () => {
  console.log(await parent())
})