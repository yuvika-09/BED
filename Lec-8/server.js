const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    // console.log(req)
    // res.send("hello world")   //text
    // res.send("<h1>hello world</h1>")    //html
    res.json({      // json
        name:"Yuvika",
        address:"Zirakpur",
        isLogin:"true"
    })
})

//path params/variable - 1.params 2.query parameters
// 1. params
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id)
    let id = req.params.id;
    res.send(id) 
})

// 2. query parameters
app.get("/blogs",(req,res)=>{
    console.log(req.query.title)
    console.log(req.query.desc)
    res.send("got it")
})

app.listen(2223,()=>{
    console.log("server started")
})