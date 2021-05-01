import { addToLists, todos, lists } from "/src/lists.js";
import { fillCurrentList } from "/src/listloader.js";
import { listActions } from "./sidebar";

const deleteFunctions = () => {
  //? DELETE ITEMS
  const deleteAllButton = document.getElementById("delete-all-button");
  const deleteOne = document.getElementById("delete-todo");
  const sidebarLists = document.getElementById("sidebar-list-view");
  let filteredArray = [];

  //! FILTER FOR MULTIPLE TODO
  //// DIDNT WORK
  // const deleteToDos = (item) => {
  //   todos.filter(function (item) {
  //     const selectedList = document.querySelector(".selected-list").innerHTML;
  //     if (item.list == selectedList && item.dateComp != "N/A") {
  //       todos.splice(todos.indexOf(item), 1);
  //     }
  //   });
  // };

  //! FILTER FOR ONE
  const deleteOneItem = (item) => {
    todos.filter(function (item) {
      const currentItem = document.querySelector(".selected-item").innerHTML;
      if (item.todo == currentItem) {
        todos.splice(todos.indexOf(item), 1);
      }
    });
  };

  //* SINGLE BUTTON CLICK
  deleteOne.onclick = () => {
    console.log("delete one");
    deleteOneItem();
    fillCurrentList();
  };

  //* ALL COMPLETED ITEMS BUTTON
  deleteAllButton.onclick = () => {
    console.log("delete all");
    //+ HAD TO USE FILTER INSTEAD OF SPLICE
    todos = todos.filter(function (item) {
      const selectedList = document.querySelector(".selected-list").innerHTML;
      console.log(selectedList);
      return (
        item.list != selectedList ||
        (item.list == selectedList && item.dateComp == "N/A")
      );
    });
    fillCurrentList();
    console.log(todos);
  };

  //? DELETE LISTS

  const deleteListButton = document.getElementById("delete-list");

  //! FILTER FOR TODOS THAT MATCH DELETED LIST
  const deleteMatchingToDos = (item) => {
    todos.filter(function (item) {
      const selectedList = document.querySelector(".selected-list").innerHTML;
      if (item.list == selectedList) {
        todos.splice(todos.indexOf(item), 1);
      }
    });
  };

  //! FILTER DELETE LIST FROM LIST ARRAY
  const deleteList = (list) => {
    lists.filter(function (list) {
      const selectedList = document.querySelector(".selected-list").innerHTML;
      if (list == selectedList) {
        lists.splice(lists.indexOf(list), 1);
      }
    });
  };

  //* DELETE LIST BUTTON

  deleteListButton.onclick = () => {
    console.log("list delete");
    //+ DELETE LIST FROM ARRAY
    lists.forEach((list) => {
      deleteList(list);
    });

    //+ DELETE TODOS IN LIST
    todos.forEach((item) => {
      deleteMatchingToDos(item);
    });

    //+ CLEAR SIDEBAR
    sidebarLists.innerHTML = "";

    //+ FILL FUNCTIONS
    listActions();
    fillCurrentList();
  };
};
export { deleteFunctions };
