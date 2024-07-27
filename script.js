document.addEventListener('DOMContentLoaded', () => {
    // Get the input field, add button, and task list
    const input = document.getElementById('new-todo');
    const addButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    const dingSound = document.getElementById('ding');

    // Function to add a new task
    addButton.addEventListener('click', () => {
        const todoText = input.value.trim(); // Get the input text and remove extra spaces
        if (todoText !== '') {
            // Create a new list item
            const li = document.createElement('li');

            // Create a checkbox for the task
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    // Mark the task as completed
                    li.classList.add('completed');
                    // Move the task to the bottom of the list
                    todoList.appendChild(li);
                    // Play the 'ding' sound
                    dingSound.play();
                } else {
                    // Unmark the task as completed
                    li.classList.remove('completed');
                }
            });

            // Create a span for the task text
            const span = document.createElement('span');
            span.textContent = todoText;

            // Create a span for the timestamp
            const timestamp = document.createElement('span');
            timestamp.classList.add('timestamp');
            timestamp.textContent = new Date().toLocaleString(); // Add the current date and time

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                // Mark the task for deletion
                li.classList.add('deleting');
                // Remove the task after the animation
                setTimeout(() => {
                    todoList.removeChild(li);
                }, 1000);
            });

            // Add all elements to the list item
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(timestamp);
            li.appendChild(deleteButton);
            // Add the list item to the task list
            todoList.appendChild(li);

            // Clear the input field
            input.value = '';
        }
    });
});
