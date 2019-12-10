var http = require('http');

var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("URL: " + req.url);
    
    if(req.method === "GET") {
        res.write("Response");
    }
    res.end();

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8080);
