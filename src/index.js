'use strict';

// const baseURL = 'http://localhost:3030';

// ===== POST =====
// const url = `${baseURL}/users`;
// const payload = {
//   name: 'Peter',
//   age: 20,
// };
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
//   body: JSON.stringify(payload),
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

// ===== GET =====
// const name = 'Chris';
// const age = 20;

// // const url = `${baseURL}/users`; // []
// // const url = `${baseURL}/users/2`; // {}
// let url = `${baseURL}/users?name=${name}&age=${age}`; // []

// const options = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

// ===== PUT =====
// const url = `${baseURL}/users/1`; // []
// const payload = {
//   name: 'Bobby',
//   age: 15,
//   email: 'bobby@gmail.com',
// };

// const options = {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
//   body: JSON.stringify(payload),
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

// ===== PATCH =====
// const url = `${baseURL}/users/1`; // []
// const payload = {
//   age: 16,
// };

// const options = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
//   body: JSON.stringify(payload),
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

// ===== DELETE =====
// const url = `${baseURL}/users/1`; // []

// const options = {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

// ===== PHONEBOOK, GET =====
// const url = 'https://goit-phonebook-api.herokuapp.com/contacts';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE0M2FjN2EyNTc4ZDAwMTdmMjliNWEiLCJpYXQiOjE1OTUyNjU4MDJ9.tKuKiIawwalKd6kywm6ssb_SBLV0y5Dqr8PRcpwRc_0';

// const options = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'Application/json',
//     Authorization: token,
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

// ===== PHONEBOOK, DELETE =====
// const url = 'https://goit-phonebook-api.herokuapp.com/users/current';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE0M2FjN2EyNTc4ZDAwMTdmMjliNWEiLCJpYXQiOjE1OTUyNjU4MDJ9.tKuKiIawwalKd6kywm6ssb_SBLV0y5Dqr8PRcpwRc_0';

// const options = {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'Application/json',
//     Authorization: token,
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

