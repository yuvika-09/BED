const express = require("express");
const mongoose = require("mongoose");
const { m1, m2, checkAdmin,isLogin } = require("./middleware/middleware");
const app = express();

app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const blogRoutes = require("./routes/blogRoutes");

app.use(m1);
app.get("/home",(req,res,next)=>{
    console.log("running home")
    res.json({
        success: true,
        message: "Welcome to Home Page"
    })
    next()
})
app.use(m2);
app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin){
        return res.json({
            success: true,
            message: "Admin Dashboard"
        })
    }
    return res.json({
        success: false,
        message: "not authorised"
    })
})

app.use("/api/blogs", blogRoutes);


app.listen(3232,()=>{
    console.log(`Server is running on http://localhost:3232`);
})