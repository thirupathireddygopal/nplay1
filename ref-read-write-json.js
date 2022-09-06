const fs = require('fs');

// obj
const tree = {
  width: 20,
  height: 28,
}
console.log(tree);
console.log(tree.height);

// tree string
const tree_str = JSON.stringify(tree);
console.log(tree_str);
const tree_obj = JSON.parse(tree_str);
console.log(tree_obj);

// reading from json file and printing onto console and writing down to json file using fs pkg
console.log(`read,write json file`);
const readjsonBuffer = fs.readFileSync('1-json.json');
const readjsonstr = readjsonBuffer.toString();
console.log(readjsonstr);
const readjsonobj = JSON.parse(readjsonstr);
console.log(readjsonobj);
readjsonobj.releaseYear = 1997; // added property to obj
const writestrobj = JSON.stringify(readjsonobj);
fs.writeFileSync('ref-json.json', writestrobj);

