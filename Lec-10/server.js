const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.static(__dirname+"/public"))
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })

// app.get("/about.html",(req,res)=>{
//     res.sendFile(__dirname+"/about.html")
// })

app.use(express.urlencoded({ extended: true }));
app.post("/adduser", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;     
    const password = req.body.password;
    const newUser = { name, email, password };

    fs.readFile("data.txt", "utf8", (err, data) => {
        let users = [];
        if (!err && data) {
            try {
                users = JSON.parse(data);
            } catch (e) {
                users = [];
            }
        }
        users.push(newUser);
        fs.writeFile("data.txt", JSON.stringify(users), (err) => {
            if (err) {
                return res.send("Failed to store data in file.");
            }
            res.send("User data stored");
        });
    });
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err || !data) {
            return res.send("No users found. Please register first.");
        }
        let users = [];
        try {
            users = JSON.parse(data);
        } catch (e) {
            return res.send("Error reading user data.");
        }
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            res.send("Login successful!");
        } else {
            res.send("Invalid email or password.");
        }
    });
});


app.listen(2222, () => {
    console.log("Server started on port 2222");
});