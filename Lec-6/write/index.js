const fs = require("fs");

fs.writeFile("../demo.txt","hello g27",function(err){
    if(err) return console.log(err);
    console.log("success!")
})


fs.writeFile("../b.txt","this is a new file",function(err){
    if(err) return console.log(err);
    console.log("success!")
})
