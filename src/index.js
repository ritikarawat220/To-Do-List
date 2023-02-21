import "./index.css";

const tasks = [
    {
      index: 1,
      description: "structure todo list",
      completed: false,
    },
    {
      index: 2,
      description: "add task todo list",
      completed: false,
    },
    {
      index: 3,
      description: "remove todo list",
      completed: false,
    },
  ];

  function populateList() {
    const todoList = document.getElementById("todo-list");
  
    tasks.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <input class="checkbox" type="checkbox" name="" value="">
      <span>${item.description}</span>
      `;
      todoList.appendChild(listItem);
    });
  }
  
  populateList();