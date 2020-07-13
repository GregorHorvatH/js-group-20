'use strict';

const refs = {
  button: document.querySelector('#button'),
  list: document.querySelector('#list'),
  loader: document.querySelector('#loader'),
};

refs.button.addEventListener('click', handleClick);

function handleClick() {
  refs.loader.removeAttribute('hidden');

  // fetch('https://hn.algolia.com/api/v1/search?query=cats')
  fetch('http://localhost:3030/cats')
    .then(res => res.json())
    // .then(data => data.hits)
    .then(renderList)
    .catch(console.log)
    .finally(() => refs.loader.setAttribute('hidden', true));
}

function renderList(items) {
  refs.list.insertAdjacentHTML(
    'beforeend',
    items
      .map(item => `<li><a href="${item.url}">${item.title}</a></li>`)
      .join(''),
  );
}
