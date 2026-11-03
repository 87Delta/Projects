let tasks = [];

function addTask() {
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    if (text === "") {
        alert("Please enter a task.");
        console.log("user failed to enter a task");
        return;
    }
    tasks.push(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

function removeTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}

function displayTasks() {
    let html = "";
    for (let i =0; i < tasks.length; i++) {
        html += "<li>" + tasks[i] + " <button onclick='removeTask(" + i + ")';> x</button></li>";
    }
    document.getElementById("list").innerHTML = html;
}