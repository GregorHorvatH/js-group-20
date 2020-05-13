'use strict';

// ========================================
/* ES5 */
// ========================================
// === Human ===
// [[Call]], [[Construct]]
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.sayHello = function() {
//   console.log('Hello');
// };

// // === Doctor ===
// function Doctor(name, age, robeColor) {
//   Human.call(this, name, age);
//   this.robeColor = robeColor;
// }

// Doctor.prototype = Object.create(Human.prototype);
// Doctor.prototype.constructor = Doctor;
// Doctor.prototype.heal = function() {
//   console.log('I can heal');
// };

// // === instances ===
// const bobby = new Human('Bobby', 15);
// console.log(bobby);
// bobby.sayHello();

// const peter = new Human('Peter', 20);
// console.log(peter);
// peter.sayHello();

// const doctor = new Doctor('House', 55, 'white');
// console.log(doctor);
// doctor.sayHello();
// doctor.heal();

// ========================================
/* ES6 - constructor, prototype */
// ========================================
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Doctor extends Human {
//   constructor(name, age, robeColor) {
//     super(name, age);

//     this.robeColor = robeColor;
//   }

//   heal() {
//     console.log(`I can heal, I wear ${this.robeColor} robe`);
//   }
// }

// // === instances ===
// const bobby = new Human('Bobby', 15);
// console.log(bobby);
// bobby.sayHello();

// const peter = new Human('Peter', 20);
// console.log(peter);
// peter.sayHello();

// const doctor = new Doctor('House', 55, 'white');
// console.log(doctor);
// doctor.sayHello();
// doctor.heal();

// ========================================
/* ES6 - get, set */
// ========================================
// class Counter {
//   constructor(start = 0) {
//     this.x = start;
//   }

//   get value() {
//     return this.x;
//   }

//   set value(value) {
//     if (value > 3) {
//       return;
//     }
//     this.x = value;
//   }
// }

// const counter1 = new Counter();
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;

// console.log(counter1);

// ========================================
/* ES6 - Приватные поля классов */
// ========================================
// class Counter {
//   #x = 0;

//   constructor(start = 0) {
//     this.#x = start;
//   }

//   get value() {
//     return this.#x;
//   }

//   set value(value) {
//     if (value > 3) {
//       return;
//     }
//     this.#x = value;
//   }
// }

// const counter1 = new Counter(20);
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;
// counter1.value += 1;

// console.log(counter1);

// ========================================
/* ES6 - Статические свойства и методы */
// ========================================
// === Car ===
// class Car {
//   constructor(model) {
//     this.model = model;
//   }

//   static getCarModel(obj) {
//     return obj.model;
//   }
// }

// const vaz = new Car('VAZ');
// console.log(vaz);

// console.log(Car.getCarModel(vaz));
// console.log(Car['getCarModel'](vaz)); // eslint-disable-line

// class BMW extends Car {}
// const bmw = new BMW('1');
// console.log(bmw);
// console.log(BMW.getCarModel(vaz));
// console.log(BMW.getCarModel(bmw));

// // === Array ===
// console.log(
//   Array.from({
//     0: 1,
//     1: 2,
//     length: 2,
//   }),
// );

// ========================================
/* Example plugin */
// ========================================
// class Counter {
//   constructor(id, start) {
//     this.wrapper = document.getElementById(id);
//     this.x = start;
//   }

//   start() {
//     setInterval(() => {
//       this.x += 1;
//       this.wrapper.textContent = this.x;
//     }, 1000);
//   }
// }

// const counter1 = new Counter('plugin1', 0);
// counter1.start();

// const counter2 = new Counter('plugin2', 10);
// counter2.start();

// ========================================
/* private function */
// ========================================
// class Human {
//   #test = 0;

//   constructor(callback) {
//     this.#test = callback;
//   }

//   runTest() {
//     this.#test();
//   }
// }

// class Doctor extends Human {}

// const human = new Human(() => console.log('Hello'));
// human.runTest();

// const doctor = new Doctor(() => console.log('Hello from doctor'));
// doctor.runTest();

//   #test = 0;

//   constructor(callback) {
//     this.#test = callback;
//   }

//   runTest() {
//     this.#test();
//   }
// }

// class Doctor extends Human {}

// const human = new Human(() => console.log('Hello'));
// human.runTest();

// const doctor = new Doctor(() => console.log('Hello from doctor'));
// doctor.runTest();

