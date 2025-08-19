const express = require("express");
const router = express.Router();

const User = require('../model/user');

let { postAddUser, getAllUsers, getOneUser } = require('../controller/userController');

// create user
router.post("/", postAddUser)

// read
// read all users
router.get("/", getAllUsers)

// read single user
router.get("/:id", getOneUser)


module.exports = router;