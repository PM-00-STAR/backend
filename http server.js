//Creating http server in node
const http = require("http")
const hostname='127.0.0.1'
const port=3000;

const server = http.createServer((req,res)=>{//callback function
    res.statusCode= 200;//code of successful response
    res.setHeader('Content-Type','text/plain');
    res.end("Welcome to HTTP server");
})
server.listen(port,hostname , ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
//short me
const http = require("http")
const hostname='127.0.0.1'
const port=3000;

const server = http.createServer((req,res)=>{//callback function
    res.writeHead(200,{'Content-Type':'text/plain'})
     res.write("Welcome to HTTP server");
     res.end()
}).listen(port,hostname , ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

