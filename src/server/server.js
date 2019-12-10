var http = require('http');

var server = http.createServer((req, res) => {
    res.write("Hello");
    res.end();
});

server.listen(8080);
