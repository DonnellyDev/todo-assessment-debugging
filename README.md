# Interactive Todo List

You are tasked with implementing an interactive todo list using JavaScript and DOM manipulation. You have been provided with an HTML file containing the basic structure and styling for the todo list, including an input field, an "Add" button, and a div with the id "todoItems" where the todo items will be displayed.

## Starting Data & Utilities

```javascript
// Initial todos
const todos = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish homework", completed: true },
    { id: 3, text: "Call mom", completed: false }
];

// Utility function for generating new todo IDs
const generateId = (() => {
    let counter = 4;  // Starting after existing todos
    return () => counter++;
})();
```

## Requirements

1. Display Todos
   - Display all todos from the data array when the page loads
   - Each todo should show:
     - A checkbox showing its completion status
     - The todo text
     - A delete button

2. Add New Todos
   - When the user enters text and clicks "Add":
     - Create a new todo object using the provided structure
     - Use generateId() for the new todo's ID
     - Add it to the todos array
     - Display it in the list
     - Clear the input field

3. Toggle Completion
   - Clicking a todo's checkbox should toggle its completed status
   - Completed todos should show with strikethrough text
   - Update both the display and the todo object's completed status

4. Delete Todos
   - Clicking a todo's delete button should remove it from both:
     - The todos array
     - The display

## Notes

- Basic error handling (empty todos) is not required
- Local storage/persistence is not needed
- Focus on core functionality and clean code
- CSS styling is provided - focus on JavaScript implementation

HTML structure is provided - you only need to implement the JavaScript functionality.
