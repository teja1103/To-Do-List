function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = taskText;

    var completeBtn = document.createElement("button");
    completeBtn.innerHTML = "&#10003";
    completeBtn.addEventListener("click", function() {
      li.classList.toggle("completed");
      li.classList.remove("incomplete");
    });

    var incompleteBtn = document.createElement("button");
    incompleteBtn.innerHTML = "&#10007";
    incompleteBtn.addEventListener("click", function() {
      li.classList.toggle("incomplete");
      li.classList.remove("completed");
   });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(incompleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
}