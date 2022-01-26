//http request making
const http = require("http")
http.get('http://api.open-notify.org/astros.json',resp=>{
    resp.on('data', chunk=>{
        data+=chunk
    });
    resp.on('end',()=>{
        console.log(data)
    });
})