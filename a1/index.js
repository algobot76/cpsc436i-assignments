var itemInput = document.getElementById("new-item");
var addButton = document.getElementById("add-btn");
var clearButton = document.getElementById("clear-btn");
var myList = document.getElementById("my-list");

function addNewItem() {
  var listItem = document.createElement("li");
  listItem.innerText = itemInput.value;
  listItem.className = "list-item ";
  myList.appendChild(listItem);
  itemInput.value = "";
}

function clearList() {
  while (myList.firstChild){
    myList.removeChild(myList.firstChild);
  }
}

addButton.addEventListener("click", addNewItem);
clearButton.addEventListener("click", clearList);
