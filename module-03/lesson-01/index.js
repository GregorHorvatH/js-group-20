'use strict';

// ========================================
/* Создание объекта */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// console.log(human);

// ========================================
/* Доступ к свойствам */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// human.sex = 'Male';

// console.log(human);
// console.log(human.name);
// console.log(human.age);
// console.log(human.sex);

// human.age = 16;
// console.log(human);

// const key = 'name';
// console.log(human[key]);

// function getValue(obj, key) {
//   console.log(key, obj[key]);
// }

// getValue(human, 'name');
// getValue(human, 'age');

// ========================================
/* Удаление свойств */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };
// console.log(human);

// delete human.age;
// console.log(human);

// delete human['name']; // eslint-disable-line
// console.log(human);

// ========================================
/* Отсутствующие свойства */
// ========================================
// const human = {};

// console.log(human.sdfdsf ? human.sdfdsf : 'no data');

// ========================================
/* Короткие свойства */
// ========================================
// function createHuman(name, age) {
//   return {
//     friend: 'Chris',
//     name,
//     age,
//   };
// }

// console.log(createHuman('Peter', 20));

// const createHumanArrow = (name, age) => ({
//   friend: 'Chris',
//   name,
//   age,
// });

// console.log(createHumanArrow('Bobby', 15));

// ========================================
/* Вычисляемые свойства */
// ========================================
// const human = {};
// const key = 'friend';

// human.name = 'Bobby';
// human['age'] = 15; // eslint-disable-line
// human[key] = 'Chris';

// console.log(human);

// ========================================
/* Методы объекта */
// ========================================
// const human = {
//   name: 'Bobby',
//   age: 15,

//   // eslint-disable-next-line
//   sayHello: function() {
//     console.log('Hello!');
//   },

//   sayBye() {
//     console.log('Bye!');
//   },
// };

// console.log(human.sayHello());
// console.log(human.sayBye());

// ========================================
/* Доступ к объекту через this */
// ========================================
// const human = {
//   name: 'Peter',
//   age: 15,

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },

//   addYear() {
//     this.age += 1;
//   },

//   addYears(x) {
//     this.age += x;
//   },
// };

// console.log(human.sayHello());
// console.log(human.age);

// human.addYear();
// console.log(human.age);

// human.addYears(10);
// console.log(human.age);

// ========================================
/* Цикл for...in */
/* так не робіть :) */
// ========================================
// const human = {
//   name: 'Peter',
//   age: 15,
// };

// // eslint-disable-next-line
// for (const key in human) {
//   console.log('key:', key);
//   console.log('value:', human[key]);
// }

// ========================================
/* Object.keys() */
// ========================================
// const human = {
//   name: 'Peter',
//   age: 15,
// };

// const keys = Object.keys(human);
// console.log(keys);

// keys.forEach(key => {
//   console.log('key:', key);
//   console.log('value:', human[key]);
// });

// ========================================
/* Object.values() */
// ========================================
// const human = {
//   tall: 180,
//   age: 15,
//   width: 90,
// };

// const values = Object.values(human);
// console.log(values);

// ========================================
/* Object.entries() */
// ========================================
// const human = {
//   tall: 180,
//   age: 15,
//   width: 90,
// };

// const entries = Object.entries(human);
// console.log(entries);

// entries.forEach(item => {
//   console.log('key:', item[0]);
//   console.log('value:', item[1]);
// });

// ========================================
/* Example 1 */
// ========================================
// const user = {}; // Создайте пустой объект user
// user.name = 'John'; // Добавьте свойство name со значением John
// user.surname = 'Smith'; // Добавьте свойство surname со значением Smith
// user.name = 'Pete'; // Измените значение свойства name на Pete
// delete user.name; // Удалите свойство name из объекта

// console.log(user);

// ========================================
/* Example 2 */
// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.
// ========================================
// const isEmpty = obj => {
//   const keys = Object.keys(obj);

//   return !keys.length;
// };

// const schedule = {};
// console.log(isEmpty(schedule)); // true

// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule)); // false

// ========================================
/* Example 3 */
// Можно ли изменить объект, объявленный с помощью const?
// ========================================
// const user = Object.freeze({
//   name: 'John',
//   accounts: {
//     account1: '234523423',
//     account2: '098799999',
//   },
// });

// // это будет работать?
// // user.name = 'Pete';
// user.accounts.account1 = '11111111';
// console.log(user);

// ========================================
/* Example 4 */
// Создайте функцию multiplyNumeric(obj),
// которая умножает все числовые свойства объекта obj на 2.
// ========================================
// const menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// console.log(menu);

// multiplyNumeric(menu); // eslint-disable-line
// console.log(menu);

// function multiplyNumeric(obj) {
//   const keys = Object.keys(obj);

//   keys.forEach(key => {
//     obj[key] = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key];
//   });
// }

// ========================================
/* Example 5 */
// ========================================

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const Countries = {
  CHINA: 100,
  CHILI: 250,
  AUSTRALIA: 170,
  INDIA: 80,
  YAMAICA: 120,
};

const key = prompt('Enter country');
console.log(key);
console.log(Countries[key.toUpperCase()]);
console.log(
  `Доставка в ${key} будет стоить ${Countries[key.toUpperCase()]} кредитов`,
);
