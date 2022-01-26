const nmodule = require("./index.js");
console.log(nmodule)
console.log(nmodule.nmodule)
//synchronous coding
function an(){
    
        console.log("get message")
}
function bn(){
    console.log("display message")
}
an()
bn()

//using setTimeout(synchronous)
function ab(){
    setTimeout(()=>{
        console.log("get message")
        
    },1000)
}
function bb(){
    console.log("display message")
}
ab()
bb()

//using callback( asynchronously)
function a(msg,callback){
    setTimeout(()=>{
        console.log(msg)
        callback()
    },1000)
}
function b(){
    console.log("display message")
}
a("get message",b)
//asynchronous using promises


