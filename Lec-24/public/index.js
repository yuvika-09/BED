//   SIGNUP FEATURE
let signupForm = document.querySelector("#signup-form");
let signupUsername = document.querySelector("#signup-username");
let signupEmail = document.querySelector("#signup-email");
let signupPassword = document.querySelector("#signup-password");

signupForm.addEventListener("submit",async function(e){
    e.preventDefault();
    let username = signupUsername.value;
    let email = signupEmail.value;
    let password = signupPassword.value;
    let response = await fetch("/api/users",{
        method: "POST",
        body: JSON.stringify({
            name: username,
            email: email,
            password: password
        }),
        headers:{
            "content-type": "application/json"
        }
    })
    let data = await response.json();
    console.log(data)
    if(data.success){
        alert("signup successful, pls login to continue");
        signupForm.reset();
    }
    else {
        alert("something went wrong, try again");
    }
})



//  LOGIN FEATURE
let loginForm = document.querySelector("#login-form");
let loginEmail = document.querySelector("#login-email");
let loginPassword = document.querySelector("#login-password");

loginForm.addEventListener("submit", async function (e){
    e.preventDefault();
    let email = loginEmail.value;
    let password = loginPassword.value;
    let response = await fetch("/api/auth/login",{
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers:{
            "content-type": "application/json"
        }
    })
    let data = await response.json();
    console.log(data)
    if(data.success){
        let token = data.token;
        localStorage.setItem("token",token);
        alert("login successful");
        loginForm.reset();
    } else {
        alert("invalid credentials, try again");
    }
})