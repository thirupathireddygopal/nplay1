const obj = {
  fn: 'thiru',
  ln: 'gopal',
  age: 28
}
console.log(obj); // { fn: 'thiru', ln: 'gopal', age: 28 }

let str = JSON.stringify(obj); // double quotes
console.log(str); // {"fn":"thiru","ln":"gopal","age":28}
console.log(str.fn); // undefined

const obj1 = JSON.parse(str);
console.log(obj1.age); // 28

const fs = require('fs'); // reading json file and writing into json file using File System Module
// book data stored as a javascript object
const book = {
  title: "2 states",
  author: "Chetan Bhagat"
}
// convert js obj to json
const bookJson = JSON.stringify(book);
fs.writeFileSync('author.json', bookJson); // saving json into a json file using fs module

// reading json data from json file
const dataBuffer = fs.readFileSync('book.json');
console.log(dataBuffer);
//<Buffer 7b 0d 0a 20 20 22 74 69 74 6c 65 22 3a 20 22 6d 79 20 62 6f 6f 6b 31 22 2c 0d 0a 20 20 22 61 75 74 68 6f 72 22 3a 20 22 62 6f 6f 6b 31 20 61 75 74 68 ... 6 more bytes>
// nothing but a byte data
const dataJSON = dataBuffer.toString(); //convert into standard string in javascript
const dataObj = JSON.parse(dataJSON); // convert from json string into an object
console.log(`book title: ${dataObj.title}`); // obj

