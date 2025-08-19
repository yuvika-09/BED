const express = require("express");
const router = express.Router();  // small -> app

// let blogController = require('../controller/blogController');
// let postAddBlog = blogController.postAddBlog;
// let deleteOneBlog = blogController.deleteOneBlog;
// let getAllBlogs = blogController.getAllBlogs;
// let getOneBlog = blogController.getOneBlog; 

let { postAddBlog, deleteOneBlog, getAllBlogs, getOneBlog } = require('../controller/blogController');

// create
router.post("/", postAddBlog)

router.delete("/:blogId", deleteOneBlog)

// read
// read all data
router.get("/",getAllBlogs)

// read single data
router.get("/:id",getOneBlog)


module.exports = router;