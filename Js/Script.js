function addtask() {
    const taskInput = document.getElementById('AddTask');
    const taskList = document.getElementById('tasklist');

    const taskText = taskInput.value.trim();

    if (taskText.length === 0) {
        return;
    }

    // style of task 
    const listItem = document.createElement('li');
    listItem.className = "list-group-item d-flex justify-content-between align-items-center text-white";
    listItem.style.backgroundColor = "#2A2649";
    listItem.style.border = "1px solid #2A2649";
    listItem.style.marginTop = "10px";

    const taskContent = document.createElement('span');
    taskContent.innerText = taskText;

    taskContent.addEventListener("click", () => {
        taskContent.classList.toggle("text-decoration-line-through");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "btn btn-danger btn-sm ms-2";
    deleteBtn.onclick = () => {
        taskList.removeChild(listItem);
    };

    // Append the text and delete button to the list item
    listItem.appendChild(taskContent);
    listItem.appendChild(deleteBtn);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Prevent form submission from reloading the page
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    addtask();
});
