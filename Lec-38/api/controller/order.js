const OrderBook = require("../service/orderbook");

let {publisher} = require("../../shared/index.js");

module.exports.postPlaceOrder = async (req, res) => {
    // price, quantity, type, side, userName, symbol(comes from orderbook instance)
    let { price, quantity, type, side, symbol, username } = req.body;

    // basic validation
    if (!quantity || !type || !side || !username || !symbol) {
        return res.json({ message: "Missing required fields" });
    }

    let ob = OrderBook.getOrderBook(symbol);

    let response = ob.placeOrder(price, quantity, type, side, username, symbol);
    
    await publisher.PUBLISH("book : update" , JSON.stringify(response.book));
    res.json(response);
}
