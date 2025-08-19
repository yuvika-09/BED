const express = require('express');
const mongoose = require('mongoose');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Blog = require('./model/blog');
const User = require('./model/user');

let blogRoutes = require('./routes/blogRoutes');
let userRoutes = require('./routes/userRoutes'); 

app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/G27DBs')
  .then(() => console.log('Connected!'));

app.listen(5556, () => {
    console.log(`Server is running on http://localhost:5556`);
});
