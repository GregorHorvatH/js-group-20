'use strict';

console.log('Hello world!');

const SKY_COLOR = 'blue';
const PI = 3.14;

const name = 'Bobby';
const age = 15;
const weekDaysInMarch = '';

console.log(name, age, weekDaysInMarch, SKY_COLOR);
console.log(name, SKY_COLOR);

// =========================================================
// Объявление переменных
// =========================================================
const b = 567;
console.log(b);

let a = 123;
console.log(a);

a = 456;
console.log(a, SKY_COLOR);
console.log(2 * PI);

// =========================================================
// Типы переменных
// =========================================================
const str = 'sdfgsdfgdg';
console.log(str);

const num = 0;
console.log(num);

const isFriday = false;
console.log(isFriday);

let x;
console.log(x);

const r = 6.3;
console.log(r);

const y = null;
console.log(y);

console.log(typeof SKY_COLOR);

// =========================================================
// Получение данных
// =========================================================
// const isComing = confirm('Please confirm hotel reservation'); // Ok <-- true
// console.log('Hotel is confirmed:', isComing);

const userName = prompt('Please enter your name');
console.log('Hello', userName);

const userAge = prompt('Please enter your age');
console.log('Age', Number(userAge));

console.log('Type of:', typeof userName);
