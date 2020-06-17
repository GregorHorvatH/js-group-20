import './style.css';

const sayHello = () => {
  console.log('Hello');
};

sayHello();

const data = {
  users: ['Bobby', 'Peter'],
};
const list = document.querySelector('.list');
list.insertAdjacentHTML(
  'beforeend',
  data.users.map(user => `<li class="title">${user}</li>`).join(''),
);
