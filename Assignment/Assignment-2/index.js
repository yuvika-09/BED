// one file with product data nd other file with user data
// 2 args from terminal - username and productname
// if both user nd product exist, place order 
// order history file



const fs = require("fs");

const username = process.argv[2];
const productname = process.argv[3];

if (!username || !productname) {
    return console.log("data insufficient");
}

fs.readFile("./users.txt", "utf-8", function (err, data1) {
    if (err) return console.log(err);
    let users = data1.replace(/\r/g, '').split('\n');
    if (!users.includes(username)) return console.log("no user found");

    fs.readFile("./products.txt", "utf-8", function (err, data2) {
        if (err) return console.log(err);
        let products = data2.replace(/\r/g, '').split('\n');
        if (!products.includes(productname)) return console.log("no product found");

        let orderData = {
            user: username,
            product: productname
        };
        fs.readFile("./orderHistory.txt", "utf-8", function (err, data3) {
            let orders = [];
            if(err) return console.log(err)
            if (data3.trim()) {
                orders = JSON.parse(data3);
            }
            orders.push(orderData);
            fs.writeFile("./orderHistory.txt", JSON.stringify(orders), function (err) {
                if (err) return console.log(err);
                console.log("order placed");
            });
        });
    });
});


 


