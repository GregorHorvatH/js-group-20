'use strict';

// ===== dynamic import =====
// setTimeout(() => {
//   import('./utils.js' /* webpackChunkName: "utils" */).then(({ sayHello }) =>
//     sayHello(),
//   );
// }, 3000);

// ===== classes =====
// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   static sayHello() {
//     console.log('Hello', this.name);
//   }
// }

// class Doctor extends Human {
//   // override
//   constructor(name, age) {
//     super(name);

//     this.age = age;
//   }
// }

// const bobby = new Human('Bobby');
// console.log(bobby);

// const peter = new Doctor('Peter', 23);
// console.log(peter);

// Human.sayHello();
// Doctor.sayHello();

// ===== this =====
// const obj = {
//   name: 'Bobby',
//   age: 20,

//   myFunc() {
//     console.log(arguments);
//     console.log('sdfgsdgsg', this.name);
//   },
// };

// const obj2 = {
//   name: 'Peter',
//   age: 20,
// };

// function sayHello() {
//   console.log(`My name is ${this.name}`);
// }

// sayHello.call(obj);
// sayHello.call(obj2);

// const func = obj.myFunc;
// func.call(obj, 4, 4, 4, 4);
// func.apply(obj2, [1, 2, 3, 4]);

// const func2 = obj.myFunc.bind(obj2); // function() { ...with this... }
// setTimeout(func2, 3000);

// ===== templates =====
const template = (name, age) => `<li class="human">${name} - ${age}</li>`;

const names = ['Bobby', 'Peter', 'Chris'];
const refs = {
  list: document.getElementById('list'),
};

refs.list.insertAdjacentHTML(
  'beforeend',
  names.map(name => template(name, 15)).join(''),
);

// ===== https over proxy =====
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://pixabay.com/';
// axios.defaults.headers = {};

// axios.get(
//   'api?image_type=photo&orientation=horizontal&q=react&page=1&per_page=12&key=17035174-bfc38ce79fe188f7bfeb26d93',
// );
