import "./index.css";

/* import toDoTask from "./modules/todo.js";

class toDoTask {
  constructor(desc, index, completed = false) {
    this.desc = desc;
    this.index = index;
    this.completed = completed;
  }
} */

//Add a task
document.querySelector("#push").onclick = function(){
  if (document.querySelector("#newtask input").
  value.length == 0){
    alert("Please Enter a Task!...");
  }else {
    document.querySelector("#tasks").innerHTML
    += `
    <div class="task">
    <span id="taskname">
    ${document.querySelector("#newtask input").value}
    </span>
    <button class="delete">
    <i class="fa-sharp fa-solid fa-xmark"></i>
    </button>
    </div>
    `;

    //delete a task
    var current = document.querySelectorAll(".delete");
    for(let i = 0; i < current.length; i++){
      current[i].onclick = function(){
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".task");
    for(let i = 0; i <tasks.length; i++){
      tasks[i].onclick = function(){
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newtask input").value = "";
  }
};


