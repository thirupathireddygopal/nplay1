// Palindrome >> reverse of number is same
// Anagram >> creative, reactive 
// amstrong number >> 153 == 1pow3 + 5pow3 + 3pow3
// Natural Numbers >> 1,2,.... +ve integers
// whole numbers >> 0,1,2,...

const child = {
  arg1: 2,
  arg2: 3,
  // es5
  add: function (a, b) {
    return a + b
  },
  //es6
  mul() {
    return this.arg1 * this.arg2;
  },
  firstDigit(num) { // 3456 >> 4-1 = 3
    let length = ('' + num).length;
    // console.log('length: ' + length);
    // console.log('first divnum: ' + num / Math.pow(10, length - 1));
    let first_digit = Math.floor(num / Math.pow(10, length - 1));
    // let first_digit = parseInt(num / Math.pow(10, length - 1)); // use when number is in string type
    return first_digit;
  },
  lastDigit(num) {
    let last_digit = num % 10;
    console.log(last_digit);
    return last_digit;
  },
  last_nth_digit(num, n) { // 3456, 2
    let lastnum = Math.floor(num / Math.pow(10, n - 1)); // trims digits upto digits we need which is included
    console.log(`last digit number: ${lastnum}`);
    let nthDigit = lastnum % 10; // get the required digit
    console.log(`nth digit: ${nthDigit}`);
    return nthDigit;
  },
  swapNumber(a, b) {
    let temp = b;
    b = a;
    a = temp;
    return [a, b];
  },
  isEvenOdd(num) {
    if (num / 2 == 0) {
      return true;
    }
    return false
  },
  largestOf3(a, b, c) {
    let big = a;
    if (b > big) {
      big = b
    }
    if (c > big) {
      big = c;
    }
    return big;
  },
  getSumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum = sum + num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  },
  isPalindromeNum_reverse(num) { // 35453
    let length = ('' + num).length;
    let first_digit = parseInt(num / Math.pow(10, length - 1));
    let last_digit = num % 10;
    console.log(`first_digit: ${first_digit}`);
    console.log(`last_digit: ${last_digit}`);
    if (first_digit != last_digit) {
      return 'Not a palindrome';
    }
    else {
      //345
      let intialNum = num;
      let reverseNum = 0;
      while (num > 0) {
        let rem = num % 10;
        reverseNum = (reverseNum * 10) + rem;
        console.log(`reverse num: ${reverseNum}`);
        num = Math.floor(num / 10);
      }
      if (intialNum == reverseNum) {
        return 'It is a palindrome';
      }
      return 'Not a palindrome';
    }
  },
  printFactorial(num) { // 5
    let str = '';
    let result = 1;
    while (num > 0) {
      result = result * num;
      str += num + 'x';
      num = num - 1;
    }
    return [str, result];
  },
  /**
  | Input | `num / 2` Checks | `Math.sqrt(num)` Checks |
  | ----- | ---------------- | ----------------------- |
  | 101   | \~49 checks      | \~10 checks             |
  | 1009  | \~504 checks     | \~32 checks             |
  | 99991 | \~49995 checks   | \~316 checks - 316.21353544717215           |
  */
  isPrime(n) { // more optimized and concise solution 
    if (n <= 1) return false; // 0 and 1 are not prime
    if (n === 2) return true; // 2 is prime
    if (n % 2 === 0) return false; // eliminate even numbers
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  },
  isPrime2(num) { // less optimized
    let halfNum = parseInt(num / 2);
    console.log(halfNum);
    for (let i = 2; i <= halfNum; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  },
  nextPrime(num) {
    num = num + 1;
    while (num > 0) {
      if (this.isPrime(num)) {
        return num;
      }
      num++;
    }
  },
  isStringPalindrome(str) {
    let reverseStr = ('' + str).split('').reverse().join('');
    console.log(`reverseStr: ${reverseStr}`);
    if (str === reverseStr) {
      return `It's a string palindrome`;
    }
    return `Not a string palindrome`;
  },
  printTable(num) {
    let str = '';
    for (let i = 1; i <= 10; i++) {
      str += `${num} x ${i} = ${num * i}` + '\n';
    }
    return str;
  },
  printMulTables(num1, num2) {
    let str = '';
    for (let i = num1; i <= num2; i++) {
      for (let j = 1; j <= 10; j++) {
        str += `${i} x ${j} = ${i * j}\n`
      }
      str += '\n';
    }
    return str;
  },
  starPattern1(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
        str += '*'
      }
      str += '\n'
    }
    return str;
  },
  starPattern2(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
      for (let j = num; j >= i; j--) {
        str += '-'
      }
      for (let k = 1; k <= i; k++) {
        str += ' *'
      }
      str += '\n';
    }
    return str;
  },
  polygonPattern(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
      for (let j = num; j >= i; j--) {
        str += '-'
      }
      for (let k = 1; k <= i; k++) {
        str += ' *'
      }
      str += '\n'
    }
    for (let i = num - 1; i >= 1; i--) {
      for (let j = 0; j <= num - i; j++) {
        str += '-';
      }
      for (let k = i; k >= 1; k--) {
        str += ' *';
      }
      str += '\n'
    }
    return str;
  },
  boxPattern(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        if (i == 1 || j == 1 || i == num || j == num) {
          str += 'A'
        }
        else {
          str += '*'
        }
      }
      str += '\n'
    }
    return str;
  },
  numPattern(num) {
    let str = '';
    let temp = 1;
    for (let i = 1; i <= num; i++) {
      for (let j = num; j >= i; j--) {
        str += '-'
      }
      for (let k = 1; k <= i; k++) {
        str += ` ${temp}`;
        temp++;
      }
      str += '\n'
      console.log(`temp: ${temp}`);
    }
    return str;
  },
  numPattern2(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
      for (let j = num; j >= i; j--) {
        str += '-';
      }
      for (let k = 1; k <= i; k++) {
        str += k;
      }
      for (let l = i - 1; l >= 1; l--) {
        str += l;
      }
      str += '\n'
    }
    return str;
  },
  numPattern3(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        if (i == 1 || i == num || j == 1 || j == num) {
          str += num;
        }
        else {
          str += num - 1;
        }
      }
      str += '\n';
    }
    return str;
  },
  charPattern(num) {
    let str = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charArr = characters.split('');
    for (let i = 1; i <= num; i++) {
      for (let j = i; j <= num; j++) {
        str += '-';
      }
      for (let k = 1; k <= i; k++) {
        str += charArr[k - 1]
      }
      for (let l = i - 1; l >= 1; l--) {
        str += charArr[l - 1]
      }
      str += '\n';
    }
    return str;
  },
  bigDigitInNumber(num) {
    let big = 0;
    while (num > 0) {
      let rem = num % 10;
      if (rem > big) {
        big = rem;
      }
      num = parseInt(num / 10);
    }
    return big;
  },
  secondBigDigitInNum(num) {
    let firstBig = 0;
    let secondBig = 0;
    while (num > 0) {
      let rem = num % 10;
      if (rem > firstBig) {
        firstBig = rem;
      }
      if (rem < firstBig && rem > secondBig) {
        secondBig = rem
      }
      num = parseInt(num / 10);
    }
    return `firstBig: ${firstBig}, secondBig: ${secondBig}`;
  },
  searchInArray(num, value) {
    let numArr = ('' + num).split('');
    for (let i = 0; i < numArr.length; i++) {
      if (parseInt(numArr[i]) == value) {
        return `Num found in Array`;
      }
    }
    return `Num not found`;
  },
  smallestInArray(arr) {
    let sortedArr = arr.sort();
    console.log(sortedArr);
    return sortedArr[0];
  },
  sortArrayInAsend(arr) {
    let smallest = 0;
    // iterating upto last 2 place
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          smallest = arr[j];
          arr[j] = arr[i];
          arr[i] = smallest;
        }
      }
    }
    return `sortArrayInAsend order: ${arr}`;
  },
  //big to small
  sortArrayInDesend(arr) {
    let smallest = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          smallest = arr[i];
          arr[i] = arr[j];
          arr[j] = smallest;
        }
      }
    }
    return arr;
  },
  spinningArr_nTimes(arr, times) {
    for (let i = 1; i <= times; i++) {
      // console.log(`i value: ${i}`);
      console.log(arr.length);
      let lastElement = arr[arr.length - 1];
      for (let j = arr.length - 1; j >= 1; j--) {
        arr[j] = arr[j - 1];
        if (j == 1) {
          arr[0] = lastElement;
        }
      }
      // console.log(`arr: ${arr}`);
    }
    return arr;
  },
  reverseArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lastElement = arr[arr.length - 1];
      for (let j = arr.length - 1; j >= 1; j--) {
        arr[j] = arr[j - 1]
        if (j == 1) {
          arr[0] = lastElement;
        }
      }
      // console.log(arr);
    }
    return arr;
  },
  // filter unique elements>>(which has no duplication)
  uniqueElementsInArr(arr) {
    let uniArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!uniArr.includes(arr[i])) {
        uniArr.push(arr[i]);
      }
      else {
        console.log('elements: ' + arr[i]);
      }
    }
    return uniArr;
  },
  zerosInNum(num) {
    if (num == 0) {
      return 1;
    }
    count = 0;
    while (num > 0) {
      if (num % 10 == 0) {
        count++;
      }
      num = parseInt(num / 10);
    }
    return count;
  },
  zerosInArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (this.zerosInNum(arr[i]) > 0) {
        count++;
      }
    }
    return count;
  },
  vowelCountInStr(str) {
    let count = 0;
    let strArr = ('' + str).split('');
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < strArr.length; i++) {
      if (vowels.includes(strArr[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  },
  reverseStrStartWordCapital(str) {
    let strArr = ('' + str).split(' ');
    let result = ''
    for (let i = 0; i < strArr.length; i++) {
      let elements = strArr[i].split('').reverse();
      let capitalDigit = elements[0].toUpperCase();
      // console.log(elements.join('').slice(1))
      result += capitalDigit + elements.join('').slice(1);
      result += ' '
    }
    return result;
  },
  countCapSmallCharsInStr(str) {
    let smallCount = 0, capitalCount = 0, symbolcount = 0;
    let smallstr = 'abcdefghijklmnopqrstuvwxyz';
    let capstr = smallstr.toUpperCase();
    let strArr = ('' + str).split('');
    for (let i = 0; i < strArr.length; i++) {
      if (smallstr.includes(strArr[i])) {
        smallCount++;
      }
      else if (capstr.includes(strArr[i])) {
        capitalCount++;
      }
      else {
        symbolcount++;
      }
    }
    return `smallLetters: ${smallCount}, capital letters: ${capitalCount}, special chars: ${symbolcount}`
  },
  largestSubstringOfsentence(str) {
    let strArr = ('' + str).split(' ');
    let largeststr;
    let strLength = 0;
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length > strLength) {
        strLength = strArr[i].length;
        largeststr = strArr[i]
      }
    }
    return largeststr;
  },
  stringAnagram(str1, str2) {
    let str1Sorted = ('' + str1).split('').sort().join('');
    let str2Sorted = ('' + str2).split('').sort().join('');
    if (str1Sorted == str2Sorted) {
      return `They are anagrams`
    }
    return `they are not an anagrams`
  },
  getNextHundered(num) {
    if (num > 100) {
      let divNum = parseInt(num / 100);
      let nextNumMul = divNum * 100;
      console.log(`nextNumMul: ${nextNumMul}`);
      return `next hundered: ${nextNumMul + 100}`;
    }
    return `next hundered: 100`;
  },
  getNaturalNumbers(num1, num2) {
    let numArr = [];
    for (let i = num1; i <= num2; i++) {
      numArr.push(i)
    }
    return numArr;
  },
  printFabonacci(times) {
    let first = 0;
    let second = 1;
    let result = 0;
    let str = `${first}, ${second}`;
    for (let i = 1; i <= times; i++) {
      result = first + second;
      first = second;
      second = result;
      str += `, ${result}`
    }
    return str;
  },
  /*
   * sun = 0 , mon = 1,..sat = 6
    <0 >6 ==> invalid
    >0 && <6 && onVac true ==> OFF
    >0 && >6 && onVac false ==> 7am
    == 0 || == 6  && onVac true ==> OFF
    == 0 || == 6 && onVac false ==> 10AM
  */
  ringAlarm(dayOfTheWeek, onVac) {
    if (dayOfTheWeek < 0 || dayOfTheWeek > 6) {
      return 'INVALID INPUT'
    }
    if ((dayOfTheWeek > 0 && dayOfTheWeek < 6) && onVac == true) {
      return 'OFF'
    }
    if ((dayOfTheWeek > 0 && dayOfTheWeek < 6) && onVac == true) {
      return 'OFF'
    }
    if ((dayOfTheWeek > 0 && dayOfTheWeek < 6) && onVac == false) {
      return '4:30AM'
    }
    if ((dayOfTheWeek == 0 && dayOfTheWeek == 6) && onVac == true) {
      return 'OFF'
    }
    if ((dayOfTheWeek == 0 && dayOfTheWeek == 6) && onVac == false) {
      return '6:30AM'
    }
  },
  roundingNext10thDigit(num) {
    let result = 0;
    if (num % 10 == 0) {
      result = num
    }
    else {
      num = parseInt(num / 10) * 10 + 10;
      result = num;
    }
    return result;
  },
  isAmstrongNumber(num) {
    let result = 0;
    let intialNum = num;
    let length = ('' + num).length;
    while (num > 0) {
      let rem = num % 10;
      let power = Math.pow(rem, length);
      result += power;
      num = parseInt(num / 10);
    }
    if (result == intialNum) {
      return 'Amstrong Number';
    }
    else {
      return 'Not an Amstrong Number';
    }
  }

}
console.log(child.arg1);
console.log(child.add(2, 3));
console.log(child.mul());
console.log('first digit: ' + child.firstDigit(3456));
console.log('last digit: ' + child.lastDigit(3456));
console.log('last nth digit: ' + child.last_nth_digit(3456, 2));
console.log('swap Numbers: ' + child.swapNumber(345, 999));
console.log('isEvenOdd: ' + child.isEvenOdd(345));
console.log('largestof3: ' + child.largestOf3(9, 4, 15));
console.log('sumofDigitsInNum: ' + child.getSumOfDigits(345));
console.log('isNumPalindrome: ' + child.isPalindromeNum_reverse(35453));
console.log('isStringPalindrome: ' + child.isStringPalindrome('farmer'));
console.log('printTable: ' + child.printTable(3));
console.log('printMulTable: ' + child.printMulTables(3, 4));
console.log('factorial: ' + child.printFactorial(5));
console.log('Is a primeNumber: ' + child.isPrime2(13));
console.log(child.isPrime(7));  // true
console.log(child.isPrime(10)); // false
console.log(child.isPrime(2));  // true
console.log('Next primeNumber: ' + child.nextPrime(13));
console.log(child.starPattern1(5));
console.log(child.starPattern2(5));
console.log(child.polygonPattern(5));
console.log(child.boxPattern(5))
console.log(child.numPattern(5))
console.log(child.numPattern2(5));
console.log(child.numPattern3(5))
console.log(child.charPattern(5));
console.log(child.bigDigitInNumber(7896))
console.log(child.secondBigDigitInNum(7897));
console.log(child.searchInArray(2345, 7))
console.log(child.smallestInArray([8, 7, 2, 5, 4]));
console.log(child.sortArrayInAsend([8, 7, 2, 5, 4]));
console.log(child.sortArrayInDesend([10, 2, 30, 4, 5]));
console.log(child.spinningArr_nTimes([1, 2, 3, 4, 5], 3));
console.log(child.reverseArr([1, 2, 3, 4, 5]));
console.log(child.uniqueElementsInArr([1, 4, 2, 3, 2]));
console.log(child.zerosInNum(50505));
console.log(child.zerosInArr([20, 1, 3, 100]));
console.log(child.vowelCountInStr('ThIrUpAthIreddy'))
console.log(child.reverseStrStartWordCapital('hello world'));
console.log(child.countCapSmallCharsInStr('Asd123!@#'));
console.log(child.largestSubstringOfsentence('hi this is Thirupathireddy'));
console.log(child.stringAnagram('creative', 'reactive'))
console.log(child.getNextHundered(2369));
console.log(child.getNaturalNumbers(23, 30));
console.log(child.printFabonacci(10));
console.log(child.ringAlarm(3, true));
console.log(child.roundingNext10thDigit(89879));
console.log(child.isAmstrongNumber(153));

// circle area pi*r2
radius = 3;
console.log(`circle area: ${(Math.PI) * (Math.pow(radius, 2))}`);
