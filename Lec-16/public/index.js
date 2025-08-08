// USING .THEN , .CATCH
// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     });
// }


// USING ASYNC AWAIT
async function getCommentData() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

getCommentData();

function adduser(email, password){
    axios.post('/user', {
        email: email,
        password: password
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err.message);
    })
}

adduser("email.com","1234");