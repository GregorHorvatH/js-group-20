'use strict';

// ============================
// bind
// ============================
// function sayName() {
//   console.log(this); // {name: "Some name"}
//   console.log(this.name);
// }

// const obj = {
//   name: 'Some name',
// };

// // obj.sayName();

// const myFunc = sayName.bind(obj); // function() { ... } // this = obj

// setTimeout(myFunc, 2000);

// ============================
// addEventListener
// ============================
// const form = document.querySelector('.form-inline');
// form.addEventListener('submit', () => {
//   console.log('submit');
// });

// const fn1 = () => console.log('click');
// const fn2 = () => console.log('csdfgsdgfd');

// const myButton = document.querySelector('#my-button');
// myButton.addEventListener('click', fn1);
// myButton.addEventListener('click', fn2);

// const handleInputChange = e => {
//   console.log('on input:', e.target.value);

//   myButton.textContent = e.target.value;
// };

// const input = document.querySelector('#inputText');
// input.addEventListener('input', handleInputChange);

// ============================
// removeEventListener
// ============================
// const fn1 = () => console.log('click');
// const fn2 = () => console.log('csdfgsdgfd');

// const myButton = document.querySelector('#my-button');
// myButton.addEventListener('click', fn1);
// myButton.addEventListener('click', fn2);

// myButton.removeEventListener('click', fn2);

// ============================
// preventDefault
// ============================
// const form = document.querySelector('.form-inline');
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   console.log('submit');
// });

// const link = document.querySelector('#link');
// link.addEventListener('click', e => {
//   e.preventDefault();

//   console.log('no google :)');
//   window.location.replace('https://goit.ua');
// });

// ============================
// Keyboard events
// ============================
// const filter = document.querySelector('#filter');
// filter.addEventListener('keydown', e => {
//   if (e.code === 'Escape') {
//     console.log(e.target.value);
//   }
// });

// ============================
// focus, blur
// ============================
// const filter = document.querySelector('#filter');
// filter.addEventListener('focus', () => console.log('focus'));
// filter.addEventListener('blur', () => console.log('blur'));

// ============================
// change, input
// ============================
// const filter = document.querySelector('#filter');
// filter.addEventListener('change', () => console.log('change'));
// filter.addEventListener('input', () => console.log('input'));

// ============================
// onLoad
// ============================
// window.onload = function() {
//   const filter = document.querySelector('#filter');

//   console.log(filter);
//   // filter.addEventListener('change', () => console.log('change'));
//   // filter.addEventListener('input', () => console.log('input'));
// };

// ============================
// this
// ============================
// const obj = {
//   name: 'Bobby',

//   handleClick() {
//     console.log(this.name);
//   },
// };

// // obj.handleClick();

// const button = document.querySelector('#my-button');
// button.addEventListener('click', obj.handleClick.bind(obj));

window.unload = function() {
  this.alert('hello');
  return 'ha-ha-ha';
};
