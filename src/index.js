'use strict';

// ====== setTimeout ======
// const obj = {
//   name: 'Bobby',

//   sayHello() {
//     console.log(this.name);
//   },
// };

// const timerId = setTimeout(obj.sayHello.bind(obj), 1000);

// ====== clearTimeout ======
// clearTimeout(timerId);

// ====== setTimeout ======
// const timerId = setInterval(() => console.log(Date()), 1000);
// console.log(timerId);

// ====== clearInterval ======
// clearInterval(timerId);

// setTimeout(name => console.log(name), 1000, 'Hello');

// ====== example ======
// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);

// 1, 2, 3
// 1, 3, 2

// ====== example ======
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// console.log(i); // 10

// ====== Date ======
// import { getMins, getSecs } from './timerUtils.js';

// var start = 1594055281011;

// setInterval(() => {
//   var end = Date.now();
//   var diff = end - start;

//   var minutes = getMins(diff);
//   var seconds = getSecs(diff - minutes * 60 * 1000);

//   console.log(`${minutes}:${seconds}`);
// }, 1000);

// ====== Timer ======
import Timer from './Timer.js';

new Timer({
  selector: '#timer',
});
