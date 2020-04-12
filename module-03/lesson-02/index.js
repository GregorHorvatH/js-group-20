'use strict';

// ========================================
/* Распыление аргументов */
// ========================================
// const arr = [2, 5, 1, 7];
// const min = Math.min(...arr);
// const max = Math.max(...arr);

// console.log(min);
// console.log(max);

// ========================================
/* Распыление массивов */
// ========================================
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// // const arr3 = arr1.concat(arr2);
// const arr4 = [...arr1, 0, 11, 22, ...arr2, ...arr3];
// arr4[0] = 500;

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// ========================================
/* Распыление объектов */
// ========================================
// const obj1 = {
//   name: 'Bobby',
// };
// const obj2 = {
//   age: 15,
// };
// const obj3 = {
//   ...obj1,
//   ...obj2, // age: 15
//   age: 16,
//   friend: 'Chris',
// };

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// ========================================
/* Операция rest */
// ========================================
// function showItems(a, b, c, ...rest) {
//   console.log('a, b, c:', a, b, c);
//   console.log('rest:', rest);
// }

// showItems(1, 2, 3, 4, 5, 6);

// ========================================
/* Деструктуризация объектов 1 - without default values */
// ========================================
// function sayHello(human = {}) {
//   const { name, age } = human;

//   console.log(`Hello, my name is ${name}, I'm ${age} old!`);
// }

// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// sayHello(obj);
// sayHello();

// ========================================
/* Деструктуризация объектов 2 - with default values */
// ========================================
// function sayHello(human = {}) {
//   const { name = 'Nemo', age = 0 } = human;

//   console.log(`Hello, my name is ${name}, I'm ${age} old!`);
// }

// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// sayHello(obj);
// sayHello();

// ========================================
/* Деструктуризация объектов 3 - destruction on the top */
// ========================================
// function sayHello({ name = 'Nemo', age = 0 }) {
//   console.log(`Hello, my name is ${name}, I'm ${age} old!`);
// }

// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// sayHello(obj);
// // sayHello();

// ========================================
/* Деструктуризация объектов 4 - destruction on the top */
// ========================================
// function sayHello({ name = 'Nemo', age = 0 } = {}) {
//   console.log(`Hello, my name is ${name}, I'm ${age} old!`);
// }

// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// sayHello(obj);
// sayHello();

// ========================================
/* Деструктуризация объектов 5 - destruction on the top */
// ========================================
// const sayHello = ({ age = 0, name = 'Nemo' } = {}) =>
//   console.log(`Hello, my name is ${name}, I'm ${age} old!`);

// const obj = {
//   name: 'Bobby',
//   age: 15,
//   friend: 'Chris',
// };

// sayHello(obj);
// sayHello();

// ========================================
/* Деструктуризация объектов 6 - destruction on the top */
// ========================================
// const sayHello = ({ name: humanName }) => {
//   console.log(`Hello, my name is ${humanName}`);
// };

// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// sayHello(obj);

// ========================================
/* Деструктуризация массивов */
// ========================================
// const arr = [2, 3, 4];
// const [a, b, c] = arr; // 2, 3

// console.log('a + b + c = ', a + b + c);

// ========================================
/* Деструктуризация массивов 1 */
// ========================================
/**
 * Do something
 * @param {array} numbers
 * @param {object} human {name: 'string, age: number}
 * @returns sum
 */
// function sum([a, b, c], { name, age }) {
//   console.log('a + b + c = ', a + b + c);
//   console.log(`Hello, my name is ${name}, I'm ${age} old!`);

//   return a + b + c;
// }

// sum([2, 3, 4], { name: 'Bobby', age: 15 });

// ========================================
/* Деструктуризация массивов 2 */
// ========================================
// let a = 1;
// let b = 2;
// console.log(a, b);

// // const c = a;
// // a = b;
// // b = c;
// // console.log(a, b);

// [b, a] = [a, b];
// console.log(a, b);

// ========================================
/* Example 1 */
// ========================================
// const arr = [2, 1, 3, 5, 4];

// for (let i = 0; i < arr.length; i += 1) {
//   for (let j = i + 1; j < arr.length; j += 1) {
//     if (arr[j] < arr[i]) {
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//     }
//   }
// }

// console.log(arr);

// ========================================
/* Example 2 */
// ========================================
const mySort = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const arr = [2, 1, 3, 5, 4, -1, 10, 100, -10];
arr.sort(mySort);
console.log(arr);

const arr2 = ['orange', 'apple', 'peanapple'];
arr2.sort(mySort);
console.log(arr2);

const myPersonSort = ({ age: a }, { age: b }) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const arr3 = [
  { name: 'Chris', age: 10 },
  { name: 'Bobby', age: 1 },
  { name: 'John', age: 20 },
  { name: 'Peter', age: 100 },
  { name: 'Vernon', age: 30 },
];
arr3.sort(myPersonSort);
console.log(arr3);
