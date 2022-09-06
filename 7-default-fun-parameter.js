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