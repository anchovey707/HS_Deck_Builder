var http = require('http');

var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("URL: '" + req.url+"'");
    
    if(req.method === "GET") {
        res.write("Response");

        //if trying to retrieve deck
        if(/^\/getDeck\?/g.test(req.url)){

            let params=req.url.substring(9).split('&');

            for(let p=0;p<params.length;p++){
                params[p]=params[p].split('=')[1];
                console.log("  param "+p+"="+params[p]);
            }
            
            //sql.getDeck(param[0],param[1])
            res.write("Here's that deck");
            
        }
    }
    res.end();

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8080);
