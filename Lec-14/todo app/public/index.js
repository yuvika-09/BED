const todoContainer = document.querySelector(".todo-container");

function getTodos(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json();
    }).then((data)=>{
        console.log(data)
        data.forEach((todo)=>{
            displayTodo(todo);
        });
    })
    .catch((err)=>{
        console.log(err)
    })
}

function displayTodo(todo) {
    let li = document.createElement("li");
    li.innerHTML = `<div class="todo-info">
                <h1>${todo.title}</h1>
                <p>${todo.description}</p>
            </div>
            <div class="todo-btn">
                <button class="delete-btn">X</button>
                <button class="edit-btn">edit</button>
            </div>`
    todoContainer.appendChild(li);
}

getTodos("http://localhost:3232/todos");