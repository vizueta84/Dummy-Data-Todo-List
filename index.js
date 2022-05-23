const arrayOfTodos = [
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
    document.createElement("li")
    let liElement = document.createElement("li");
    let textNode = document.createTextNode(arrayOfTodos[i].title);
    liElement.appendChild(textNode);
    olElement.appendChild(liElement);  
}}
console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20