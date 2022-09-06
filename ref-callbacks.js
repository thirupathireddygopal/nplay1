// callback function with asynchronous programming 
setTimeout(() => {
  console.log(`prints after 2 seconds`)
}, 2000);

// callback function with synchronous
const names = ['thirupathireddy', 'gopal', 'ohm', 'r.g']
const shortNames = names.filter((name) => {
  return name.length <= 5
})

console.log(shortNames)

const geocode1 = (address, callback) => {
  const data = {
    latitude: 0,
    longitude: 0
  }
  return data;
}

const data = geocode1('filodophia');
console.log(data);

const geocode2 = (agr1, callback) => {
  // to just look like asynchronous we are using node provide setTimeOut()
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    return data;
  }, 2000);
}

const data1 = geocode2('filodophia');
console.log(data1); // we will get undefined

// defined geocode3 function
const geocode3 = (arg1, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    callback(data)
  }, 2000);
}

geocode3('filodofia', (data) => {
  console.log(`data argument`)
  console.log(data)
})

// defined a add function
// defined a callback inside a add function
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
  console.log('print sum');
  console.log(sum)
})

// final defination
// Const geoCode = (address,callback)=>{

// }
// invoked or called geoCode function
// geoCode(‘philidopia’,(error,data)=>{
//    if(error){
//      return console.log(error)
//    }
//    do something, here we do not use else according to situation
// })

