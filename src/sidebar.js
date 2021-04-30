import { addToLists, todos, lists } from "/src/lists.js";

const listActions = () => {
  const sidebarLists = document.getElementById("sidebar-list-view");
  //? CLICK AND CHANGE SELECTED LIST FUNCTIONS
  document.addEventListener("click", (e) => {
    if (e.target.matches(".sidebar-list")) {
      changeSelection(e.target);
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
