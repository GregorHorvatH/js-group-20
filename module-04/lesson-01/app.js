'use strict';

// const globalA = 30;

// function fn1() {
//   const fn1A = 1;

//   console.log('Hello from fn1', fn1A);
//   console.log('Hello from fn1 (global)', globalA);
// }

// function fn2() {
//   const fn2A = 2;

//   console.log('Hello from fn2', fn2A);
//   console.log('Hello from fn2 (global)', globalA);

//   fn1();
// }

// function fn3() {
//   const fn3A = 3;

//   console.log('Hello from fn3', fn3A);
//   console.log('Hello from fn3 (global)', globalA);

//   fn2();
// }

// fn3();
// console.log('Hello from global', globalA);

// ========================================
/* filter */
// ========================================
const filter = (arr, callback) => {
  const result = [];

  // eslint-disable-next-line
  for (const item of arr) {
    if (callback(item)) {
      result.push(item);
    }
  }

  return result;
};

const find = (arr, callback) => {
  let result;

  // eslint-disable-next-line
  for (const item of arr) {
    if (callback(item)) {
      result = item;
      break;
    }
  }

  return result;
};

const map = (arr, callback) => {
  const result = [];

  // eslint-disable-next-line
  for (const item of arr) {
    result.push(callback(item));
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filter(numbers, x => x > 5 && x < 7));
console.log(filter(numbers, x => x < 5));

console.log(find(numbers, x => x > 7));
console.log(find(numbers, x => x === 2));

console.log(map(numbers, x => x * 2));
console.log(map(numbers, x => `<li>${x}</li>`));
