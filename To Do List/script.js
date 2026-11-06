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
        html += "<li>" + tasks[i] + " " + new Date().toDateString() + " <button onclick='removeTask(" + i + ")';> x</button></li>";
                                                    /*                  ^^^
                                                            used to add buttons to the added tasks*/
    }
    document.getElementById("list").innerHTML = html;
}

function clearTasks() {
    tasks = [];
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("tasks saved to local storage");
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved !== null) {
        tasks = JSON.parse(saved);
    }
    console.log("tasks loaded from local storage");
}


loadTasks();
displayTasks();

// I am aware the above note is not a good practice, but I am still learning and will improve my code in the future.