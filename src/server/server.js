var http = require('http');
let requestHandler= require('./requestModules.js');

var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("URL: '" + req.url+"'");
    
    if(req.method === "GET") {
        let url = req.url.toLocaleLowerCase();
        requestHandler.handleRequest(url, (result) => {
            console.log(result);
        });
    }
    res.end();

}).on('error', (err) => {
    console.log(err.message);
});

function callback(result) {
    console.log(result);
}

server.listen(8080);

