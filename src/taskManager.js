'use sctrict';

let tasks = [
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

tasks = JSON.parse(localStorage.getItem('tasks')) || tasks;

const getItem = (id, text, isDone) => `
  <li data-id=${id}
      class="list-group-item ${isDone ? 'list-group-item-success' : ''}">
    <span>${text}</span>
    <button type="button" class="close" aria-label="Close">
      &times;
    </button>
  </li>
`;

// ======= references =======
const refs = {
  listGroup: document.querySelector('.list-group'),
  form: document.querySelector('.form-inline'),
  filter: document.querySelector('#filter'),
};

// ======= event listeners =======
refs.form.addEventListener('submit', handleFormSubmit);
refs.filter.addEventListener('input', handleFilterChange);
refs.listGroup.addEventListener('click', handleTaskItemClick);

render(tasks);

// ======= functions =======
function handleFilterChange(e) {
  const filteredTasks = tasks.filter(item =>
    item.text.toLowerCase().includes(e.target.value.toLowerCase()),
  );

  render(filteredTasks);
}

function handleFormSubmit(e) {
  e.preventDefault();

  if (!e.target.elements.text.value) {
    return;
  }

  tasks.push({
    id: Date.now(),
    text: e.target.elements.text.value,
    isDone: false,
  });
  e.target.elements.text.value = '';

  saveData();
  render(tasks);
}

function render(items) {
  refs.listGroup.innerHTML = '';
  refs.listGroup.insertAdjacentHTML(
    'beforeend',
    items.map(({ id, text, isDone }) => getItem(id, text, isDone)).join(''),
  );
}

function handleTaskItemClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  let id;

  if (e.target.nodeName === 'LI') {
    id = e.target.dataset.id;
  } else {
    id = e.target.parentNode.dataset.id;
  }

  if (e.target.nodeName === 'BUTTON') {
    tasks = tasks.filter(item => item.id !== Number(id));
  } else {
    tasks = tasks.map(item => {
      if (item.id === Number(id)) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }

      return item;
    });
  }

  saveData();
  render(tasks);
}

function saveData() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
