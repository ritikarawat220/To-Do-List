class ToDo {
  constructor(description, complete = false) {
    this.description = description;
    this.complete = complete;
    this.index = ToDo.list.length;
    ToDo.list.push(this);
    this.getList = () => ToDo.list;
  }
}

ToDo.list = []; // Initialize the static list variable outside the class
export default ToDo;
