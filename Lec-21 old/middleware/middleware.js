const User = require('../model/user');

async function login(req, res, next) {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                success: false,
                message: "Email and password are required"
            });
        }

        let foundUser = await User.findOne({ email, password }); // async query

        if (!foundUser) {
            return res.json({
                success: false,
                message: "Invalid credentials"
            });
        }

        return res.json({
            success: true,
            message: "Login successful",
            data: foundUser
        });

    } catch (err) {
        next(err); // error handling middleware
    }
}

function signup(req,res,next) {
    let {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.json({
            success: false,
            message: "All fields are required"
        });
    }
    next();
}


module.exports.login = login;
module.exports.signup = signup;
