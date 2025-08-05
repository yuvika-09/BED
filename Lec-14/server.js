const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/users",(req,res)=>{
    fs.readFile("./users.json","utf-8",function(err,data){
        if(err) return res.send(err);
        const users = JSON.parse(data);
        res.json(users);
    })
})

app.listen(5050,()=>{
    console.log("server running on http://localhost:5050");
})