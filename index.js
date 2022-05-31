let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem1",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}
]
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

function populateTodos(){
    // document.getElementById("todo-list");
let olElement = document.getElementById("todo-list");
// document.createElement("li")
// let liElement = document.createElement("li");
// let textNode = document.createTextNode(arrayOfTodos[0].title);
// liElement.appendChild(textNode);
// olElement.appendChild(liElement);

for (let i = 0; i < arrayOfTodos.length; i++){
    // let olElement = document.getElementById("todo-list");
    // line 37 is creating an LI element
    document.createElement("li")
    // line 39 is creating a variable and its called LiElement
    // and the value thats in this list item 
    let liElement = document.createElement("li");
    // line 42 create some text with current list item
    let textNode = document.createTextNode(arrayOfTodos[i].title);
    // line 44 is saying to put this text thats created on the list
    liElement.appendChild(textNode);
    olElement.appendChild(liElement);  
}}


function filterTodos(){
//     clear the previous todos from the view
// line 50 grabs the element by id todo list
let todolist = document.getElementById('todo-list');
// line 52 clears the OL
todolist.innerHTML = '';
// and populate it with only todos with the userID that matches the number inputted.
// grab the element input number
let numberInput = document.getElementById('inputNumber').value; 
console.log("!numberInput", numberInput)
// grab all the list items from arrayoftodos that have th user ID numberInput
const filteredarray = arrayOfTodos.filter((arrayOfTodos) => arrayOfTodos.userId == numberInput)

console.log ("! this is the filtered array",filteredarray)

for (let i = 0; i < filteredarray.length; i++){
    let olElement = document.getElementById("todo-list");
    // line 37 is creating an LI element
    document.createElement("li")
    // line 39 is creating a variable and its called LiElement
    // and the value thats in this list item 
    let liElement = document.createElement("li");
    // line 42 create some text with current list item
    let textNode = document.createTextNode(filteredarray[i].title);
    // line 44 is saying to put this text thats created on the list
    liElement.appendChild(textNode);
    olElement.appendChild(liElement);  
}}
function removeTodos(){
    // removes those todos from the view
    document.getElementById('removeTodos')
} 

function completed(){
//     shows only todos that are
// completed
// in filteredtodos() we used the property userId now we want to use the property completed.
// {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
}







console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20