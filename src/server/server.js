var http = require('http');
let requestHandler= require('./requestModules.js');
let querystring = require('querystring');
//test
var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("  URL: '" + req.url+"'");
    let data='';
    req.on('data', chunk => {
        data += chunk.toString();
    });

    // when complete POST data is received
    req.on('end', () => {
        // use parse() method
        data = querystring.parse(data);
        
        // { name: 'John', gender: 'MALE', email: 'john@gmail.com' }
        console.log("DATA==="+data.toString());
        
        let url = req.url.toLowerCase();
        requestHandler.handleRequest(url,callback,data);
        // rest of the code
    });

    function callback(error, result) {
        if(error) res.end(error.code);
        else {
            if(req.url.includes('png')){
                res.writeHead(200, {"Content-Type": "image/png"});
                res.end(result);
            }
            res.end(result.toString());
        }
    }
    

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8000);

