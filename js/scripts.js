

//appending todoInput to ul
function todoList() {                  //todoInput is your ID for entered tasks
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoInput").value;
  var text = document.createTextNode("inputValue");
  li.appendChild(text);                //append/create list with text /inputValue
  if ("inputValue" === '') {             //=== strict equality
    alert("You didn't enter a task...");//if inputValue is blank alert will pop up
} else {                                //if inputValue is valid continue..
  document.getElementById("todoList").appendChild(li);//returning object, specific element that matches ID
}
document.getElementById("todoInput").value = ""; //.value collecting the data entered(todoInput)


}
