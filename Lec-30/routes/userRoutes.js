const express = require("express");
const router = express.Router();

router.post("/addUser",postUser);

module.exports = router;