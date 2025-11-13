const OrderBook = require("../service/orderbook");
const ob = new OrderBook("BTCUSD");
let {publisher} = require("../../shared/index.js");

module.exports.postPlaceOrder = async (req, res) => {
    // price, quantity, type, side, userName, symbol(comes from orderbook instance)
    let { price, quantity, type, side, username } = req.body;

    // basic validation
    if (!quantity || !type || !side || !username) {
        return res.json({ message: "Missing required fields" });
    }

    let response = ob.placeOrder(price, quantity, type, side, username);
    
    await publisher.connect();
    await publisher.PUBLISH("book : update" , JSON.stringify(response.book));
    res.json(response);
}
