'use strict';

// fetch('https://hn.algolia.com/api/v1/search?query=cats')
//   .then(resp => {
//     return resp.json();
//   })
//   .then(res => res.hits)
//   .then(data => {
//     // ... do something
//     console.log('some function here');

//     return data;
//   })
//   .then(console.log);

// ====== new Promise ======
// function startLoader() {
//   console.log('loading...');
// }

// function stopLoader() {
//   console.log('loading is finished');
// }

// function catchError(error) {
//   console.log('Error:', error);
// }

// function doSomething(resp) {
//   console.log('timer is finished', resp);
// }

// // function myTimer(callback) {
// //   setTimeout(() => {
// //     const a = [1, 2, 3, 4, 5];
// //     const b = 'Hello';

// //     callback({ a, b });
// //   }, 1000);
// // }

// // myTimer(doSomething);

// const myTimer = new Promise((resolve, reject) => {
//   /*
//    * Эта функция будет вызвана автоматически. В ней можно выполнять
//    * любые асинхронные операции. Когда они завершатся — нужно
//    * вызвать одно из: resolve(результат) при успешном выполнении,
//    * или reject(ошибка) при ошибке.
//    */
//   // setTimeout(() => {
//   //   const a = [1, 2, 3, 4, 5];
//   //   const b = 'Hello';

//   //   resolve({ a, b });
//   // }, 1000);

//   reject('My Custom Error!');
// });

// startLoader();

// myTimer
//   .then(doSomething)
//   .then(() => console.log('one more step'))
//   .catch(catchError)
//   .finally(stopLoader);

// ====== Promise.all ======
// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Hello');
//   }, 2000); // 2 sec
// });

// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('from');
//   }, 500); // .5 sec
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise');
//     // reject('Error happened');
//   }, 1000); // 1 sec
// });

// // promise1.then(console.log);
// // promise2.then(console.log);
// // promise3.then(console.log);

// // Promise.all([promise1, promise2, promise3])
// //   .then(arr => console.log(arr.join(' ')))
// //   .catch(console.log);

// Promise.race([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.log);

// ======= Promise.resolve, reject =======
// function fn1() {
//   console.log('function 1');

//   return Promise.resolve();
// }

// function fn2() {
//   console.log('function 2');

//   return Promise.reject('My error');
// }

// function fn3() {
//   console.log('function 3');
// }

// fn1() // 1
//   .then(fn2) // 2
//   .then(fn3) // ERROR
//   .catch(console.log);

// ======= Promise =======
// function fn1() {
//   console.log('function 1');

//   return Promise.resolve('hello');
// }

// fn1()
//   .then(text => {
//     console.log(text);

//     return 'tro-lo-lo';
//   })
//   .then(text => console.log(text));

