import { addToLists, todos, lists } from "/src/lists.js";
import { fillCurrentList } from "/src/listloader.js";
import { actions } from "/src/UI.js";

const listActions = () => {
  const sidebarSection = document.querySelector(".sidebar-section");
  const sidebarLists = document.getElementById("sidebar-list-view");
  const sidebarAdd = document.querySelector(".sidebar-add");

  //? ADD NEW LIST
  let newListToggle = "off";
  document.addEventListener("click", (e) => {
    if (e.target.matches(".sidebar-add") && newListToggle == "off") {
      console.log("add");

      const newListInput = document.createElement("input");
      Object.assign(newListInput, {
        className: "input-box",
        maxlength: "20",
        id: "new-list-input",
        type: "text",
        placeholder: "New List",
      });

      sidebarSection.appendChild(newListInput);
      newListInput.focus();
      newListInput.onblur = () => {
        newListInput.remove();
        newListToggle = "off";
      };
      newListToggle = "on";

      enterList();
    } else if (e.target.matches(".sidebar-add") && newListToggle == "on") {
      const inputList = document.getElementById("new-list-input");

      inputList.remove();

      newListToggle = "off";
    }
  });

  //* SEND LIST TO ARRAY AND ADD TO SIDEBAR
  const enterList = () => {
    const inputList = document.getElementById("new-list-input");
    //+ CREATE ON ENTER PRESS
    inputList.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 && inputList.value != "") {
        console.log("enter create new list");

        newListToggle = "off";
        //+ EXPORT TO ARRAY
        exportListToArray();
        //+ CREATE LIST ELEMENT
        createSideBarLists(inputList.value);
        //+ REMOVE INPUTBOX
        inputList.remove();
      }
    });
  };

  //* SEND NEW LIST TO LIST ARRAY
  const exportListToArray = () => {
    //+ GET THE SELECTED LIST NAME TO INSERT IT INTO THE TODO OBJECT
    const inputList = document.getElementById("new-list-input");
    console.log("input list value " + inputList.value);
    console.log(inputList.value);
    //+ RUN ADD TO ARRAY FUNCTION
    lists.push(inputList.value);

    //+ CLEAR INPUT VALUE AFTER COMPLETE

    console.log(lists);
  };

  //? CLICK AND CHANGE SELECTED LIST FUNCTIONS
  document.addEventListener("click", (e) => {
    if (e.target.matches(".sidebar-list")) {
      changeSelection(e.target);
      fillCurrentList();
    }
  });

  const changeSelection = (selection) => {
    const currentItem = document.querySelector(".selected-list");
    const newItem = selection;
    selectList(currentItem, newItem);
    console.log("select list");
  };

  const selectList = (currentItem, newItem) => {
    if (currentItem == null) {
      newItem.classList.add("selected-list");
    } else {
      currentItem.classList.remove("selected-list");
      newItem.classList.add("selected-list");
    }
  };

  //? CREATE THE LISTS
  const createSideBarLists = (list) => {
    const newList = document.createElement("p");
    newList.classList.add("sidebar-list");
    sidebarLists.appendChild(newList);
    newList.innerHTML = list;
    console.log("listactions");
  };

  lists.forEach((list) => {
    createSideBarLists(list);
  });
  sidebarLists.firstElementChild.classList.add("selected-list");
};

export { listActions };
