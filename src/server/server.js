var http = require('http');
let requestHandler= require('./requestModules.js');

var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("  URL: '" + req.url+"'");


    if(req.method === "GET") {
        let url = req.url.toLocaleLowerCase();
        requestHandler.handleRequest(url, callback);
    }else if(req.method === "POST") {
        let url = req.url.toLocaleLowerCase();
        requestHandler.handleRequest(url, callback);
    }

    function callback(error, result) {
        if(error) res.end(error.code);
        else res.end(result.toString());
    }
    

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8000);

