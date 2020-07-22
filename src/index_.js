'use strict';

// ===== iterator =====
// const range = {
//   from: 2,
//   to: 7,

//   [Symbol.iterator]: function iterator() {
//     let current = this.from;
//     let last = this.to;

//     return {
//       next() {
//         if (current <= last) {
//           return {
//             value: current++,
//             done: false,
//           };
//         }

//         return {
//           done: true,
//         };
//       },
//     };
//   },
// };

// console.log(range);

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

// ===== generator =====
// function* myFunc() {
//   const x1 = yield 1;
//   const x2 = yield 2 + x1;
//   const x3 = yield 3 + x2;

//   return x3;
// }

// const iterator = myFunc();

// const step1 = iterator.next();
// console.log(step1);

// const step2 = iterator.next(step1.value);
// console.log(step2);

// const step3 = iterator.next(step2.value);
// console.log(step3);

// const step4 = iterator.next(step3.value);
// console.log(step4);

// console.log(
//   iterator.next(
//     iterator.next(iterator.next(iterator.next().value).value).value,
//   ),
// );

function* myFunc2() {
  console.log('res1');
  const res1 = yield new Promise(resolve => {
    setTimeout(() => resolve(1), 2000);
  });

  console.log('res2');
  const res2 = yield new Promise(resolve => {
    setTimeout(() => resolve(res1 + 1), 1000);
  });

  return res2;
}

// const iterator2 = myFunc2();

// iterator2
//   .next()
//   .value.then(data => iterator2.next(data).value.then(console.log));

// // вспомогательная функция-чернорабочий
// // для выполнения промисов из generator
function execute(generator, yieldValue) {
  let next = generator.next(yieldValue);

  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err),
    );
  } else {
    // обработаем результат return из генератора
    // обычно здесь вызов callback или что-то в этом духе
    console.log(next.value);
  }
}

execute(myFunc2());

// ===== async/await =====
// const myFunc = async () => {
//   console.log('res1');
//   const res1 = await new Promise(resolve => {
//     setTimeout(() => resolve(1), 2000);
//   });

//   console.log('res2');
//   const res2 = await new Promise(resolve => {
//     setTimeout(() => resolve(res1 + 1), 2000);
//   });

//   console.log(res2);
// };

// myFunc();
