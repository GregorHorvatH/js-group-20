'use strict';

// ========================================
/* Цепочки методов массива */
// ========================================
// const arr = [1, 2, 3, 4, 5, 6, 7];

// // 1. filter > 4
// // 2. item * 2
// // 3. sum

// // v1
// const filteredArray = arr.filter(item => item > 4);
// const multiply = filteredArray.map(item => item * 2);
// const sum = multiply.reduce((acc, item) => acc + item);

// console.log(sum);

// // v2
// const result = arr
//   .filter(item => item > 4) // []
//   .map(item => item * 2) // []
//   .reduce((acc, item) => acc + item);

// console.log(result);

// ========================================
/* Examples */
// ========================================
import users from './users.js'; // eslint-disable-line

// ========================================
// get all user emails
// ========================================
// console.log(users.map(user => user.email));

// ========================================
// get all users who have friend "Sharron Pace"
// ========================================
// console.log(users.filter(user => user.friends.includes('Sharron Pace')));

// ========================================
// find user who have skills: ipsum
// ========================================
// console.log(users.filter(user => user.skills.includes('ipsum')));

// ========================================
// get all users minimum age
// ========================================
// console.log(users.reduce((acc, user) => (user.age < acc.age ? user : acc)));

// ========================================
// get all users maximum age
// ========================================
// console.log(users.reduce((acc, user) => (user.age > acc.age ? user : acc)));

// ========================================
// get all users total age
// ========================================
// console.log(users.reduce((acc, user) => acc + user.age, 0));

// ========================================
// get unique eyes color list
// ========================================
// console.log(
//   users
//     .map(user => user.eyeColor)
//     .filter((item, index, arr) => index === arr.indexOf(item)),
// );

// console.log(Array.from(new Set(users.map(user => user.eyeColor))));

// ========================================
// reverse string
// ========================================
// const text = 'abc'; // cba

// console.log(
//   text
//     .split('')
//     .reverse()
//     .join(''),
// );

// ========================================
// is palindrome
// ========================================
// const isPalindrome = str => {
//   const clearText = str.toLowerCase().replace(/[ ,]/g, '');
//   const reversedText = clearText
//     .split('')
//     .reverse()
//     .join('');

//   return reversedText === clearText;
// };

// console.log(isPalindrome('A man, a plan, a canal Panama'));
// console.log(isPalindrome('Never odd or even'));

// ========================================
// https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript
// ========================================
// function sortReindeer(reindeerNames) {
//   return reindeerNames.sort((a, b) => {
//     const name1 = a.split(' ')[1];
//     const name2 = b.split(' ')[1];

//     if (name2 > name1) {
//       return -1;
//     }

//     if (name2 < name1) {
//       return 1;
//     }

//     return 0;
//   });
// }

// const input = [
//   'Dasher Tonoyan',
//   'Dancer Moore',
//   'Prancer Chua',
//   'Vixen Hall',
//   'Comet Karavani',
//   'Cupid Foroutan',
//   'Donder Jonker',
//   'Blitzen Claus',
// ];

// console.log(sortReindeer(input));

// ========================================
// https://www.codewars.com/kata/56c5847f27be2c3db20009c3/train/javascript
// ========================================
// const fruits = {
//   1: 'kiwi',
//   2: 'pear',
//   3: 'kiwi',
//   4: 'banana',
//   5: 'melon',
//   6: 'banana',
//   7: 'melon',
//   8: 'pineapple',
//   9: 'apple',
//   10: 'pineapple',
//   11: 'cucumber',
//   12: 'pineapple',
//   13: 'cucumber',
//   14: 'orange',
//   15: 'grape',
//   16: 'orange',
//   17: 'grape',
//   18: 'apple',
//   19: 'grape',
//   20: 'cherry',
//   21: 'pear',
//   22: 'cherry',
//   23: 'pear',
//   24: 'kiwi',
//   25: 'banana',
//   26: 'kiwi',
//   27: 'apple',
//   28: 'melon',
//   29: 'banana',
//   30: 'melon',
//   31: 'pineapple',
//   32: 'melon',
//   33: 'pineapple',
//   34: 'cucumber',
//   35: 'orange',
//   36: 'apple',
//   37: 'orange',
//   38: 'grape',
//   39: 'orange',
//   40: 'grape',
//   41: 'cherry',
//   42: 'pear',
//   43: 'cherry',
//   44: 'pear',
//   45: 'apple',
//   46: 'pear',
//   47: 'kiwi',
//   48: 'banana',
//   49: 'kiwi',
//   50: 'banana',
//   51: 'melon',
//   52: 'pineapple',
//   53: 'melon',
//   54: 'apple',
//   55: 'cucumber',
//   56: 'pineapple',
//   57: 'cucumber',
//   58: 'orange',
//   59: 'cucumber',
//   60: 'orange',
//   61: 'grape',
//   62: 'cherry',
//   63: 'apple',
//   64: 'cherry',
//   65: 'pear',
//   66: 'cherry',
//   67: 'pear',
//   68: 'kiwi',
//   69: 'pear',
//   70: 'kiwi',
//   71: 'banana',
//   72: 'apple',
//   73: 'banana',
//   74: 'melon',
//   75: 'pineapple',
//   76: 'melon',
//   77: 'pineapple',
//   78: 'cucumber',
//   79: 'pineapple',
//   80: 'cucumber',
//   81: 'apple',
//   82: 'grape',
//   83: 'orange',
//   84: 'grape',
//   85: 'cherry',
//   86: 'grape',
//   87: 'cherry',
//   88: 'pear',
//   89: 'cherry',
//   90: 'apple',
//   91: 'kiwi',
//   92: 'banana',
//   93: 'kiwi',
//   94: 'banana',
//   95: 'melon',
//   96: 'banana',
//   97: 'melon',
//   98: 'pineapple',
//   99: 'apple',
//   100: 'pineapple',
// };

// // n >= 10 and n < 10000
// function SubtractSum(n) {
//   const key =
//     n -
//     n
//       .toString()
//       .split('')
//       .reduce((acc, item) => acc + Number(item), 0);

//   return fruits[key] ? fruits[key] : 1;
// }

// console.log(SubtractSum(10)); // 9
// console.log(SubtractSum(132)); // 18

// ========================================
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
// ========================================
// function solve(a, b) {
//   return [
//     ...a.split('').filter(item => !b.includes(item)),
//     ...b.split('').filter(item => !a.includes(item)),
//   ].join('');
// }

// console.log(solve('xyab', 'xzca'));

// ========================================
// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
// ========================================
// const obj = {};
// obj[3] = 'three';
// obj[1] = 'one';
// obj[2] = 'two';

// console.log(obj);

// const map = new Map();
// map.set(3, 'three');
// map.set(1, 'one');
// map.set(2, 'two');

// console.log(map);

function orderedCount(text) {
  return Array.from(
    text
      .split('')
      .reduce(
        (acc, letter) =>
          acc.set(letter, acc.has(letter) ? acc.get(letter) + 1 : 1),
        new Map(),
      ),
  );
}

// [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount('abracadabra'));
