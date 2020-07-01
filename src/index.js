'use strict';

// ========= инкапсуляции 1 =========
// function Counter() {
//   let value = 0;

//   return function() {
//     console.log(++value);
//   };
// }

// const counter1 = new Counter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4

// console.log(counter1.value);

// ========= абстракция =========
// function logger(text) {
//   for (let i = 0; i < 10; i += 1) {
//     console.log(text);
//   }
// }

// logger('Hello');

// ========= наследования =========
// class Animal {
//   walk() {
//     console.log('walk');
//   }
// }

// class Dog extends Animal {
//   walk() {
//     console.log('the dog is walking');
//   }

//   bark() {
//     console.log('bark');
//   }
// }

// const animal = new Animal();
// animal.walk();

// const dog1 = new Dog();
// dog1.walk();
// dog1.bark();

// console.log(dog1);

// ========= ESM import =========
// import * as utils from './utils.js';
// utils.sayHello();

// import { sayHello } from './utils.js';
// sayHello();

// import utils from './utils.js';
// console.log(utils);

// ========= CommonJS import =========
// const utils = require('./utils');

// ========= context =========
// import { sayName } from './utils.js';

// const obj = {
//   name: 'Bobby',
// };

// sayName.call(obj);

import users from './users.json';

console.log(users);
