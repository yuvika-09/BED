const express = require("express");

const app = express();

app.use(express.json());

let {publisher} = require("../shared/index.js");

const orderRoutes = require("./routes/order");
app.use("/api/v1/order",orderRoutes);

app.listen(4000,() => {
    console.log("server started");
})

publisher.connect()
.then(() => console.log("publisher client connected"))