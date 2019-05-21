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
  var deleteButton = document.createElement("button");
  var listItem = document.createElement("li");
  deleteButton.innerText = "Delete";
  deleteButton.className = "list-item__delete";
  listItem.innerText = value;
  listItem.className = "list-item";
  listItem.appendChild(deleteButton);
  deleteButton.onclick = function() {
    var listItem = this.parentNode;
    var list = listItem.parentNode;
    list.removeChild(listItem);
  };
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
