const fs = require("fs");

fs.readFile("../demo.txt", "utf-8", function (err, data1) {
    if (err) return console.log(err);

    fs.readFile("../b.txt", "utf-8", function (err, data2) {
        if (err) return console.log(err);

        const data = data1.trim() + "\n" + data2.trim();

        fs.writeFile("./result.txt", data, function (err) {
            if (err) return console.log(err);
            console.log("data merged!");
        });
    });
});