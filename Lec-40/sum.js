function sum(a,b) {
    // if(a === undefined || b === undefined){
    if(!a || !b){
        return "invalid arguments";
    }
    return a+b;
}

module.exports = sum;