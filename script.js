function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value) {
    const li = document.createElement("li");
    li.textContent = input.value;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}
// comment
