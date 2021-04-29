import { addToLists, todos, lists } from "/src/lists.js";

const actions = () => {
  //* MARK ITEMS AS DONE OR NOT

  document.addEventListener("dblclick", (e) => {
    if (e.target.matches(".inactive")) {
      e.target.classList.remove("inactive");
      console.log("unmark");
    } else if (e.target.matches(".item")) {
      e.target.classList.add("inactive");
      console.log("mark as done");
    }
  });

  //* CREATE NEW TODO

  const createNewToDo = (() => {
    const inputToDo = document.getElementById("new-todo-input");
    //! CREATE ON ENTER PRESS
    inputToDo.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 && inputToDo.value != "") {
        console.log("enter1 create new todo");
        creation();
        exportToArray();
      }
    });
    //! CREATE ON BUTTON CLICK
    document.addEventListener("click", (e) => {
      if (e.target.matches("#add-item-button-icon") && inputToDo.value != "") {
        console.log("click create new todo");
        creation();
        exportToArray();
      }
    });
    //! TODO CREATION FUNCTION
    const creation = () => {
      //+ GET THE INNER DIV AND FIRST CHILD
      const listDiv = document.getElementById("inner-active-list");
      let theFirstChild = listDiv.firstChild;
      //+ CREAT TODO BUTTON AND GET VALUE ROM INPUT
      const newToDo = document.createElement("button");
      newToDo.textContent = inputToDo.value;
      //+ INSERT THE NEW TODO TO DIV
      newToDo.classList.add("item");
      listDiv.insertBefore(newToDo, theFirstChild);
    };

    //? ADDING TODO TO ARRAY
    const exportToArray = () => {
      //+ GET THE SELECTED LIST NAME TO INSERT IT INTO THE TODO OBJECT
      const selectedList = document.querySelector(".selected-list").innerHTML;
      console.log(inputToDo.value);
      //+ RUN ADD TO ARRAY FUNCTION
      addToLists(
        selectedList,
        inputToDo.value,
        new Date().toLocaleDateString()
      );
      //+ CLEAR INPUT VALUE AFTER COMPLETE
      inputToDo.value = "";
    };
  })();

  //* SELECT A TODO 🐙 //

  document.addEventListener("click", (e) => {
    if (e.target.matches(".item")) {
      const currentItem = document.querySelector(".selected-item");
      const newItem = e.target;
      selectNew(currentItem, newItem);
      console.log("select");
    }
  });

  //! SWITCH SELECTED ITEM FUNCTION

  function selectNew(currentItem, newItem) {
    if (currentItem == null) {
      newItem.classList.add("selected-item");
    } else {
      currentItem.classList.remove("selected-item");
      newItem.classList.add("selected-item");
    }
  }
};

export { actions };
