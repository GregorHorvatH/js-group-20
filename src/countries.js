'use strict';

const refs = {
  form: document.getElementById('form'),
  input: document.getElementById('input'),
  content: document.getElementById('content'),
};

const listTemplate = countries => {
  // console.log('Country list', countries);

  return countries
    .map(({ name }) => `<li class="list-group-item">${name}</li>`)
    .join('');
};

const detailTemplate = ({ name, capital, population, flag }) => {
  // console.log(country);

  return `
    <h1>${name}</h1>
    <img width="300" src="${flag}" />
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Population:</strong> ${population}</p>
  `;
};

const handleInput = e => {
  const name = e.target.value;

  console.log('on Input');

  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(items => {
      refs.content.innerHTML = '';

      if (items.length === 1) {
        refs.content.insertAdjacentHTML('beforeend', detailTemplate(items[0]));

        return;
      }
      if (items.length > 10) {
        console.log('Error, more then 10');
        return;
      }
      if (items.length) {
        refs.content.insertAdjacentHTML(
          'beforeend',
          `<ul id="list" class="list-group">${listTemplate(items)}</ul>`,
        );
        return;
      }

      console.log('No country found!');
      return;
    })
    .catch(() => console.log('some error'));
};

const handleSubmit = e => {
  e.preventDefault();

  console.log('on Submit');

  handleInput({
    target: {
      value: e.target.elements.text.value,
    },
  });
};

refs.input.addEventListener('input', _.debounce(handleInput, 300));
refs.form.addEventListener('submit', handleSubmit);
