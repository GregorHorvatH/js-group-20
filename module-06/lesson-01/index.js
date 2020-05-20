'use strict';

import users from './users.js'; // eslint-disable-line

// ========================================
/* Чистые функции */
// ========================================
// - no motations
// - the same result with the same params
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 1));
// console.log(sum(2, 2));

// sort
// function mySort(arr) {
//   const result = [...arr];
//   return result.sort();
// }

// const arr = [2, 5, 1, 8, 10];
// const newArr = mySort(arr);

// console.log(arr);
// console.log(newArr);

// ========================================
/* forEach */
// ========================================
// console.log(users);

// users.forEach((item, idx, arr) => {
//   users[idx].name = `dr.${item.name}`; // DON'T DO IT
//   console.log(item.name);
// });

// console.log(users);

// ========================================
/* map */
// ========================================
// ==== imperative ====
// function myMap(array, callback) {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(callback(array[i]));
//   }

//   return result;
// }

// const arr = [1, 2, 3, 4];
// const newArray = myMap(arr, item => {
//   return `<li>${item}</li>`;
// });

// console.log(arr);
// console.log(newArray);

// ==== declarative ====
// const newArray2 = arr.map(item => item * 2);

// console.log(arr);
// console.log(newArray2);

// ==== get user eye color ====
// console.log(
//   users.map(user => ({
//     name: user.name,
//     eyeColor: user.eyeColor,
//   })),
// );

// ========================================
/* filter */
// ========================================
// ==== imperative ====
// function myFilter(array, callback) {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) {
//       result.push(array[i]);
//     }
//   }

//   return result;
// }

// console.log(myFilter(users, ({ balance }) => balance > 3000));

// ==== declarative ====
// console.log(users.filter(({ balance }) => balance > 3000));

// const arr = [
//   {
//     name: 'Bobby',
//   },
//   {
//     name: 'Peter',
//   },
//   {
//     name: 'Chris',
//   },
// ];
// console.log(arr);

// const newArray = arr.filter(user => user.name !== 'Peter');
// console.log(newArray);

// ========================================
/* find */
// ========================================
// ==== imperative ====
// function myFind(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) {
//       return array[i];
//     }
//   }

//   return undefined;
// }
// console.log(myFind(users, user => user.eyeColor === 'green'));

// ==== declarative ====
// console.log(
//   users.find(user => user.id === '334f8cb3-eb04-45e6-abf4-4935dd439b70'),
// );

// ========================================
/* every */
// ========================================
// console.log(users);
// console.log(
//   users.every(user => user.id === '334f8cb3-eb04-45e6-abf4-4935dd439b70'),
// );
// console.log(users.every(user => user.age > 18));

// const arr = [
//   {
//     name: 'Bobby',
//     sex: 'male',
//   },
//   {
//     name: 'Peter',
//     sex: 'male',
//   },
//   {
//     name: 'Chris',
//     sex: 'male',
//   },
//   {
//     name: 'Eva',
//     sex: 'female',
//   },
// ];
// console.log(arr.every(user => user.sex === 'male'));

// ========================================
/* some */
// ========================================
// console.log(users);
// console.log(users.some(user => user.eyeColor === 'blue'));
// console.log(users.some(user => user.eyeColor === 'red'));

// ========================================
/* reduce */
// ========================================
// const arr = [1, 2, 3, -100, 100];

// ==== imperative ====
// function mySum(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum;
// }

// console.log(mySum(arr));

// ==== declarative ====
// sum
// console.log(arr.reduce((acc, item) => acc + item, 0));

// // min
// console.log(arr.reduce((acc, item) => (item < acc ? item : acc)));

// // max
// console.log(arr.reduce((acc, item) => (item > acc ? item : acc)));

// get all users minimum age
// console.log(
//   users.reduce((acc, item) => {
//     return item.age < acc.age ? item : acc;
//   }),
// );

// get all users maximum age
// console.log(
//   users.reduce((acc, item) => {
//     return item.age > acc.age ? item : acc;
//   }),
// );

// get all users total age
// console.log(
//   users.reduce((acc, item) => {
//     return item.age + acc;
//   }, 0),
// );

// console.log(
//   users.reduce((acc, user) => {
//     return user.eyeColor === 'green' ? [...acc, user] : acc;
//   }, []),
// );

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5, 6];

// console.log(arr2);

// ========================================
/* sort */
// ========================================
// const arr = [2, 1, 5, 10];
// console.log([...arr].sort((a, b) => b - a));
// console.log(arr);

// console.log([...users].sort((a, b) => a.age - b.age));

// ========================================
/* Свой порядок сортировки */
// ========================================
// console.log(
//   [...users].sort((a, b) => {
//     // -1 <
//     if (a.age < b.age) {
//       return -1;
//     }
//     // 1 >
//     if (a.age > b.age) {
//       return 1;
//     }
//     // 0 =
//     return 0;
//   }),
// );

// ========================================
/* Цепочки методов массива */
// ========================================

// get all user emails
// get all users who have friend "Sharron Pace"
// find user who have skills: ipsum
// get all users minimum age
// get all users maximum age
// get all users total age
// get unique eyes color list
// reverse string
// find the longest word in the string
// return the sum of odd/even numbers from the array
// find the palindromes
// https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript
// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
// https://www.codewars.com/kata/56c5847f27be2c3db20009c3/train/javascript
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
