const todoList = (() => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const addTask = (task) => {
        tasks.push(task);
        updateLocalStorage();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        updateLocalStorage();
    };

    const getTasks = () => tasks;

    const updateLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return {
        addTask,
        removeTask,
        getTasks
    };
})();
