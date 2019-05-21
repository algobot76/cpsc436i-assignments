var itemInput = document.getElementById("new-item");
var addButton = document.getElementById("add-btn");
var clearButton = document.getElementById("clear-btn");
var myList = document.getElementById("my-list");
var initialMessages = `[{"message":"item 1"},{"message":"item 2"}]`;

var initialMessagesArray = JSON.parse(initialMessages);
for (var i = 0; i < initialMessagesArray.length; i++) {
  var listItem = document.createElement("li");
  listItem.innerText = initialMessagesArray[i].message;
  listItem.className = "list-item";
  myList.appendChild(listItem);
}

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
