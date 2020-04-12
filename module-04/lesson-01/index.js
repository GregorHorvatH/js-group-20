'use strict';

// ========================================
/* Функции обратного вызова */
// ========================================
// function fn1() {
//   console.log('Hello from fn1');
// }

// function fn2(name) {
//   console.log(`Hello ${name} from fn2`);
// }

// function fn3(name, callback) {
//   console.log(`Hello ${name} from fn3`);

//   callback(name);
// }

// // fn3('Bobby', fn2);
// fn3('Bobby', fn1);

// ========================================
/* Абстрагирование повторения */
// ========================================
// function repeat(count, callback) {
//   for (let i = 0; i < count; i += 1) {
//     callback();
//   }
// }

// function sayHello() {
//   console.log('Hello');
// }

// function sayBye() {
//   console.log('Bye');
// }

// repeat(5, sayHello);
// repeat(3, sayBye);

// ========================================
/* filter */
// ========================================
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];

// function filter(items, callback) {
//   const result = [];

//   items.forEach(item => {
//     if (callback(item)) {
//       result.push(item);
//     }
//   });

//   return result;
// }

// const isEven = x => x % 2 === 0;

// function isOdd(x) {
//   return x % 2 !== 0; // true, false
// }

// console.log(filter(arr1, isEven));
// console.log(filter(arr2, isOdd));
// console.log(filter(arr1, x => x < 5));
// console.log(filter(arr1, x => x > 5));
// console.log(filter(arr1, x => x < 3 || x > 7));

// ========================================
/* find */
// ========================================
// const arr1 = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 30 },
// ];

// function find(items, callback) {
//   const result = [];

//   // eslint-disable-next-line
//   for (const item of items) {
//     if (callback(item)) {
//       result.push(item);
//       break;
//     }
//   }

//   return result[0];
// }

// console.log(find(arr1, human => human.name === 'Bobby'));

// ========================================
/* map */
// ========================================
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function map(items, callback) {
//   const result = [];

//   items.forEach(item => {
//     result.push(callback(item));
//   });

//   return result;
// }

// console.log(map(arr1, x => x * 2));
// console.log(map(arr1, x => `<li>${x}</li>`));

// ========================================
/* shadowing */
// ========================================
// const a = 11;
// console.log('global:', a);

// const myFunction = function() {
//   const a = 33; // shadowing

//   console.log('function:', a);
// };

// myFunction();

// ========================================
/* replace */
// ========================================
// const str = 'Hello wOrld';
// const newStr = str.replace(/o/gi, 'X');

// console.log(str);
// console.log(newStr);

// ========================================
/* call stack */
// ========================================
// const globalA = 10;

// function fn1() {
//   const fn1A = 11;
//   console.log(1);
// }

// function fn2() {
//   const fn2A = 22;
//   console.log(2);

//   fn1();
// }

// function fn3() {
//   const fn3A = 33;
//   console.log(3);

//   fn2();
// }

// fn3();

// ========================================
/* DOM */
// ========================================
// const input = document.querySelector('input');
// const h3 = document.querySelector('h3');

// input.addEventListener('input', e => {
//   h3.textContent = `Hello ${e.target.value}!`;
// });

// ========================================
/* ID */
// ========================================
// bad version
// for (let i = 0; i < 100; i += 1) {
//   console.log(Date.now());
// }

// v.2 - F34765HGH
// const getId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

// for (let i = 0; i < 100; i += 1) {
//   console.log(getId());
// }

