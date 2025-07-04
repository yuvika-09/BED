let file3 = require("./file3.js");

let res = file3.add(2,3)
console.log(res)

function divide (a,b) {
    return a/b;
}

module.exports.divide = divide;
