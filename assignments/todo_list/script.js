var input_text = document.querySelector("input[name='todo_input']")
var btn = document.querySelector("button");
var list_div = document.querySelector(".todos")
var todos = document.querySelector(".todos");
var dropdown = document.querySelector("#dropdown");

btn.addEventListener("click", addToList);
input_text.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        addToList(e);
    }
});
var countItems = 0
function addToList(){
    var text = input_text.value;
    if (text === null || text === ""){
        alert("Please enter an item!!")
    }
    else{
        var node = document.createElement("p");
        var textNode = document.createTextNode(text);
        node.setAttribute("key", countItems);
        node.appendChild(textNode);
        list_div.appendChild(node);
        input_text.value = ""; input_text.focus();
        countItems += 1;
    }
}
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.text())
  .catch(function() {
    console.error("Could not fetch data");
  })
  .then((data) => {
    var todoArray = [];

// To remove list item on click
list_div.addEventListener("click", removeItem);
function removeItem(e){
    list_div.removeChild(e.target);
}

todoArray = data;
addInList(todoArray)

dropdown.addEventListener("change", populateList);

function populateList(){
  if(dropdown.value === "All"){
    todoArray = data;
    addInList(todoArray)
  }
  else if(dropdown.value === "Completed"){
    todoArray = data.filter((item) => item.completed);
    addInList(todoArray);
  }
  else{
    todoArray = data.filter((item) => !item.completed);
    addInList(todoArray);
  }
}
})
.catch(function() {
console.error("Could not fetch data!");
});
function addInList(todoArray) {
    todos.innerHTML = '';
    todoArray.forEach((item) => {
      var node = document.createElement("p");
      node.setAttribute("key", item.id);
      node.setAttribute("completed-status", item.completed)
      node.innerText = item.title;
      todos.appendChild(node);
    });
  } 