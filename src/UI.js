import { addToLists, todos, lists } from "/src/lists.js";

const actions = () => {
  //* MARK ITEMS AS DONE OR NOT

  document.addEventListener("dblclick", (e) => {
    if (e.target.matches(".inactive")) {
      e.target.classList.remove("inactive");
      console.log("unmark");
      setCompleteDate();
    } else if (e.target.matches(".item")) {
      e.target.classList.add("inactive");
      console.log("mark as done");
      setCompleteDate();
    }
  });

  //* CREATE NEW TODO

  const createNewToDo = (() => {
    const inputToDo = document.getElementById("new-todo-input");
    //? CREATE ON ENTER PRESS
    inputToDo.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 && inputToDo.value != "") {
        console.log("enter1 create new todo");
        creation();
        exportToArray();
        getTodo();
      }
    });

    //? CREATE ON BUTTON CLICK
    document.addEventListener("click", (e) => {
      if (e.target.matches("#add-item-button-icon") && inputToDo.value != "") {
        console.log("click create new todo");
        creation();
        exportToArray();
        getTodo();
      }
    });

    //? TODO CREATION FUNCTION
    const creation = () => {
      //+ GET THE INNER DIV AND FIRST CHILD
      const listDiv = document.getElementById("inner-active-list");
      let theFirstChild = listDiv.firstChild;

      //+ CREAT TODO BUTTON AND GET VALUE FROM INPUT
      const newToDo = document.createElement("button");
      newToDo.textContent = inputToDo.value;

      //+ INSERT THE NEW TODO TO DIV
      newToDo.classList.add("item");
      newToDo.classList.add("normal-priority");
      listDiv.insertBefore(newToDo, theFirstChild);

      //+ CHANGE SELECTION TO NEW TODO
      changeSelection(newToDo);
    };

    //? ADDING TODO TO ARRAY

    const exportToArray = () => {
      //+ GET THE SELECTED LIST NAME TO INSERT IT INTO THE TODO OBJECT
      const selectedList = document.querySelector(".selected-list").innerHTML;
      console.log("input value " + inputToDo.value);

      //+ RUN ADD TO ARRAY FUNCTION
      addToLists(
        selectedList,
        inputToDo.value,
        new Date().toLocaleDateString(),
        "N/A",
        "Normal",
        ""
      );

      //+ CLEAR INPUT VALUE AFTER COMPLETE
      inputToDo.value = "";
    };
  })();

  //? SELECT A TODO 🐙 //

  //! TODO CLICK FUNCTION

  document.addEventListener("click", (e) => {
    if (e.target.matches(".item")) {
      changeSelection(e.target);
      getTodo();
    }
  });

  //! FIGURE OUT SELECTED ITEM
  const changeSelection = (selection) => {
    const currentItem = document.querySelector(".selected-item");
    const newItem = selection;
    selectNew(currentItem, newItem);
    console.log("select");
  };

  //! SWITCH CLASS TO SELECTED
  function selectNew(currentItem, newItem) {
    if (currentItem == null) {
      newItem.classList.add("selected-item");
    } else {
      currentItem.classList.remove("selected-item");
      newItem.classList.add("selected-item");
    }
  }

  //? FILL DETAILS SECTION WITH TODO DETAILS
  const notesText = document.getElementById("notes-text");
  const dateAdded = document.getElementById("date-added-text");
  const dateCompleted = document.getElementById("date-completed-text");
  const priorityButton = document.getElementById("priority-button");

  //! GET THE RIGHT TODO
  let openItem;
  const getTodo = () => {
    todos.find((selectedTodo) => {
      const currentItem = document.querySelector(".selected-item").innerHTML;
      console.log("current todo " + currentItem);
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

  //! CHANGE COMPLETION STATUS
  const setCompleteDate = () => {
    todos.find((selectedTodo) => {
      const currentItem = document.querySelector(".selected-item").innerHTML;
      console.log("current todo " + currentItem);
      if (selectedTodo.todo == currentItem && selectedTodo.dateComp == "N/A") {
        //* FILL DATES
        dateCompleted.innerHTML = `Date Completed: ${new Date().toLocaleDateString()}`;
        selectedTodo.dateComp = new Date().toLocaleDateString();
      } else if (
        selectedTodo.todo == currentItem &&
        selectedTodo.dateComp != "N/A"
      ) {
        dateCompleted.innerHTML = "Date Completed: N/A";
        selectedTodo.dateComp = "N/A";
      }
    });
  };

  //!  PRIORITY SET FUNCTION
  const prioritySetFunction = (status, button, old, next, current) => {
    const currentItem = document.querySelector(".selected-item");
    const currentItemInner = currentItem.innerHTML;

    //+ PRIORITY BUTTON CHANGE COLOR
    priorityButton.textContent = status;
    priorityButton.className = button;

    //+ ITEM CHANGE COLOR
    currentItem.classList.remove(old);
    currentItem.classList.add(next);

    //+ SET TODO PRIORITY
    current.priority = status;
  };

  //! CHANGE PRIORITY STATUS
  const setPriority = () => {
    console.log("set priority");
    todos.find((selectedTodo) => {
      const currentItem = document.querySelector(".selected-item");
      const currentItemInner = currentItem.innerHTML;
      if (selectedTodo.todo == currentItemInner) {
        if (selectedTodo.priority == "Normal") {
          prioritySetFunction(
            "Important",
            "important-priority-button",
            "normal-priority",
            "important-priority",
            selectedTodo
          );
        } else if (selectedTodo.priority == "Important") {
          prioritySetFunction(
            "Low",
            "low-priority-button",
            "important-priority",
            "low-priority",
            selectedTodo
          );
        } else if (selectedTodo.priority == "Low") {
          prioritySetFunction(
            "Normal",
            "normal-priority-button",
            "low-priority",
            "normal-priority",
            selectedTodo
          );
        }
      }
    });
  };
  priorityButton.onclick = () => {
    setPriority();
  };

  //! EDIT NOTES
  notesText.onblur = () => {
    openItem.notes = notesText.innerHTML;
  };

  //? FILL CURRENT LIST SECTION

  //! MAIN FUNCTION
  const fillCurrentList = () => {
    console.log("filling liffst");
    let filteredArray = [];
    const selectedList = document.querySelector(".selected-list").innerHTML;
    const listDiv = document.getElementById("inner-active-list");

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
      const newToDo = document.createElement("button");
      newToDo.textContent = item.todo;

      //+ INSERT THE NEW TODO TO DIV
      newToDo.classList.add("item");
      newToDo.classList.add(`${item.priority.toLowerCase()}-priority`);
      listDiv.insertBefore(newToDo, theFirstChild);
    };

    filteredArray.forEach((item) => {
      appendTodDos(item);
    });
    selectNew(null, listDiv.firstChild);
    getTodo();
  };

  //! PAGE LOAD FUNCTIONS
  fillCurrentList();
};

export { actions };
