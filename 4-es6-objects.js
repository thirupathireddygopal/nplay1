// To extract the name property from the emp object using object destructuring without using dot (.) notation
// you can use destructuring directly like this:
const name = "Thiru";
const emp = {
  name: 'ravi',
  age: 30
}
/**
 * ⚠️ Note: In your code, there's also a const name = "Thiru"; already declared. 
 * If you try to destructure name again, you'll get a conflict:
 */
// here we can get "age" since it is not declared outside but not name
// const { name, age } = emp; // ❌ SyntaxError: Identifier 'name' has already been declared
// ✅ To avoid this conflict, you can use aliasing:
const { name: empName, rating = 5 } = emp;
console.log(empName); // alias name is "empName", Output: "ravi"

// example 2:
const item = {
  price: 300,
  stock: 2,
  salePrice: undefined
}
const call = (param1, item) => {
  const { stock } = item // object destructring
  console.log(param1, stock); // order pen platform 2
}
call('pen', item);

// object destructring
const order = (param2, { stock }) => {
  console.log(param2, stock); // order book platform 2
}
order('book', item); // we will get response
// order('book'); // we will get an error if we don't provide item obj, TypeError: label undefined 

