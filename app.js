const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

const displayTasks = () => {
    taskList.innerHTML = '';
    const tasks = todoList.getTasks();
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.innerHTML += ` <button data-index="${index}" class="deleteButton">Remove</button>`;
        taskList.appendChild(li);
    });
};

addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        todoList.addTask(task);
        taskInput.value = '';  
        displayTasks();  
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteButton')) {
        const taskIndex = event.target.getAttribute('data-index');
        todoList.removeTask(taskIndex);
        displayTasks();  
    }
});

displayTasks();
