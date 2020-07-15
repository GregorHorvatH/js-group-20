import todos from './todos.json';

export const fetchTodos = () => {
  console.log('fetch todos');

  return Promise.resolve(todos);
};

export const addTodo = text => {
  console.log('add todo:', text);

  return Promise.resolve({
    id: 4,
    text,
    isDone: false,
  });
};

export const deleteTodo = id => {
  console.log('delete item:', id);

  return Promise.resolve();
};

export const toggleTodo = id => {
  console.log('toggle item:', id);

  return Promise.resolve();
};
