import { addToLists, todos, lists } from '/src/lists.js';

const setItemStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const setListStorage = () => {
  localStorage.setItem('lists', JSON.stringify(lists));
};

export { setItemStorage, setListStorage };
