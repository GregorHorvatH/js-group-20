// =========================================================
// ++, +=, =+, --, -= ...
// =========================================================
// let a = 0;

// console.log(a);

// a += 1; // a = a + 1;
// console.log(a);

// a++; // a = a + 1;
// console.log(a);

// ++a; // a = a + 1;
// console.log(a);

// a -= 1; // a = a - 1;
// console.log(a);

// a--; // a = a - 1;
// console.log(a);

// --a; // a = a - 1;
// console.log(a);

// =========================================================
// ++
// =========================================================
// let a = 0;
// console.log(a++); // 0  ->> +1
// console.log(a);

// console.log(++a); // +1 ->> console

// =========================================================
// Number
// =========================================================
// const a = 5; // number
// const b = '5'; // string

// // console.log(a === Number(b));

// console.log(Number(1)); // 1
// console.log(Number('45')); // 45
// console.log(Number('45dff')); // NaN
// console.log(Number('qq')); // NaN
// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// console.log(Number.isNaN(Number(undefined))); // NaN === NaN

// // Парсит из строки целое число
// console.log(Number.parseInt('5px', 10)); // 5
// console.log(Number.parseInt('12qwe74', 10)); // 12
// console.log(Number.parseInt('12.46qwe79', 10)); // 12
// console.log(Number.parseInt('qweqwe', 10)); // NaN

// // Парсит из строки дробное число
// console.log(Number.parseFloat('5px')); // 5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('qweqwe')); // NaN

// =========================================================
// isNaN
// =========================================================
// const age = prompt('How old are you?');

// if (Number.isNaN(Number(age))) {
//   if (Number(age) >= 18) {
//     console.log('больше 18');
//   }

//   if (Number(age) < 18) {
//     console.log('меньше 18');
//   }
// }

// =========================================================
// Strings
// =========================================================
//            0123456789
// const text = 'javaScript';

// console.log(text[0].toUpperCase());
// console.log(text[1].toUpperCase());
// console.log(text[2]);
// console.log(text[3]);
// console.log(text[4]);
// console.log(text[5]);
// console.log(text[6]);
// console.log(text[7]);
// console.log(text[8]);
// console.log(text[9]);

// const message = 'Mango ' + 'is' + ' happy';
// console.log(message); // Mango is happy

// const a = 'aDmIn';
// const b = 'AdMiN';

// console.log(a.toLowerCase() === b.toLowerCase());

// =========================================================
// includes, indexOf
// =========================================================
// const text =
//   'Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом.';
// // 01234567890123456
// console.log(text.includes('альтернатива'));

// console.log(text.indexOf(' ', 10));

// =========================================================
// Шаблонные строки
// =========================================================
// const name = prompt('Enter your name');
// const age = prompt('How old are you');

// const message = `My name is ${name} and I'm ${age} years old`;

// console.log(message);

// =========================================================
// Логические операторы
// =========================================================
// const a = 15;
// const b = 20;
// const x = 25;

// //          true     true
// console.log(x > a && x < b);

// //          false     true
// console.log(x < a || x > b);

// console.log(!false);

// =========================================================
// if ... else
// =========================================================
// const age = 15;

// console.log('Start');

// if (age > 18) {
//   console.log('Ok');
// } else {
//   console.log('Not Ok');
// }

// // console.log(age > 18 ? 'Ok' : 'Not Ok');

// console.log('End');

// =========================================================
// switch case
// =========================================================
// const code = 15;

// if (code === 15) {
//   console.log('simple');
// } else if (code === 16) {
//   console.log('basic');
// } else if (code === 17) {
//   console.log('extended');
// } else if (code === 18) {
//   console.log('premium');
// } else {
//   console.log('unknown tarif');
// }

// switch (code) {
//   case 15:
//     console.log('simple');
//     break;
//   case 16:
//     console.log('basic');
//     break;
//   case 17:
//     console.log('extended');
//     break;
//   case 18:
//     console.log('premium');
//     break;
//   default:
//     console.log('unknown tarif');
//     break;
// }

// =========================================================
// Область видимости
// =========================================================
// const a = 1;

// {
//   const b = 2;

//   {
//     const c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);

//     var x = 5;
//   }
// }

// {
//   const d = 4;
//   console.log(d);
// }

// console.log(x);

// =========================================================
// Цикл while
// =========================================================
// let counter = 11;

// while (counter < 10) {
//   // 10 < 10 = false
//   console.log('counter: ', counter); // 9
//   counter += 1; // 9 + 1 = 10
// }

// console.log('end');

// =========================================================
// do ... while
// =========================================================
// let counter = 0;

// do {
//   console.log('counter: ', counter); // 9
//   counter += 1; // 9 + 1 = 10
// } while (counter < 10);

// console.log('end');

// =========================================================
// for
// =========================================================
// const text = 'JavaScript';
// let result = '';

// // vertical
// for (let i = 0; i < text.length; i += 1) {
//   console.log(text[i]);
// }

// // horizontal reverted
// for (let i = text.length - 1; i >= 0; i -= 1) {
//   result += text[i]; // result = result + text[i]
// }

// console.log(result);

// =========================================================
// break
// =========================================================
// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log('Дошли до 5-й итерации, прерываем цикл!');
//     break;
//   }
//   console.log(i);
// }

// =========================================================
// continue
// =========================================================
// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log('Дошли до 5-й итерации, прерываем цикл!');
//     continue;
//   }
//   console.log(i); // 5
// }

// =========================================================
// Game
// =========================================================
const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

let userNumber;

do {
  userNumber = prompt('Enter number');

  if (randomNumber > Number(userNumber)) {
    console.log('Більше');
  } else if (randomNumber < Number(userNumber)) {
    console.log('Менше');
  }

  if (userNumber === 'exit') {
    console.log('Exit');
    break;
  }
} while (Number(randomNumber) !== Number(userNumber));

console.log('Молодець');
