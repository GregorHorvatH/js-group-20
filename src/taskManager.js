'use sctrict';

const tasks = [
  {
    id: 1,
    text: 'lorem ipsum 1',
    isDone: false,
  },
  {
    id: 2,
    text: 'lorem ipsum 2',
    isDone: false,
  },
  {
    id: 3,
    text: 'lorem ipsum 3',
    isDone: false,
  },
  {
    id: 4,
    text: 'lorem ipsum 4',
    isDone: true,
  },
];

const listGroup = document.querySelector('.list-group');
const items = tasks.map(
  ({ id, text, isDone }) => `
  <li data-id=${id} class="list-group-item ${
    isDone ? 'list-group-item-success' : ''
  }">
    <span>${text}</span>
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </li>
  `,
);

listGroup.insertAdjacentHTML('beforeend', items.join(''));
