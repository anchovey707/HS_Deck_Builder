var http = require('http');

var server = http.createServer((req, res) => {
    console.log("Method:"+req.method);
    console.log("URL:"+req.url);
    res.write("Hello");
    res.end();
});

server.listen(8080);
