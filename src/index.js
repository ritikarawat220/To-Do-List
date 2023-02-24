import ToDo from "./toDo";
import { add, deleteAllCompleted, populateList } from "./todoStatus.js";
import "./index.css";


// Window load
const list = JSON.parse(localStorage.getItem("todoList"));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
}

// Add
const addInput = document.getElementById("add-input");
addInput.addEventListener("keydown", add);

// Delete all completed
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", deleteAllCompleted);

// Populate UI
populateList();