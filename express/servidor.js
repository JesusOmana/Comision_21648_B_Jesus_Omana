const http = require("node:http");

http.createServer(function(req,res){
    res.write("helo")
    res.end()
    
}).listen(3000,console.log("servidor en el puerto 3000"));