const http = require("http");
const productos = [{

    name: "jesus",
    price: 1000,
    quantify: 20,
}]

http.createServer(function(req,res){
    
    if (req.url === "/products") {
        res.writeHead(200, {"content-type":"application/json"})
        res.write(JSON.stringify(productos))
        return res.end()
    }
    res.writeHead(200, {"content-type":"text/plain"})
    res.write(req.url)
    res.end()
}).listen(3000,console.log("servidor en el puerto 3000"));