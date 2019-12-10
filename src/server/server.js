var http = require('http');

var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("URL: '" + req.url+"'");
    
    if(req.method === "GET") {
        res.write("Response");
        let params=splitParams(req.url.substring(9).split('&'));
        //if trying to retrieve deck
        if(/^\/getDeck\?/g.test(req.url))
            res.write(getDeck(params));
    }
    res.end();

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8080);


function splitParams(params){
    let data=new Map();
    for(let p=0;p<params.length;p++){
        params[p]=params[p].split('=');
        data.set(params[p][0].toLowerCase(),params[p][1].toLowerCase());
        console.log("   "+params[p][0]+"="+params[p][1]);
    }
    //data[0]=userid,data[1]=deckname
    //data = sql.getDeck(data[0],data[1]) or however it's going to be
    return data;
}

function getDeck(params){
    //sql.getDeck(params)
    //or
    //sql.getDeck(param.get(userid'),param.get('deckname'))
    return "{data}";
}