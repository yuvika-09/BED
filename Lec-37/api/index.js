const express = require("express");

const app = express();

app.use(express.json());

const orderRoutes = require("./routes/order");
app.use("/api/v1/order",orderRoutes);

app.listen(4000,() => {
    console.log("server started");
})