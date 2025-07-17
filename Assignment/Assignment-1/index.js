// ASSIGNMENT - 10mrks 
// lec-6 hw
// 1. write data in file (demo.txt), input will pe passed using terminal 
// process.argv




const fs = require('fs');

const inputData = process.argv.slice(2).join(' ');

fs.writeFile('./demo.txt', inputData, (err) => {
    if (err) {
        return console.log( err);
    }
    console.log("demo.txt written");
});
