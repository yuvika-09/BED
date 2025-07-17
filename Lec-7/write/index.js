const fs = require("fs")

let users = [
    {
        id:1,
        name:"Yuvika",
        age:"19"
    },
    {
        id:2,
        name:"Upasana",
        age:"19"
    }
]

fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) console.log(err)
    console.log("users written")
})



let users2 = [
    {
        id:3,
        name:"Sonam",
        age:"20"
    },
    {
        id:4,
        name:"Samiya",
        age:"20"
    }
]

fs.writeFile("../users2.txt",JSON.stringify(users2),function(err){
    if(err) console.log(err)
    console.log("users2 written")
})

