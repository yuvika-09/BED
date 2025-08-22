const express = require("express");
const router = express.Router();

const User = require('../model/user.js');

let { postAddUser, getOneUser} = require('../controller/userController.js');

const {signup,login} = require("../middleware/middleware.js");

router.post("/signup",signup, postAddUser);

router.get("/login", login, getOneUser);


module.exports = router;