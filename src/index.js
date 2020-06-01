'use strict';

// ============================
// querySelector
// ============================
// const list = document.querySelector('#list');
// console.log(list);

// const item = list.querySelector('.active');
// console.log(item);

// ============================
// querySelectorAll
// ============================
// const list = document.querySelectorAll('li');
// console.log(list);

// ============================
// textContent
// ============================
// const title = document.querySelector('h4');
// title.textContent = 'New text';

// console.log(title);

// ============================
// innerText, innerHTML
// ============================
// const list = document.querySelector('#list');
// list.innerHTML = '';

// list.innerHTML = '<li>sdffs</li>';
// list.innerText = '<li>sdffs</li>';

// ============================
// element.style
// ============================
// const list = document.querySelector('#list');
// list.style.color = 'white';
// list.style.backgroundColor = 'rgba(255, 0, 0, .5)';

// ============================
// element.classList
// ============================
// const list = document.querySelectorAll('#list li');
// list[0].classList.remove('active');
// list[2].classList.add('active');

// console.log(list[2].classList);

// setInterval(() => {
//   list[0].classList.toggle('active');
// }, 1000);

// ============================
// attributes
// ============================
// console.log(list[0].removeAttribute('class'));
// console.log(list[0].setAttribute('my-attribute', 15));

// ============================
// data-attributes
// ============================
// const activeUser = document.querySelector('#list li.active');
// console.log(activeUser.dataset.id);

// const img = document.querySelector('img');
// img.style.width = '300px';
// img.src = img.dataset.url;

// ============================
// createElement
// ============================
// const img = document.createElement('img');
// img.src =
//   'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';
// img.style.width = '200px';

// console.log(img);

// ============================
// append, appendChild
// ============================
// const header = document.querySelector('.jumbotron');
// header.appendChild(img);

// const users = ['Ivanov', 'Petrov', 'Sidorov'];
// const list = document.querySelector('#list');
// list.innerHTML = '';

// const userItems = users.map(user => {
//   const li = document.createElement('li');
//   li.textContent = user;

//   return li;
// });

// list.append(...userItems);

// list.append(
//   ...users.map(user => {
//     const li = document.createElement('li');
//     li.textContent = user;

//     return li;
//   }),
// );

// ============================
// remove, removeChild
// ============================
// const ul = document.querySelector('ul');
// const item = document.querySelector('li');
// // item.remove();
// ul.removeChild(item);

// console.log(item);

// ============================
// innerHTML
// ============================
// const title = document.querySelector('.jumbotron');
// title.innerHTML = '';
// title.innerHTML = '<p>xdfgdsgfd</p><br><p>xdfgdsgfd</p>';

// ============================
// insertAdjacentHTML
// ============================
// const title = document.querySelector('.jumbotron');
// title.insertAdjacentHTML('beforeend', '<p>xdfgdsgfd</p><br><p>xdfgdsgfd</p>');

// const users = ['Ivanov', 'Petrov', 'Sidorov'];
// const list = document.querySelector('#list');
// list.innerHTML = '';

// const userItems = users
//   .map(user => `<li class="${user === 'Petrov' ? 'active' : ''}">${user}</li>`)
//   .join('');
// list.insertAdjacentHTML('afterbegin', userItems);

// ========================================
// random RGB color generator
// ========================================
// const box = document.getElementById('box');

// setInterval(() => {
//   box.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() *
//     255}, ${Math.random() * 255})`;
// }, 500);

