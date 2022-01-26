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
    setTimeout(()=>{//callback function uses 2 arguments of success and failure
        console.log(msg)
        callback()
    },1000)
}
function b(){
    console.log("display message")
}
a("get message",b)
//asynchronous using promises
let promise = new Promise(function(resolve,reject){//Promise is a class
    setTimeout(()=>resolve("Run before"),1000) //callbackfunction
});

promise.then(
    result=>{
        console.log(result)//when promise is resolved
    GetAfter()
    },
    error=>console.log(error)//when promise is rejected
)
function GetAfter(){
    console.log("Print After")
}
//GetAfter()
//async and await are much simpler to make asynchronouus
function Clow(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("hi")
        },2000)
    })
}

// function msg(){//make this function asynchronous
//     const msg = Clow()
//     console.log("Message",msg)
// }
async function msg(callback){
    const msg = await Clow()
    console.log("Message",msg)
    callback();
}
msg(getResult)

function getResult(){
    console.log("Execute After");
}

//getResult();
