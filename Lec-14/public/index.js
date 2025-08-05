let userContainer = document.querySelector(".user-container");

function getUsers(URL) {
    // send req to this URL to get users data
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        // console.log(data)
        // showUsers(data);
        data.forEach((user)=>{
            displayUser(user);
        })
    })    
    .catch((err)=>{
        console.log(err);    
    })
}

// function showUsers(users) {
//     const usersContainer = document.getElementById("users");
//     usersContainer.innerHTML = "";
//     users.forEach(user => {
//         const userDiv = document.createElement("div");
//         userDiv.innerText = `Name: ${user.name}, Username: ${user.username}`;
//         usersContainer.appendChild(userDiv);
//     });
// }

function displayUser(user) {
    // user --> {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
    let li = document.createElement("li");
    li.innerHTML = `<div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div class="user-btn">
                <button class="delete-btn">X</button>
                <button class="edit-btn">edit</button>
            </div>`
    userContainer.appendChild(li);
}

getUsers("http://localhost:5050/users");
