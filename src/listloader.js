import { addToLists, todos, lists } from '/src/lists.js';
import { setItemStorage, setListStorage } from '/src/storage.js';

//? FILL DETAILS SECTION WITH TODO DETAILS
const notesText = document.getElementById('notes-text');
const dateAdded = document.getElementById('date-added-text');
const dateCompleted = document.getElementById('date-completed-text');
const priorityButton = document.getElementById('priority-button');

let openItem;
const getTodo = () => {
  todos.find((selectedTodo) => {
    const currentItem = document.querySelector('.selected-item').innerHTML;
    console.log('current todo ' + currentItem);
    if (selectedTodo.todo == currentItem) {
      //* RUN THE FILL FUNCTIONS
      console.log(selectedTodo);
      openItem = selectedTodo;

      //* FILL NOTES
      notesText.innerHTML = selectedTodo.notes;

      //* FILL DATES
      dateAdded.innerHTML = `Date Added: ${selectedTodo.dateAdd}`;
      dateCompleted.innerHTML = `Date Completed: ${selectedTodo.dateComp}`;

      //* FILL PRIORITY
      priorityButton.textContent = selectedTodo.priority;

      //+ SET SELECTED PRIORITY SET IT TO LOWERCLASS AND SET THAT AS THE BUTTON CLASS
      priorityButton.className = `${selectedTodo.priority.toLowerCase()}-priority`;
    }
  });
};

function selectNew(currentItem, newItem) {
  if (currentItem == null) {
    newItem.classList.add('selected-item');
  } else {
    currentItem.classList.remove('selected-item');
    newItem.classList.add('selected-item');
  }
}

const fillCurrentList = () => {
  console.log('filling current list');
  let filteredArray = [];
  const selectedList = document.querySelector('.selected-list').innerHTML;
  const listDiv = document.getElementById('inner-active-list');

  const filterToDos = (() => {
    filteredArray = todos.filter(function (item) {
      if (item.list == selectedList) {
        return true;
      }
    });
  })();

  const appendTodDos = (item) => {
    //+ GET THE INNER DIV AND FIRST CHILD
    let theFirstChild = listDiv.firstChild;

    //+ CREAT TODO BUTTON AND GET VALUE FROM INPUT
    const newToDo = document.createElement('button');
    newToDo.textContent = item.todo;

    //+ INSERT THE NEW TODO TO DIV
    newToDo.classList.add('item');
    newToDo.classList.add(`${item.priority.toLowerCase()}-priority`);
    if (item.dateComp != 'N/A') {
      newToDo.classList.add('inactive');
    }
    listDiv.insertBefore(newToDo, theFirstChild);
  };
  listDiv.innerHTML = '';

  filteredArray.forEach((item) => {
    appendTodDos(item);
  });
  selectNew(null, listDiv.firstChild);
  getTodo();
  setItemStorage();
};

const removeFill = () => {
  notesText.innerHTML = '';
  //* remove DATES
  dateAdded.innerHTML = `Date Added:`;
  dateCompleted.innerHTML = `Date Completed: N/A`;

  //* remove PRIORITY
  priorityButton.textContent = 'Normal';
  //+ SET SELECTED PRIORITY SET IT TO LOWERCLASS AND SET THAT AS THE BUTTON CLASS
  priorityButton.className = 'normal-priority';
};

const checkForItems = () => {
  let test = 'false';
  const e = todos.some((item) => {
    if (item.list == document.querySelector('.selected-list').innerHTML) {
      test = 'true';
      console.log('found list');
    }
  });
};

const checkOrFill = () => {
  checkForItems();
  if (test == 'true') {
    fillCurrentList();
  } else {
    removeFill();
  }
};

export { fillCurrentList };
