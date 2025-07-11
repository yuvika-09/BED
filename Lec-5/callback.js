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
function buyProduct (product_name) {
    return new Promise((resolve,reject)=>{
        let isAvailable = null;
        // implement for loop to find product in array
        for (let i = 0; i < products.length; i++) {
            if(products[i].name == product_name){
                isAvailable = products[i];
            }
        }
        if(!isAvailable){
            reject("product is not available")
        } else {
            resolve(isAvailable.amount)
        }
    })
}
// buyProduct("samsung")
// .then((data)=>{
//     return deductAmount(data)
// })
// .then((msg)=>{
//     console.log(msg)
//     console.log(account_balance)
// })
// .catch((err)=>{
//     console.log(err)
// })

function deductAmount(amount){
    return new Promise((resolve,reject)=>{
        if(account_balance > amount){
            account_balance -= amount;
            return resolve("product purchased")
        }else {
            return reject("bank balance low")
        }
    })
}

async function myFunc(){
    try{
        let amount = await buyProduct("Iphone")
        let message = await deductAmount(amount)
        console.log(message)
    }
    catch (error){
        console.log(error)
    }
}
console.log(myFunc())
console.log("start")
console.log("end")