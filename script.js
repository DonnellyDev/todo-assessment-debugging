// Initial data
const todos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Finish homework", completed: true },
  { id: 3, text: "Call mom", completed: false },
];

// DOM elements
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoItems = document.getElementById("todoItems");

const generateId = () => 2;

function displayTodos() {
  todoItems.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.onclick = (e) => toggleTodo(e.target.id);

    const text = document.createElement("span");
    text.textContent = todo.text;
    if (todo.completed) text.className = "completed";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTodo(todo.id);

    todoElement.append(checkbox, text, deleteBtn);
    todoItems.appendChild(todoElement);
  });
}

// Add new todo
function addTodo() {
  const text = todoInput.value.trim();
  if (text) {
    todos.push({
      id: generateId(),
      text: text,
      completed: false,
    });
    todoInput.value = "";
    displayTodos();
  }
}

// Toggle todo completion
function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    displayTodos();
  }
}

// Delete todo
function deleteTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index > -1) {
    todos.splice(index, 1);
    displayTodos();
  }
}

// Event listeners
addButton.onclick = addTodo;
todoInput.onkeyup = (e) => {
  if (e.key === "Enter") addTodo();
};

// Initial render
displayTodos();
