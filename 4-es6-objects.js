// 1) object property short hand
const userName = 'thiru'
const userAge = 28

const user = {
  userName, // short hand syntax
  age: userAge,
  location: 'HYD'
}

console.log(user)

// 2) object destructring
const product = {
  label: 'vc platform',
  price: 300,
  stock: 2,
  salePrice: undefined
}

// const label = product.label;
// const price = product.price;
// object destructuring
const { label, price: productPrice, rating = 5 } = product;
console.log(label);
console.log(productPrice); // alias name
console.log(rating); //  undefined if not given any default value
// here we provided rating which is not a property of product and we are providing a "default value to 5"
// cont. if it is a property of product then it take product rating value

const transaction1 = (type, product) => {
  const { label, stock } = product
  console.log('transaction1: ', type, label, stock); // order vc platform 2
}
transaction1('order', product);

const transaction2 = (type, { label, stock }) => {
  console.log('transaction2: ', type, label, stock); // order vc platform 2
}
transaction2('order', product); // we will get response

// TypeError: Cannot destructure property 'label' of 'undefined' as it is undefined.
// transaction2('order'); // we will get an error if we don't provide product obj

// adding empty obj in place of product in order to not to get error
const transaction3 = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
}
transaction3('order')

const greet1 = (name1) => {
  console.log(name1)
}

// greet1('thiru'); // get thiru as response
// greet1() // gets undefined

const greet2 = (name1 = 'gopal', age) => {
  console.log(name1);
  console.log(age)
}

greet2('thiru',28);
greet2()
