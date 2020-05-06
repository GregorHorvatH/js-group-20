'use strict';

// ========================================
/* Конструкторы */
// ========================================
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby);

// ========================================
/* Добавление методов */
// ========================================
// function Human(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby);
// bobby.sayHello();

// const peter = new Human('Peter', 20);
// console.log(peter);
// peter.sayHello();

// ========================================
/* Прототип - ES5 prototype */
// ========================================
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const bobby = new Human('Bobby', 15);
// console.log(bobby);
// bobby.sayHello();

// const peter = new Human('Peter', 20);
// console.log(peter);
// peter.sayHello();

// ========================================
/* Прототип - ES5 class prototype */
// ========================================
// === Human ===
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Human.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// // === Doctor ===
// function Doctor(name, age) {
//   Human.call(this, name, age);
//   this.iq = 200;
// }
// Doctor.prototype = Object.create(Human.prototype);
// Doctor.prototype.constructor = Doctor;
// Doctor.prototype.heal = function() {
//   console.log('I can heal');
// };

// const doctor = new Doctor('House', 55);
// console.log(doctor);
// doctor.sayHello();
// doctor.heal();

// ========================================
/* Прототип - Object.create */
// ========================================
// const human = {
//   legs: 2,
//   sayHello() {
//     console.log('Hello');
//   },
// };

// const bobby = Object.create(human);
// bobby.name = 'Bobby';
// bobby.sayHello();

// console.log(bobby.name);
// console.log(bobby.legs);
// console.log(bobby);

// ========================================
/* Прототип - Object.prototype.hasOwnProperty */
// ========================================
// const human = {
//   legs: 2,
//   sayHello() {
//     console.log('Hello');
//   },
// };

// const bobby = Object.create(human);
// bobby.name = 'Bobby';

// for (const key in bobby) {
//   console.log(key, bobby.hasOwnProperty(key));
// }

// console.log(Object.keys(bobby));

// ========================================
/* Инкапсуляция */
// ========================================
// function Counter(value = 0) {
//   this.value = value;
// }

// Counter.prototype.increment = function() {
//   this.value += 1;
// };

// const counter1 = new Counter();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// const counter2 = new Counter();
// counter2.increment();
// counter2.increment();

// console.log(counter1.value);
// console.log(counter2.value);

// ========================================
/* Наследование */
// ========================================
// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = Object.create(obj1);
// obj2.c = 3;

// console.log(obj2);

// ========================================
/* Полиморфизм */
// ========================================
// === Human ===
function Human(name, age) {
  this.name = name;
  this.age = age;
}
Human.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// === Doctor ===
function Doctor(name, age) {
  Human.call(this, name, age);
  this.iq = 200;
}
Doctor.prototype = Object.create(Human.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.heal = function() {
  console.log('I can heal');
};
Doctor.prototype.sayHello = function() {
  console.log(`Hello, my name is dr.${this.name}`);
};

const human = new Human('Peter', 20);
human.sayHello();

const doctor = new Doctor('House', 55);
doctor.sayHello();

console.log(doctor);
