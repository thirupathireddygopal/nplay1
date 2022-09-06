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
console.log(productPrice);
console.log(rating); //  undefined if not given any default value
// here we provided rating which is not a property of product and we are providing a "default value to 5", if it is a property of product then it take product rating value

const transaction1 = (type, productObj1) => {
  const { label, stock } = productObj1
  console.log(type, label, stock)
}
// transaction1('order', product)

const transaction2 = (type, { label, stock }) => {
  console.log(type, label, stock)
}
transaction2('order', product); // we will get response
// transaction2('order') // here in place of product we will error in order to avoid we provide empty object

const transaction3 = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
}
transaction3('order')



