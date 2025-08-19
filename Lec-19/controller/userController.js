const User = require('../model/user');

module.exports.postAddUser = async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = {
        name : name,
        email : email,
        password : password
    }
    let newUser = new User(user)
    await newUser.save()
    res.json({
        success : true,
        message : "user added successfully",
        data : newUser
    })
}


module.exports.getAllUsers = async (req,res)=>{
    let allUsers = await User.find();
    res.json({
        success : true,
        message : "all users fetched successfully",
        data : allUsers
    })
}


module.exports.getOneUser = async(req,res)=>{
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success : true,
        message : "user fetched successfully",
        data : user
    })
}