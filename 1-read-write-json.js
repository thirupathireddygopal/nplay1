const fs = require('fs'); // reading json file and writing into json file using File System Module
const obj = {
  fn: 'thiru',
  ln: 'gopal',
  age: 28
}
console.log(obj);
console.log(obj.age);


let str = JSON.stringify(obj);
console.log(str);
console.log(str.fn); // undefined

const obj1 = JSON.parse(str);
console.log(obj1.age);

// book data stored as a javascript object
const book = {
  title: "my book1",
  author: "book1 author"
}

// goal is to convert book obj into json
// looks pretty much similar as js obj but the only difference all the 'single quotes' are converted into "double quotes" including keys(property names)
// bookJson is string but not object, if i try to access title it wont show up, we get undefined
const bookJson = JSON.stringify(book);
console.log(`bookjson: ${bookJson}`);

// convert jsonstring into obj using parse
// parsed Data is in deed a js obj
const parsedData = JSON.parse(bookJson);
console.log(`title: ${parsedData.title}`);


// saving json into a json file using fs module
// fs.writeFileSync('1-json.json', bookJson);

// reading json data from json file
const dataBuffer = fs.readFileSync('book.json');

console.log(dataBuffer); 
//<Buffer 7b 0d 0a 20 20 22 74 69 74 6c 65 22 3a 20 22 6d 79 20 62 6f 6f 6b 31 22 2c 0d 0a 20 20 22 61 75 74 68 6f 72 22 3a 20 22 62 6f 6f 6b 31 20 61 75 74 68 ... 6 more bytes>
// nothing but a byte data

const dataJSON = dataBuffer.toString(); //convert into standard string in javascript
const dataObj = JSON.parse(dataJSON); // convert from json string into an object
console.log(`book title: ${dataObj.title}`); // obj

var json2Obj = {
  name: 'thiru',
  age: 29
};
const json2strgfy = JSON.stringify(json2Obj);
console.log(`json2strfy: ${json2strgfy}`);
fs.writeFileSync('2-json.json', json2strgfy);

