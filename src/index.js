'use strict';

// const arr = [2, 3, 4, 5, 6, 7];

// for (let i of arr) {
//   console.log(i);
// }

// const key = 'sdhfg  slkdfghskfg hjlsrd';

// const obj = {
//   name: 'Bobby',
//   [key]: '123',
// };

// console.log(obj['sdhfg  slkdfghskfg hjlsrd']);

// ===== iterators 1 =====
// const range = {
//   from: 2,
//   to: 7,

//   [Symbol.iterator]: function() {
//     let current = this.from; // 2
//     let end = this.to;

//     return {
//       next() {
//         if (current <= end) {
//           return {
//             done: false,
//             value: current++,
//           };
//         }

//         return {
//           done: true,
//           value: undefined,
//         };
//       },
//     };
//   },
// };

// for (let i of range) {
//   console.log(i);
// }

// const iterator = range[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(...range);

// ===== iterators 2 =====
// const randomizer = {
//   [Symbol.iterator]: function() {
//     return {
//       next() {
//         return {
//           done: false,
//           value: ~~(Math.random() * 100),
//         };
//       },
//     };
//   },
// };

// const iterator = randomizer[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// ===== generators =====
// function* myFunc() {
//   console.log('start');

//   yield 1;
//   yield 2;
//   yield 3;

//   return 4;
// }

// const iterator = myFunc();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// ===== generators =====
// function* myFunc() {
//   console.log('start');

//   const res1 = yield 1; // 1
//   const res2 = yield 2 + res1; // 3
//   const res3 = yield 3 + res2; // 6

//   return res3; // 6
// }

// const iterator = myFunc();

// const res1 = iterator.next();
// console.log(res1);

// const res2 = iterator.next(res1.value);
// console.log(res2);

// const res3 = iterator.next(res2.value);
// console.log(res3);

// const res4 = iterator.next(res3.value);
// console.log(res4);

// const result = iterator.next(
//   iterator.next(iterator.next(iterator.next().value).value).value,
// );

// console.log(result);

// ===== generators & promises =====
// function* myFunc() {
//   console.log('start');

//   console.log('res1...');
//   const res1 = yield new Promise(resolve => {
//     setTimeout(() => resolve(1), 2000);
//   });

//   console.log('res2...');
//   const res2 = yield new Promise(resolve => {
//     setTimeout(() => resolve(1 + res1), 2000);
//   });

//   console.log('end');
//   return res2;
// }

// // const iterator = myFunc();

// iterator.next().value.then(data => {
//   console.log(data);

//   iterator.next(data).value.then(console.log);
// });

// // вспомогательная функция-чернорабочий
// // для выполнения промисов из generator
// function execute(generator, yieldValue) {
//   let next = generator.next(yieldValue);

//   if (!next.done) {
//     next.value.then(
//       result => execute(generator, result),
//       err => generator.throw(err),
//     );
//   } else {
//     // обработаем результат return из генератора
//     // обычно здесь вызов callback или что-то в этом духе
//     console.log(next.value);
//   }
// }

// execute(myFunc());

// ===== async/await =====
// const myFunc = async () => {
//   console.log('start');

//   console.log('res1...');
//   const res1 = await new Promise(resolve => {
//     setTimeout(() => resolve(1), 2000);
//   });

//   console.log('res2...');
//   const res2 = await new Promise(resolve => {
//     setTimeout(() => resolve(1 + res1), 2000);
//   });

//   console.log('end');

//   console.log(res2);
// };

// myFunc();

// ===== async/await 2 =====
// const userName = 'Bobby';

// fetch(`${baseUrl}/users?name=${userName}`)
//   .then(res => res.json())
//   .then(res => res[0].id)
//   .then(id =>
//     fetch(`${baseUrl}/accounts?userId=${id}`)
//       .then(res =>
//         res
//           .json()
//           .then(res => res.reduce((acc, { amount }) => acc + amount, 0)),
//       )
//       .then(console.log),
//   );

const getUserAmountSum = async userName => {
  const baseUrl = 'http://localhost:3000';

  try {
    const userId = await fetch(`${baseUrl}/users?name=${userName}`)
      .then(res => res.json())
      .then(res => res[0].id);

    if (userName === 'Bobby') {
      throw new Error('Invalid user name');
    }

    const totalAmount = await fetch(`${baseUrl}/accounts?userId=${userId}`)
      .then(res => res.json())
      .then(res => res.reduce((acc, { amount }) => acc + amount, 0));

    console.log(userName, userId, totalAmount);
  } catch (error) {
    console.log(error);
  }
};

getUserAmountSum('Bobby');
getUserAmountSum('Peter');
