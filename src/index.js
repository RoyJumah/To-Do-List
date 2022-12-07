import './style.css';

const todo = [
  {
    description: 'Eat',
    completed: true,
    index: 1,
  },
  {
    description: 'Run',
    completed: true,
    index: 2,
  },
  {
    description: 'Sleep',
    completed: true,
    index: 3,
  },
];
const form = document.getElementById('form');
const container = document.querySelector('.container');

const displayToDoList = () => {};
const sortedTodo = todo.sort((prev, next) => prev.index - next.index);

sortedTodo.forEach(({ description }) => {
  const listItem = document.createElement('div');
  listItem.className = 'row';
  listItem.innerHTML = `
  <div class ="list">
  <div class ="list-item">
  <svg class ="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"/></svg>
  <input class="todo-item" type="text" value=${description} />
  </div>

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
    
  </div>
  `;

  form.appendChild(listItem);
});

container.addEventListener('load', displayToDoList);
