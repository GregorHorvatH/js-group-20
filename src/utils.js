// ==== ES6 - export ====
export function getId() {
  return Date.now();
}

export function sayHello() {
  console.log('Hello');
}

export function sayName() {
  console.log(`Hello, my name is ${this.name}`);
}

export function sum(a, b) {
  return a + b;
}

export default {
  getId,
  sayHello,
};

// ==== CommonJS - export ====
// module.exports = {
//   getId,
//   sayHello,
// };

// module.exports = sayHello;
