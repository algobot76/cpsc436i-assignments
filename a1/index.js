var itemInput = document.getElementById("new-item");
var addButton = document.getElementById("add-btn");
var myList = document.getElementById("my-list");

function addNewItem() {
  var listItem = document.createElement("li");
  listItem.innerText = itemInput.value;
  listItem.className = "list-item ";
  myList.appendChild(listItem);
  itemInput.value = "";
}

addButton.addEventListener("click", addNewItem);
