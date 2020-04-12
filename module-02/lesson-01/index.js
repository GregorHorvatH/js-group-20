'use strict';

// ========================================
/* Создание */
// ========================================
// const arr1 = [];
// //            0  1  2  3  4    5         6
// const arr2 = [1, 2, 3, 4, 5, 'Bobby', 'Peter'];
// const arr3 = Array(1, 2, 3, 4, 5); // eslint-disable-line
// const arr4 = Array(10);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// console.log('Name:', arr2[5]);
// console.log('Name:', arr2[6]);

// ========================================
/* Массивы */
// ========================================
// const arr = ['Bobby', 'John', 'Chris', 'Admin'];
// const arr2 = arr;

// console.log('Arr 1:', arr);
// arr[2] = 'Peter';

// console.log('Arr 1:', arr);
// console.log('Arr 2:', arr2);

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(i, arr[i]); // 0, 1, 2, 3
// }

// console.log('========================================');
// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   arr[i] = `${arr[i]} say hello`;
//   console.log(i, arr[i]); // 3, 2, 1, 0
// }

// console.log(arr);

// ========================================
/* Цикл for...of */
// ========================================
// const arr = ['Bobby', 'John', 'Chris', 'Admin'];

// // eslint-disable-next-line
// for (let name of arr) {
//   if (name === 'John') {
//     continue;
//   }
//   console.log(name);
// }

// console.log(arr);

// ========================================
/* Присвоение по ссылке и по значению */
// ========================================
// let a = 1; // 1
// const b = a; // 1
// console.log('A:', a);
// console.log('B:', b);

// a = 45; // 45
// console.log('A:', a);
// console.log('B:', b);

// const arr1 = [1, 2, 3, 4]; // [1, 2, 3, 4]
// const arr2 = arr1; // [1, 2, 3, 4]
// console.log(arr1);
// console.log(arr2);

// arr1[0] = 45;
// console.log(arr1); // [45, 2, 3, 4]
// console.log(arr2); // [45, 2, 3, 4]

// const x = 1;
// x = 2;
// const arr3 = [1, 2, 3];
// arr3[0] = 45;
// arr3[5] = 55;

// console.log(arr3);

// ========================================
/* Массивы - Создание */
// ========================================
// const arr = [2, 2, 2];
// const arr2 = Array(1, 2, 3);
// console.log(arr);
// console.log(arr2);

// const arr3 = [6];
// console.log(arr3);

// ========================================
/* Массивы - Доступ к элементам */
// ========================================

// ========================================
/* Массивы - Переопределение */
// ========================================

// ========================================
/* Массивы - Длина массива */
// ========================================
// const arr5 = [1, 2, 3, 4, 5, 6, 7];
// arr5.length = 10; // не делайте так никогда
// console.table(arr5);

// ========================================
/* Массивы - Итерация по массиву */
// ========================================
// const arr = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; i += 1) {
//   /* arr[i] = 'nothing here'; */
//   console.log(arr[i]);
//   // if (arr[i] === 5) {
//   //   break;
//   // }
// }

// ========================================
/* Массивы - Цикл for...of */
// ========================================
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// // eslint-disable-next-line
// for (let num of numbers) {
//   console.log(num);
//   num = 5; // не заменит значение
// }
// console.log(numbers);

// ========================================
/* Массивы - Инструкции break и continue */
// ========================================

// ========================================
/* Массивы - Многомерные массивы */
// ========================================
// const arr = [
//   [1, 2, 3], // 0
//   [4, 5, 6], // 1
//   [7, 8, 9], // 2
// ];

// // const item = arr[0];
// // console.log(item[2]);

// for (let i = 0; i < arr.length; i += 1) {
//   const innerArray = arr[i];

//   for (let j = 0; j < innerArray.length; j += 1) {
//     console.log(innerArray[j]);
//   }
// }

// ========================================
/* Таблица умножения */
// ========================================
// for (let i = 2; i < 10; i += 1) {
//   for (let j = 2; j < 10; j += 1) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// ========================================
/* Массивы - split() и join() */
// ========================================
// let message = '';
// for (let i = 0; i < arr.length; i += 1) {
//   message += arr[i] + ' ';
// }
// console.log(message);

// const arr = ['Hello', 'word', 'abc', 'def'];
// console.log(arr.join(' '));

// const message = 'Hello word abc def';
// const arr = message.split(' ');
// console.log(arr);

// ========================================
/* Массивы - indexOf() и includes() */
// ========================================
// const message = 'Hello word abc. def';
// const arr = message.split(' ');
// console.log(arr.indexOf('abc.'));
// console.log(message);
// console.log(message.indexOf(' ', 6));

// const message = 'Hello word abc. def';
// console.log(message.includes('ertyu'));
// console.log(message.indexOf('abc') > -1);

// ========================================
/* Массивы - Проверка множественных условий с includes() */
// ========================================
// const privilegedRoles = ['Admin', 'Director'];
// const userRole = 'Admin';

// if (privilegedRoles.includes(userRole)) {
//   console.log('Show extra panel');
// } else {
//   console.log('simple panel');
// }

// ========================================
/* Массивы - push(), pop(), shift(), unshift() */
// ========================================
// const arr = [1, 2, 3];
// console.log(arr);

// arr.push(4);
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// ========================================
/* Массивы - slice() */
// ========================================
// const arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(arr.slice()); // копия всего массива
// console.log(arr.slice(3)); // с индекса 3 до конца
// console.log(arr.slice(0, 2)); // не включая последний элемент
// console.log(arr.slice(2, 4));

// ========================================
/* Массивы - splice() */
// ========================================
// const arr = [1, 2, 3, 4, 5];

// console.log(arr.splice(0, 2));
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.splice(2, 1, 2.5);

// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// const a = arr[1];
// const b = arr[3];
// arr[1] = b;
// arr[3] = a;
// console.log(arr);

// ========================================
/* Массивы - Удаление элементов массива */
// ========================================
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 2);
// console.log(arr);

// ========================================
/* Массивы - Вставка элементов в массив */
// ========================================
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, 2.5);
// console.log(arr);

// ========================================
/* Массивы - Замена элементов массива */
// ========================================
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, 2.5);
// console.log(arr);

// ========================================
/* Массивы - concat() */
// ========================================
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// const arr4 = [...arr1, ...arr2];

// console.log(arr3);
// console.log(arr4);

// const arr = [1, 2, 3, 4, 'abc'];
//            0  1  2  3

// console.log(arr.length);

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// ========================================
/* Min, Max */
// ========================================
// const arr = [4, 1, 8, 2, 5, -400, 100];
// let min = arr[0]; // 4
// let max = arr[0]; // 4

// // eslint-disable-next-line
// for (const num of arr) {
//   if (num < min) {
//     min = num;
//   }
//   if (num > max) {
//     max = num;
//   }
// }

// console.log('Minimum:', min);
// console.log('Maximum:', max);

// ========================================
/* Sort */
// ========================================
// const arr = [4, 1, 8, 10, 2, 5, -400, 100];
// // const arr = ['Peter', 'Bobby', 'Apple', 'apple'];

// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });

// console.log(arr);

// ========================================
/* Find */
// ========================================
// const arr = [4, 1, 8, 10, 2, 5, -400, 100];
// let result = false;

// // eslint-disable-next-line
// for (const item of arr) {
//   if (item === 50) {
//     result = true;
//   }
// }

// console.log(result);

// ========================================
/* https://learn.javascript.ru/array#tasks */
// ========================================
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// const styles = ['Джаз', 'Блюз'];
// console.log(styles);

// styles.push('Рок-н-ролл');
// console.log(styles);

// styles.splice(1, 1, 'Классика');
// console.log(styles);

// console.log(styles.shift());
// console.log(styles);

// styles.splice(0, 0, 'Рэп', 'Регги');
// console.log(styles);

// ========================================
/* Sum */
// ========================================
const arr = [1, 1, 1, 20];
let sum = 0;

// eslint-disable-next-line
for (const item of arr) {
  sum += item;
}

console.log(sum);
