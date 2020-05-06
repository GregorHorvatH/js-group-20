'use strict';

// ========================================
/* Замыкания */
// ========================================
// function counter(start, text) {
//   let x = start || 0;

//   function increment() {
//     console.log(text, x++);
//   }

//   return increment;
// }

// const count = counter(10, 'counter 1'); // function increment() { ... }
// count();
// count();
// count();
// count();

// const count2 = counter(1, 'counter 2'); // function increment() { ... }
// count2();
// count2();

// ========================================
/* this */
// ========================================
// exmaple 1
// const obj1 = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(this);
//   },
// };

// obj1.sayHello(); // {name: "Bobby", age: 15, sayHello: ƒ}

// exmaple 2
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(this);
//   },
// };

// const hello = obj.sayHello;
// hello(); // undefined / Window

// exmaple 3
// function fn(callback) {
//   callback();
// }

// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(this);
//   },
// };

// fn(obj.sayHello); // undefined / Window

// exmaple 4
// const obj = {
//   name: 'Bobby',

//   inner: {
//     age: 15,

//     sayHello() {
//       console.log(this);
//     },
//   },
// };

// obj.inner.sayHello();

// const hello = obj.inner.sayHello;
// hello();

// ========================================
/* this в стрелочных функциях */
// ========================================
// example 1
// const fn = () => {
//   console.log(this);
// };

// fn();

// example 2
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   fn() {
//     console.log('in function:', this);

//     const innerFn = () => {
//       console.log('in arrow:', this);
//     };

//     innerFn();
//   },
// };

// obj.fn();

// example 3
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   fn() {
//     console.log('in function:', this);

//     const innerFn = () => {
//       console.log('in arrow:', this);
//     };

//     return innerFn;
//   },
// };

// const hello = obj.fn();
// hello();

// example 4
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   arrow: () => {
//     console.log('in arrow:', this);
//   },
// };

// obj.arrow();

// ========================================
/* call */
// ========================================
// function sayHello() {
//   console.log(this.name);
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// const obj2 = {
//   name: 'Peter',
//   age: 20,
// };

// sayHello.call(obj1);
// sayHello.call(obj2);

// ========================================
/* apply */
// ========================================
// function sayHello() {
//   console.log(this.name);
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// const obj2 = {
//   name: 'Peter',
//   age: 20,
// };

// sayHello.apply(obj1);
// sayHello.apply(obj2);

// ========================================
/* bind */
// ========================================
// function sayHello() {
//   console.log(this);
// }

// function fn(callback) {
//   callback();
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// const hello = sayHello.bind(obj1);
// fn(hello);

// ========================================
/* bind */
// ========================================
// function sayHello() {
//   console.log(this);
// }

// function fn(callback) {
//   callback();
// }

// function myBind(callback, scope) {
//   return function() {
//     callback.call(scope);
//   };
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// const hello = myBind(sayHello, obj1);
// const hello2 = hello;
// const hello3 = hello2;

// callLater(hello3);

// function callLater(callback) {
//   callback();
// }

// ========================================
/* (function)() */
// ========================================
// (function sayHello() {
//   console.log('Hello');
// })();

// ========================================
/* timeout */
// ========================================
// eslint-disable-next-line
for (var i = 0; i < 10; i += 1) {
  // eslint-disable-next-line
  (function() {
    var x = i; // eslint-disable-line
    setTimeout(() => console.log(x), 1000);
  })();
}
