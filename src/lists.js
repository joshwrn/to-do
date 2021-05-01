let lists = JSON.parse(localStorage.getItem("lists")) || ["Sample List"];
let todos = JSON.parse(localStorage.getItem("todos")) || [
  {
    list: "Sample List",
    todo: "Creating New Lists",
    dateAdd: "4/29/2021",
    dateComp: "N/A",
    priority: "Normal",
    notes:
      'Click the plus icon next to "Current lists" to add a new list. Type the name of the list and hit enter.',
  },
  {
    list: "Sample List",
    todo: "Click the priority button",
    dateAdd: "4/29/2021",
    dateComp: "N/A",
    priority: "Important",
    notes:
      "Clicking the priority button cycles through the different levels. Low, normal, and important.",
  },
  {
    list: "Sample List",
    todo: "Double click to unmark a todo",
    dateAdd: "4/29/2021",
    dateComp: "4/29/2021",
    priority: "Normal",
    notes: "Double clicking marked todo sets it to uncompleted again.",
  },
  {
    list: "Sample List",
    todo: "Double click a todo to mark as done",
    dateAdd: "4/29/2021",
    dateComp: "N/A",
    priority: "Low",
    notes:
      "Click the three line button to delete all completed todos, or click the trash icon to delete an indiviual todo.",
  },
  {
    list: "Sample List",
    todo: "This is a todo",
    dateAdd: "4/29/2021",
    dateComp: "N/A",
    priority: "Normal",
    notes: "This is a note, notes are saved automatically.",
  },
];
//+ NEW TODO
const newToDo = (list, todo, dateAdd, dateComp, priority, notes) => {
  return { list, todo, dateAdd, dateComp, priority, notes };
};
//+ PUSH TODO TO ARRAY
const addToLists = (list, todo, dateAdd, dateComp, priority, notes) => {
  const create = newToDo(list, todo, dateAdd, dateComp, priority, notes);
  todos.push(create);

  //+ CHECK IF LIST ALREADY EXISTS BEFORE PUSHING
  if (lists.indexOf(list) == -1) {
    lists.push(create.list);
  }
};

export { addToLists, todos, lists };
