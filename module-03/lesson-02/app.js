'use strict';

// ========================================
/* Операция spread ... */
/* Распыление массивов */
/* Распыление аргументов */
// ========================================
// const arr = [1, 2, 3, 4, 5];
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(...arr); // 1 2 3 4 5

// console.log(Math.min(3, 1, 5, 4)); // 1
// console.log(Math.max(3, 1, 5, 4)); // 5

// console.log(Math.min(arr)); // NaN
// console.log(Math.max(arr)); // NaN

// console.log(Math.min(...arr)); // 1
// console.log(Math.max(...arr)); // 5

// ========================================
/* Array.concat */
// ========================================
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

/* variant 1, Array.concat */
// const arr3 = arr1.concat(arr2);
// console.log(arr3); // [1, 2, 3, 4, 5, 6]

// /* variant 2, ... */
// const arr4 = [...arr1, ...arr2];
// console.log(arr4); // [1, 2, 3, 4, 5, 6]

/* variant 3, ... with new item */
// const arr5 = [...arr1, 3.5, ...arr2];
// const arr6 = [0, ...arr1, 7]; // unshift + push
// console.log(arr5); // [1, 2, 3, 3.5, 4, 5, 6]
// console.log(arr6); // [1, 2, 3, 3.5, 4, 5, 6]

// ========================================
/* Распыление объектов */
// ========================================
// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   // here can be many-many other properties
// };
// const obj2 = {
//   d: 4,
//   e: 5,
// };

// console.log(obj1); // {a: 1, b: 2, c: 3}
// console.log(obj2); // {d: 1, e: 2}

// // // eslint-disable-next-line
// // const newObj1 = Object.assign({}, obj1, obj2);
// // console.log(newObj1); // {a: 1, b: 2, c: 3, d: 4, e: 5}

// const newObj2 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(newObj2); // {a: 1, b: 2, c: 3, d: 4, e: 5}

// const obj3 = {
//   b: 2.1,
// };
// const newObj3 = {
//   ...obj1, // write - 1, 2, 3
//   ...obj3, // overwrite - b
// };
// console.log(newObj3); // {a: 1, b: 2.1, c: 3}

// ========================================
/* Операция ...rest */
// ========================================
// function fn1(first, second, ...rest) {
//   console.log(first); // 1
//   console.log(second); // 2
//   console.log(rest); // [3, 4]
// }

// fn1(1, 2, 3, 4);

// ========================================
/* Array destructuring */
// ========================================
/* example 1, no destructuring, get the value by index */
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c); // 1 2 3

/* example 2, with destructuring */
// const arr = [1, 2];
// const [a, b, c] = arr;

// console.log(a, b, c); // 1 2 3

// const human = {
//   name: 'Bobby',
//   age: 15,
//   tall: 150,
// };

// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// ========================================
// /* variant 1, with an array */
// Object.entries(human).forEach(obj => {
//   console.log('Key: ', obj[0]);
//   console.log('Value: ', obj[1]);
// });

// /* variant 2, with array destructing */
// Object.entries(human).forEach(([key, value]) => {
//   console.log('Key: ', key);
//   console.log('Value: ', value);
// });

// ========================================
/* Object destructuring */
// ========================================
// /* example 1 */
// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   // here can be many-many other properties
// };
// // get only "a" and "b"
// const { b, a } = obj1;
// console.log(a, b); // 1 2

// const human = {
//   name: 'Bobby',
//   age: 15,
//   tall: 150,
// };

// // without destructuring
// console.log(`${human.name} is ${human.age} years old`); // Bobby is 15 years old
// console.log(`${human.name} is ${human.tall}cm tall`); // Bobby is 150cm tall

// // with destructuring
// const { name, age, tall } = human;
// console.log(`${name} is ${age} years old`); // Bobby is 15 years old
// console.log(`${name} is ${tall}cm tall`); // Bobby is 150cm tall

// /* example 2 */
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// function fn1(person) {
//   console.log(`${person.name} is ${person.age} years old`); // Bobby is 15 years old
// }

// function fn2({ name = 'Nemo', age = 0 }) {
//   console.log(`${name} is ${age} years old`); // Bobby is 15 years old
// }

// const fn3 = ({ name, age }) => console.log(`${name} is ${age} years old`); // Bobby is 15 years old

// fn1(human);
// fn2(human);
// fn3(human);

// /* example 3 */
// const human1 = {
//   name: 'Bobby',
// };
// const human2 = {
//   name: 'Peter',
// };

// /* var 1 */
// const fight1 = (person1, person2) => {
//   let message;

//   if (person1.power > person2.power) {
//     message = `${person1.name} победил ${person2.name}`;
//   } else if (person1.power < person2.power) {
//     message = `${person2.name} победил ${person1.name}`;
//   } else {
//     message = `${person2.name} и ${person1.name} одинаково сильные`;
//   }

//   return message;
// };

// human1.power = 10;
// human2.power = 20;
// console.log(fight1(human1, human2)); // Peter победил Bobby

// /* var 2 */
// const fight2 = (
//   { name: name1, power: power1 },
//   { name: name2, power: power2 },
// ) => {
//   let message;

//   if (power1 > power2) {
//     message = `${name1} победил ${name2}`;
//   } else if (power1 < power2) {
//     message = `${name2} победил ${name1}`;
//   } else {
//     message = `${name1} и ${name2} одинаково сильные`;
//   }

//   return message;
// };

// human1.power = 20;
// human2.power = 10;
// console.log(fight2(human1, human2)); // Bobby победил Peter

// /* var 3 */
// const fight3 = (
//   { name: name1, power: power1 },
//   { name: name2, power: power2 },
// ) => {
//   let message = `${name1} и ${name2} одинаково сильные`;

//   if (power1 > power2) {
//     message = `${name1} победил ${name2}`;
//   } else if (power1 < power2) {
//     message = `${name2} победил ${name1}`;
//   }

//   return message;
// };

// human1.power = 10;
// human2.power = 10;
// console.log(fight3(human1, human2)); // Bobby и Peter одинаково сильные

