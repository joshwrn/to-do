let lists = [];
let todos = [];
//+ NEW TODO
const newToDo = (list, todo, date, priority, notes) => {
  return { list, todo, date, priority, notes };
};
//+ PUSH TODO TO ARRAY
const addToLists = (list, todo, date, priority, notes) => {
  const create = newToDo(list, todo, date, priority, notes);
  todos.push(create);
  //+ CHECK IF LIST ALREADY EXISTS BEFORE PUSHING
  if (lists.indexOf(list) == -1) {
    lists.push(create.list);
  }
  console.log(lists);
  console.log(todos);
};

console.log(lists);
console.log(todos);
console.log("ok fiue");

export { addToLists, todos, lists };
