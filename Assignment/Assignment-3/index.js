// function addTodo() {
//   const input = document.querySelector("#todoInput");
//   const text = input.value.trim();

//   if (text === "") return;

//   const li = document.createElement("li");

//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";

//   const span = document.createElement("span");
//   span.textContent = text;

//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   editBtn.onclick = () => {
//     const newText = prompt("Edit your task:", span.textContent);
//     if (newText !== null && newText.trim() !== "") {
//       span.textContent = newText.trim();
//     }
//   };

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.className = "delete";
//   deleteBtn.onclick = () => li.remove();

//   li.appendChild(checkbox);
//   li.appendChild(span);
//   li.appendChild(editBtn);
//   li.appendChild(deleteBtn);

//   document.getElementById("todoList").appendChild(li);
//   input.value = "";
// }



let todoInput = document.querySelector("#todoInput");
let todoForm = document.querySelector(".input-group");
let todoList = document.querySelector("#todoList");

let todoArray = []

todoForm.addEventListener("submit", function(e) {
    e.preventDefault(); 
    let value = inputValue();
    let newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: value
    }
    addTodo(newTodo);
    todoArray.push(newTodo);
    showAllTodos(todoArray);
    todoInput.value = ""; 
})

function inputValue() {
    return todoInput.value;
}

function showAllTodos(todoArray) {
    todoList.innerHTML = ""; 
    todoArray.forEach(todo => addTodo(todo));
}

function addTodo(todo) {
    let li = document.createElement("li"); 
    li.setAttribute("id", `${todo.id}`);
    li.innerHTML = `<div>
                <input type="checkbox" name="" id="checkbox" >
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laudantium.</p>
                </div>
            </div>`
    todoList.appendChild(li)
}