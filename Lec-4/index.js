// function buyProduct (product_name, cb) {
//     // some async operation
//     // 1. get product detail from product db
//     // 2. write order detail in user db
//     setTimeout(()=>{
//         console.log("order complete")
//         cb();
//     })
// }
// buyProduct("Iphone 16",function(){
//     console.log("Product is purchased")
// })



let products = [
    {
        name:"samsung",
        amount:70000,
        quantity:10
    },
        {
        name:"Iphone 16",
        amount:100000,
        quantity:1
    }
];
let account_balance = 200000;
buyProduct("Iphone 16",function(err,amount){
    if(err) return console.log(err)
    console.log(amount)
    deductAmount(amount,function(err,message){
        if(err) return console.log(err)
        console.log(message)
    });
})
function buyProduct (product_name, cb) {
    let isAvailable = null;
    // implement for loop to find product in array
    for (let i = 0; i < products.length; i++) {
        if(products[i].name == product_name){
            isAvailable = products[i];
        }
    }
    if(!isAvailable){
        cb("product is not available",null)
    } else {
        cb(null,isAvailable.amount)
    }
}

function deductAmount(amount, cb){
    if(account_balance > amount){
        account_balance -= amount;
        cb(null,"product purchased")
    }else {
        cb("bank balance low",null)
    }
}


// Problems in callback
// 1. callback hell -> nested callbacks   => low readibility , inversion of control (cannot control our own control)
