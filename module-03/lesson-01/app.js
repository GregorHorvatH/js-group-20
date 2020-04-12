'use strict';

// ========================================
/* Создание объекта */
// ========================================
// ES5
// const human = Object({
//   name: 'Bobby',
//   age: 15,
// });

// console.log(human); // {name: "Bobby", age: 15}

// ES6
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// console.log(human); // {name: "Bobby", age: 15}

// ========================================
/* Доступ к свойствам */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// console.log(human.name); // Bobby
// // eslint-disable-next-line
// console.log(human['age']); // 15

// ========================================
/* Удаление свойств */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
//   tall: 160,
// };

// delete human.name;
// delete human['age']; // eslint-disable-line

// console.log(human); // {tall: 160}

// ========================================
/* Отсутствующие свойства */
// ========================================
// const human = {
//   name: 'Bobby',
// };

// console.log(human.age); // undefined

// ========================================
/* Короткие свойства */
// ========================================
// const name = 'Bobby';
// const age = 15;

// // classical variant
// const human1 = {
//   name: name,
//   age: age,
//   tall: 150,
// };

// console.log(human1);

// shorthand variant
// const name = 'Bobby';
// const age = 15;

// const human2 = {
//   name,
//   age,
//   tall: 150,
// };

// console.log(human2); // {name: "Bobby", age: 15}

// ========================================
/* Перебор символов */
// ========================================
// const name = 'Bobby';
// const symbols = {};

// name.split('').forEach(key => {
//   // prettier-ignore
//   symbols[key] = symbols[key] === undefined
//     ? 1
//     : symbols[key] + 1;
// });

// console.log(symbols);

// ========================================
/* Вычисляемые свойства */
// ========================================
// /**
//  * Функция возвращает объект с ключом и значением
//  * которые принимает на входе как параметры
//  * @param {string} key
//  * @param {any} value
//  */
// function createObject(key, value) {
//   return {
//     [key]: value,
//   };
// }

// console.log(createObject('name', 'Bobby')); // {name: "Bobby"}
// console.log(createObject('name', 'Peter')); // {name: "Peter"}
// console.log(createObject('age', 15)); // {age: 15}

// ========================================
/* Методы объекта */
// ========================================
// const human = {
//   name: 'Bobby',

//   // ES5 styled function
//   // eslint-disable-next-line
//   sayHello: function() {
//     console.log('Hello!');
//   },

//   // ES6 styled function
//   sayBye() {
//     console.log('Bye!');
//   },
// };

// human.sayHello(); // Hello!
// human.sayBye(); // Bye!

// ========================================
/* Доступ к объекту через this */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(`Hello! My name is ${this.name}.`);
//   },

//   changeAge(newAge) {
//     this.age = newAge;
//   },
// };

// human.sayHello(); // Hello! My name is Bobby.
// console.log(human.age); // 15

// human.name = 'Peter';
// human.changeAge(30);
// human.sayHello(); // Hello! My name is Peter.
// console.log(human.age); // 30

// ========================================
/* Цикл for...in */
/* так не робіть :) */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
//   tall: 150,
// };

// // Перебор ключей объекта hotel
// // eslint-disable-next-line
// for (const key in human) {
//   console.log('Key: ', key);
//   console.log('Value: ', human[key]);
// }

// ========================================
/* Object.keys() */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
//   tall: 150,
// };

// Object.keys(human).forEach(key => {
//   console.log('Key: ', key);
//   console.log('Value: ', human[key]);
// });

// ========================================
/* Object.values() */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
//   tall: 150,
// };

// Object.values(human).forEach(value => {
//   console.log('Value: ', value);
// });

// ========================================
/* Object.entries() */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
//   tall: 150,
// };

// /* variant 1, with an array [key, value] */
// Object.entries(human).forEach(obj => {
//   console.log('Key: ', obj[0]);
//   console.log('Value: ', obj[1]);
// });

// ========================================
/* Example 1 */
// https://learn.javascript.ru/object#tasks
// ========================================
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// const user = {};
// user.name = 'John';
// user.surname = 'Smith';

// user.name = 'Pete';
// delete user.name;

// console.log(user);

// ========================================
/* Example 2 */
// https://learn.javascript.ru/object#tasks
// ========================================
// Напишите функцию isEmpty(obj),
// которая возвращает true,
// ЕСЛИ у объекта нет свойств,
// ИНАЧЕ false.

// Должно работать так:

// const schedule = {};

// function isEmpty(obj) {
//   const keys = Object.keys(obj);

//   if (keys.length === 0) {
//     return true;
//   }

//   return false;
// }

// const isEmpty2 = obj => {
//   return !!(Object.keys(obj).length === 0);
// };

// console.log(isEmpty(schedule)); // true
// console.log(isEmpty2(schedule)); // true

// schedule['8:30'] = 'get up';

// console.log(isEmpty(schedule)); // false
// console.log(isEmpty2(schedule)); // false

// ========================================
/* Example 3 */
// https://learn.javascript.ru/object#tasks
// ========================================
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const sum = obj => {
//   let total = 0;
//   const values = Object.values(obj);

//   values.forEach(value => {
//     total += value;
//   });

//   return total;
// };

// console.log(sum(salaries));
// console.log(sum({}));

// ========================================
/* Example 4 */
// https://learn.javascript.ru/object#tasks
// ========================================
// Создайте функцию multiplyNumeric(obj),
// которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
// const menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// const multiplyNumeric = obj => {
//   const keys = Object.keys(obj);

//   keys.forEach(key => {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2; // eslint-disable-line
//     }
//   });

//   return obj;
// };

// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);

// ========================================
/* Example 5 */
// https://learn.javascript.ru/object#tasks
// ========================================

