const Principal = require("./Principal");

function suspendStudent(name){
    // let principal = new Principal("Yuvika");
    let principal = Principal.getPrincipal();
    principal.suspend(name);
}

function removeSuspension(name){
    // let principal = new Principal("Yuvi");
    let principal = Principal.getPrincipal();
    principal.removeSuspension(name);
}