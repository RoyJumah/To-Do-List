const listContainer = document.querySelector('.list-container');
const displayTodo = () => {
  listContainer.innerHTML = '';
  const todos = Store.getTodos();
  todos.forEach(({ description, index }) => {
    const listItem = document.createElement('div');
    listItem.className = `row list-item list-item-${index}`;
    listItem.innerHTML = `
    <i class="fa-regular fa-square"></i>
    <input class="todo-item" type="text" data-todo="${index}" value=${description} />
    
    
    <button class="delete" data-del="${index}"><i class="fa-solid fa-trash-can" ></i></button>
    <svg
      width="25px"
      height="30px"
      class="icon-move"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="#b6b6b8"
      ></path>

    </svg>
  `;
    listContainer.appendChild(listItem);
  });
};

const createTodo = () => {
  // get todo description
  const description = document.querySelector('#new-todo').value;
  if (!description) return;
  // create new todo object
  const todo = {
    description: `${description}`,
    completed: false,
    index: `${Store.getTodos().length}`,
  };
  // add new todo to local storage
  Store.addTodo(todo);
  form.reset();
  // add new todo to UI
  displayTodo();
};
const updateTodos = el => {
  el.addEventListener('keyup', () => {
    const todos = Store.getTodos();
    const todoNum = el.dataset.todo;
    const todo = todos.find(todo => todo.index === todoNum);
    todo.description = el.value.trim();
    Store.updateTodos(todos);
  });
};