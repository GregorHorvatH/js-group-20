'use strict';

// reverse text
// 1. create function
// 2. split to array
// 3. reverse
// 4. join to text

// ============================
// Деструктуризации
// ============================
// const obj = { name: 'Bobby', age: 15 };

// const getName = ({ name }) => {
//   return name;
// };

// console.log(getName(obj));

// ============================
// Callback
// ============================
// function fn1() {
//   console.log('fn 1');
// }

// const someFunction = callback => {
//   console.log('hello from fn 2');
//   callback();
// };

// function fn2(callback) {
//   setTimeout(someFunction, 2000, callback);
// }

// fn2(fn1); // timeout

// ============================
// Map
// ============================
// const map = new Map(); // object
// map.set(2, 23);
// map.set(1, 45);
// map.set(3, 98);

// console.log(map);

// const obj = {};
// obj[2] = 23;
// obj[1] = 45;
// obj[3] = 98;
// console.log(obj);

// ============================
// Set
// ============================
// const set = new Set([1, 2, 3, 1, 1, 2, 3, 4]);
// console.log(Array.from(set));

// ============================
// Примеси
// ============================
// class Human {
//   sayHello() {}
// }

// class SuperMan extends Human {
//   sayBye() {}
// }

// console.log(SuperMan.prototype);

// ============================
// дескрипторы свойств
// ============================
// const bobby = {
//   name: 'Bobby',
//   age: 15,
// };

// Object.defineProperty(bobby, 'name', {
//   configurable: false, // delete bobby.name;
//   enumerable: false, // Object.keys(bobby)
//   writable: false, // bobby.name = 'Peter'
// });

// // bobby.name = 'Peter';

// console.log('Name:', bobby.name);
// console.log(Object.keys(bobby));

// ============================
// read only fields
// ============================
// const bobby = Object.freeze({
//   name: 'Bobby',
//   age: 15,
//   innerObj: Object.freeze({
//     value: 123,
//   }),
// });

// // bobby.name = 'Peter';
// // bobby.age = 20;
// // bobby.innerObj.value = 2345;

// console.log(bobby.innerObj);

// => returns "(123) 456-7890", как сделать это
const createPhoneNumber = arr => {
  return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const formatPhoneNumber = str => {
  // Filter only numbers from the input
  const cleaned = `${str}`.replace(/\D/g, '');

  // Check if the input is of correct length
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return null;
};

console.log(formatPhoneNumber('9809142333'));
