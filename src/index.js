'use strict';

// ====== Handlebars =========
// import template from './userList.hbs';

// const root = document.querySelector('#root');

// const data = {
//   title: 'My User List',
//   key1: {
//     key2: 123,
//     users: [
//       { name: 'Bobby', age: 15, isAdult: false },
//       { name: 'Peter', age: 20, isAdult: true },
//       { name: 'Chris', age: 30, isAdult: true },
//     ],
//   },
// };

// root.insertAdjacentHTML('beforeend', template(data));

// ====== todo-list =========
import todoTemplate from './todos.hbs';

const save = () => {
  localStorage.setItem('todoList', JSON.stringify(todos));
};

const load = () => {
  try {
    // throw new Error('my error');
    return JSON.parse(localStorage.getItem('todoList'));
  } catch (e) {
    console.log(e);

    return [];
  }
};

let todos = load() || [];

const refs = {
  form: document.querySelector('.form'),
  todoList: document.querySelector('.todo-list'),
};

const handleSubmit = e => {
  e.preventDefault();

  todos.push({
    id: Date.now(),
    value: e.target.elements.text.value,
  });

  save();
  render();
  e.target.elements.text.value = '';
};

const handleDelete = e => {
  const id = e.target.dataset.id;

  todos = todos.filter(todo => todo.id !== Number(id));

  save();
  render();
};

const render = () => {
  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML('beforeend', todoTemplate({ todos }));
};

render();
refs.form.addEventListener('submit', handleSubmit);
refs.todoList.addEventListener('click', handleDelete);
