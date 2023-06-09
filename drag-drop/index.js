var dragItem = null;

function dragStart(event) {
  dragItem = event.target;
  event.dataTransfer.effectAllowed = "move";
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function drop(event) {
  event.preventDefault();
  var container2 = document.getElementById("container2");
  if (container2.contains(dragItem)) {
    return;
  }
  container2.appendChild(dragItem);
  document.getElementById("message").innerHTML = "Item dropped successfully!";
  alert("item added successfully!!");
}

function resetContainers() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  container2.innerHTML = "";
  container1.innerHTML = `
    <div class="item" draggable="true" ondragstart="dragStart(event)">Item 1</div>
    <div class="item" draggable="true" ondragstart="dragStart(event)">Item 2</div>
    <div class="item" draggable="true" ondragstart="dragStart(event)">Item 3</div>
  `;
  document.getElementById("message").innerHTML = "";
}