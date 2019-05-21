var itemInput = document.getElementById("new-item");
var addButton = document.getElementById("add-btn");
var clearButton = document.getElementById("clear-btn");
var myList = document.getElementById("my-list");
var initialMessages = `[{"message":"item 1"},{"message":"item 2"}]`;

var messages = JSON.parse(initialMessages);
for (var i = 0; i < messages.length; i++) {
  addNewItem(messages[i].message);
}

function addNewItem(value) {
  var listItem = document.createElement("li");
  listItem.innerText = value;
  listItem.className = "list-item ";
  myList.appendChild(listItem);
}

addButton.addEventListener("click", function() {
  addNewItem(itemInput.value);
  itemInput.value = "";
});

clearButton.addEventListener("click", function() {
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
});
