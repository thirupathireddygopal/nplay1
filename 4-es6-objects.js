const product = {
  label: 'platform',
  price: 300,
  stock: 2,
  salePrice: undefined
}

const call = (type, product) => {
  const { label, stock } = product // object destructring
  console.log('call: ', type, label, stock); // order pen platform 2
}
call('pen', product);

// object destructring
const order = (type, { label, stock }) => {
  console.log('order: ', type, label, stock); // order book platform 2
}
order('book', product); // we will get response
// order('book'); // we will get an error if we don't provide product obj, TypeError: label undefined 

// adding empty obj in place of product in order to not to get error
const list = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
}
list('orders')

