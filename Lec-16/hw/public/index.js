// Fetch comments from API and display in list
async function getCommentData() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const comments = response.data.slice(0, 5); // show only first 5
        const list = document.querySelector(".comment-list");

        list.innerHTML = "";
        comments.forEach(comment => {
            const li = document.createElement("li");
            li.textContent = `${comment.name} (${comment.email})`;;
            list.appendChild(li);
        });
    } catch (err) {
        console.log(err.message);
    }
}

getCommentData();

// Handle form submission
document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    addUser(email, password);
});

function addUser(email, password) {
    axios.post('/user', { email, password })
        .then((res) => {
            console.log(res.data);
            alert(res.data.message);
        })
        .catch((err) => {
            console.log(err.message);
        });
}