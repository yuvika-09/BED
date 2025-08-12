const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
    try {
        let { email, password } = req.body;
        console.log(email, password);

        res.json({
            success: true,
            message: "User added successfully",
            data: { email, password }
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
});

app.listen(3300, () => {
    console.log(`Server is running on http://localhost:3300`);
});