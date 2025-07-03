const fs = require("fs");
console.log(fs);
console.log("start");

setTimeout(()=>{
    console.log("Set timeout")
},0)
setImmediate(()=>{
    console.log("Set immediate ")
})
console.log("end");