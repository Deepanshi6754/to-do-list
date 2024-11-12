function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        li.remove();
    };

    var completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.onchange = function () {
        li.style.textDecoration = this.checked ? "line-through" : "none";
    };

    li.appendChild(completeCheckbox);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}
