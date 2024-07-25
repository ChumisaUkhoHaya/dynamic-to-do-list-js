// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the task input
        const taskText = taskInput.value.trim();

        // Check if the task input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add an event listener to remove the task when clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button and list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the task input field to add task on "Enter" key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
