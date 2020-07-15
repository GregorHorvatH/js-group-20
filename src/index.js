import { addTodo, deleteTodo, toggleTodo, fetchTodos } from './utils';
import todoItemTemplate from './todoItem.hbs';
import './styles.scss';

let todos = [];

// ===== refs =====
const refs = {
  inputForm: document.querySelector('.input-form'),
  todoList: document.querySelector('.todo-list'),
  loader: document.querySelector('.loader'),
};

// ===== functions =====
/**
 * Render the todo list to DOM
 */
const renderList = () => {
  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML(
    'beforeend',
    todos.map(todoItemTemplate).join(''),
  );
};

/**
 * Show loader
 */
const showLoader = () => {
  refs.loader.classList.add('show');
};

/**
 * Hide loader
 */
const hideLoader = () => {
  refs.loader.classList.remove('show');
};

/**
 * Show the todo List
 */
const showList = () => {
  refs.todoList.classList.add('show');
};

/**
 * Hide the todo List
 */
const hideList = () => {
  refs.todoList.classList.remove('show');
};

/**
 * Disable the input form
 */
const disableForm = () => {
  refs.inputForm.querySelector('.input').setAttribute('disabled', true);
  refs.inputForm.querySelector('.button').setAttribute('disabled', true);
};

/**
 * Enable the input form
 */
const enableForm = () => {
  refs.inputForm.querySelector('.input').removeAttribute('disabled');
  refs.inputForm.querySelector('.button').removeAttribute('disabled');
};

/**
 * Fetch todos from the server and load them to the DOM
 */
const loadTodos = () => {
  disableForm();
  hideList();
  showLoader();

  fetchTodos()
    .then(data => {
      todos = data;
    })
    .then(renderList)
    .then(hideLoader)
    .then(showList)
    .then(enableForm);
};

/**
 * Add new todo to the list and save to the server
 * @param {object} event
 */
const handleSubmit = e => {
  const target = e.target.elements.text;
  const text = target.value;

  e.preventDefault();

  if (!text) {
    return;
  }

  disableForm();
  addTodo(text)
    .then(todo => todos.push(todo))
    .then(() => {
      target.value = '';
    })
    .then(renderList)
    .then(enableForm);
};

/**
 * Delete todo from the list and from the server
 * @param {number} id
 */
const handleDeleteTodo = id => {
  deleteTodo(id)
    .then(() => {
      todos = todos.filter(todo => todo.id !== id);
    })
    .then(renderList);
};

/**
 * Select action (delete or toggle) when user click on todo item button or checkbox
 * @param {object} event
 */
const handleTodoClick = e => {
  if (e.target === e.currentTarget) {
    return;
  }

  const parent = e.target.closest('.todo-item');
  const id = parent.dataset.id;

  switch (e.target.nodeName) {
    case 'BUTTON':
      handleDeleteTodo(Number(id));
      return;
    case 'INPUT':
      toggleTodo(id);
      return;
  }
};

// ===== event listeners =====
refs.inputForm.addEventListener('submit', handleSubmit);
refs.todoList.addEventListener('click', handleTodoClick);

// ===== run =====
loadTodos();
