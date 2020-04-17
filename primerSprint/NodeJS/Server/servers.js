const http = require('http');
const fs = require('fs');

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Bienvenidx al primer server de manucho creado con nodeJS');
}).listen(7777, 'localhost');