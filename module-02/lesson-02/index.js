// ========================================
/* Functions 1 */
// ========================================
// function sum(a, b) {
//   const c = a + b;

//   console.log('Sum a + b =', c);
// }

// sum(1, 1);
// sum(3, 2);
// sum(7, 3);
// sum(9, 5);

// ========================================
/* Functions 2 */
// ========================================
// const sum = function(a, b) {
//   const c = a + b;

//   console.log(c);
// };

// sum(1, 1);
// sum(3, 2);

// ========================================
/* Functions 3 */
// ========================================
// const sum = function sum(a, b) {
//   const c = a + b;

//   console.log(c);
// };

// sum(1, 1);
// sum(3, 2);

// ========================================
/* Functions - return 1 */
// ========================================
// const sum = function(a, b) {
//   const c = a + b;

//   return c;
// };

// const sum1 = sum(1, 1);
// const sum2 = sum(3, 2);
// const sumAll = sum(sum1, sum2);

// console.log('sum 1:', sum1); // 2
// console.log('sum 2:', sum2); // 5
// console.log('sum all:', sumAll); // 7

// console.log(sum(sum(1, 1), sum(3, 2)));

// ========================================
/* Functions - return 2 */
// ========================================
// const sum = function(a, b) {
//   const c = a + b;

//   // // return c;
// };

// console.log(sum(1, 1));

// ========================================
/* Functions - return 3 */
// ========================================
// const sum = function(a, b) {
//   const c = a + b;

//   return c;
// };

// console.log(sum(1, 1));

// ========================================
/* Functions - default values */
// ========================================
// const sum = function(a = 0, b = 0) {
//   return a + b;
// };

// console.log(sum(2, 4));

// ========================================
/* Functions - arguments */
// ========================================
// const sum = function() {
//   // return a + b;
//   console.log(Array.from(arguments));
// };

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// ========================================
/* Functions - область видимости */
// ========================================
// const sum = function(a, b) {
//   const c = a + b;

//   console.log(c);
// };

// sum(1, 1);
// sum(3, 2);

// console.log(c);

// ========================================
/* Functions - arguments Math.max */
// ========================================
// const max = function() {
//   const args = Array.from(arguments);
//   let maxNum = args[0];

//   // eslint-disable-next-line
//   for (const num of args) {
//     if (num > maxNum) {
//       maxNum = num;
//     }
//   }

//   return maxNum;
// };

// console.log(max(0, 4, 2));
// console.log(Math.min(1, 2));

// ========================================
/* Functions - Guard Clause */
// ========================================
// const withdraw = function(amount, balance) {
//   if (amount < 0) {
//     return;
//   }

//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//     return;
//   }

//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//     return;
//   }

//   console.log('Операция снятия средств проведена.');
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

// ========================================
/* Functions - find */
// ========================================
// const find = function(arr, name) {
//   let result;

//   arr.forEach(item => {
//     if (item === name) {
//       result = name;
//     }
//   });

//   return result;
// };

// console.log(find(['Bobby', 'Peter'], 'fg'));
// console.log(find(['Bobby', 'Peter'], 'Bobby'));

// ========================================
/* Functions - filter */
// ========================================
// const filter = function(arr, start, end) {
//   const result = [];

//   arr.forEach(item => {
//     if (item >= start && item <= end) {
//       result.push(item);
//     }
//   });

//   return result;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 4));

// ========================================
/* Functions - arrow function 1 */
// ========================================
// const sumArrow1 = (a, b) => {
//   const c = a + b;

//   return c;
// };

// console.log(sumArrow1(2, 4));

// ========================================
/* Functions - arrow function 2 */
// ========================================
// const sumArrow2 = (a, b) => {
//   return a + b;
// };

// console.log(sumArrow2(2, 4));

// ========================================
/* Functions - arrow function 3 */
// ========================================
// const sumArrow3 = (a, b) => a + b;

// console.log(sumArrow3(2, 4));

// ========================================
/* Functions - arrow function - arguments */
// ========================================
// const sumArrow3 = (...args) => {
//   console.log(args);
// };

// console.log(sumArrow3(2, 4));

// ========================================
/* Functions - destructuring */
// ========================================
// const arr = [2, 3, 4];

// console.log(Math.max(...arr));
