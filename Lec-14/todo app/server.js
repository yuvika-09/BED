const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());

app.get("/todos", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) return res.send("Error reading todos");
        res.send(JSON.parse(data));
    });
});

app.post("/add-todo", (req, res) => {
    const newTodo = req.body;

    fs.readFile("todos.json", "utf-8", (err, data) => {
        let todos = [];
        if (!err && data) {
            todos = JSON.parse(data);
        }

        todos.push(newTodo);

        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
            if (err) return res.send("Error saving todo");
            res.send({ message: "Todo added" });
        });
    });
});

app.listen(3232, () => {
    console.log("Server running at http://localhost:3232");
});
