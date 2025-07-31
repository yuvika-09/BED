const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get("/todos", (req,res) => {
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) return res.send(err);
    const todos = JSON.parse(data);
    res.json(todos);
  });
});

app.listen(3232, () => {
  console.log(`Server is running on http://localhost:3232`);
});