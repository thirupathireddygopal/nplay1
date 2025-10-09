// [abc] >> a (or) b (or) c
// [^abc] >>  except a (or) b (or) c
// [a-z A-Z 0-9] >> accepts all small,captial and numbers
// []? >> 0 or 1 times
// []+ >> at 1 or more times
// []* >> 0 or more times
// []{n} >> occur n times
// []{n,} >> occur n or more times
// []{x,y} >> occur atleast x times but less than y times

// .exec() >> retrn arr or null
let regex1 = /ab/;
console.log(regex1.exec('absorb the Attention'));
let str1 = 'hi this is thiru';
let regex3 = /^thi/g;
console.log('starts: ' + regex3.exec('this is thiru'));
let regex4 = /is$/g;
console.log('ends: ' + regex4.exec('this is thiru'));
// accepts only one character
let regex5 = /go.al/; 
console.log('dot: ' + regex5.exec('gopal'));
let regex6 = /go*al/; 
console.log('dot: ' + regex6.exec('golmal'));

// .test() >> return true or false
let regex2 = /thi/i;
console.log(regex2.test('hi This is Thiru'));

// str1.match(regex) >> retrun arr or null
// str1.replace(regex) 
// str1.search(regex) >> retrun index where it find