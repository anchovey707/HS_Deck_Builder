var http = require('http');
let requestHandler= require('./requestModules.js');

var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("URL: '" + req.url+"'");

    if(req.method === "GET") {
        let url = req.url.toLocaleLowerCase();
        requestHandler.handleRequest(url, callback);
    }else if(req.method === "POST") {
        let url = req.url.toLocaleLowerCase();
        requestHandler.handleRequest(url, callback);
    }

<<<<<<< HEAD
    function callback(error, result) {
        if(error) res.end(error.code);
        else res.end(result.toString());
=======
    function callback(result,error ) {
        if(error) throw error;
        res.end(result.toString());
>>>>>>> 02f39c3bccf1881d43f9bbc4d0a11ea60d6e031b
    }
    

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8080);

