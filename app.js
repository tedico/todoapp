const formTodos = document.querySelector('.form-todos');
const todosList = document.querySelector('.todos');
const removeTodosBtn = document.querySelector('.remove-btn')
let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function addTodo(e) { // adds a todo item
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const todo = {
      text,
      done: false
    };

    todos.push(todo);
    populateList(todos, todosList); 
    localStorage.setItem('todos', JSON.stringify(todos)); // saves to localStorage
    this.reset(); 
  }

  function removeTodo(e) { // remove individual todo
   
    const index = e.target.dataset.index
    console.log(index)
    const parent = e.target.parentNode
    todos.splice(index, 1)
    parent.remove()
    populateList(todos, todosList)
    localStorage.setItem('todos', JSON.stringify(todos)) // save the state to the db
  }

  function removeAllTodos(e) { // removes all todos
    e.preventDefault()
    todos = []
    localStorage.removeItem('todos')
    populateList(todos, todosList);
  }

  function populateList(todos = [], todosList) { // renders my view default value is []
    todosList.innerHTML = todos.map((todo, i) => {
      return `
        <li> 
          <input type="checkbox" data-index=${i} id="todo${i}" ${todo.done ? 'checked' : ''} />
          <label for="todo${i}"><span class="${todo.done ? "done" : ''}">${todo.text}</span></label>
          <i class="far fa-trash-alt" data-index=${i}></i>
        </li>
      `; 
    }).join(''); // from map to string
  }

  function toggleCompleted(e) {
    const el = e.target;
    const index = el.dataset.index;
    todos[index].done = !todos[index].done;
    localStorage.setItem('todos', JSON.stringify(todos));
    populateList(todos, todosList);
  }

  function listItemFunction(e) {
    const element = e.target.tagName
    // an alternate  to switch e.target.matches('input' or 'i'  or 'span')
    switch(element) {
      case 'SPAN':
        toggleCompleted(e)
        break;

       case 'INPUT':
        toggleCompleted(e)
        break;

       case 'I':
        removeTodo(e)
        break;
      default:
        return
    }
  }

// event delegation: the listeners are on the parent
  formTodos.addEventListener('submit', addTodo); 
  removeTodosBtn.addEventListener('click', removeAllTodos)
  todosList.addEventListener('click', listItemFunction)
  // renders my initial view
  populateList(todos, todosList);
