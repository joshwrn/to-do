let lists = ["Sample List"];
let todos = [
  {
    list: "Sample List",
    todo: "This is a todo",
    dateAdd: "4/29/2021",
    dateComp: "N/A",
    priority: "Normal",
    notes: "This is a note",
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
  console.table(todos);
  //+ CHECK IF LIST ALREADY EXISTS BEFORE PUSHING
  if (lists.indexOf(list) == -1) {
    lists.push(create.list);
  }
};

export { addToLists, todos, lists };
