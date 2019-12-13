var http = require('http');
let requestHandler= require('./requestModules.js');
let querystring = require('querystring');
//test
var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("  URL: '" + req.url+"'");
    
    let url = req.url.toLowerCase();
    requestHandler.handleRequest(url,callback);

    function callback(error, result) {
        if(error) res.end(error.message);
        else {
            if(req.url.includes('png')){
                res.writeHead(200, {"Content-Type": "image/png"});
                res.end(result);
            }else
                res.end(result.toString());
        }
    }
    

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8000);