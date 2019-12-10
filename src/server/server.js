var http = require('http');

var server = http.createServer((req, res) => {
    console.log("Method: " + req.method);
    console.log("URL: '" + req.url+"'");
    
    if(req.method === "GET") {
        res.write("Response");

        //if trying to retrieve deck
        if(/^\/getDeck\?/g.test(req.url)){
            let params=req.url.substring(9).split('&');
            res.write(getDeck(params));
        }
    }
    res.end();

}).on('error', (err) => {
    console.log(err.message);
});

server.listen(8080);


function getDeck(params){
    let data;
    for(let p=0;p<params.length;p++){
        params[p]=params[p].split('=')[1];
        console.log("  param "+p+"="+params[p]);
    }
    //param[0]=userID,param[1]=deckName
    //data = sql.getDeck(param[0],param[1]) or however it's going to be
    return data
}

function getUserDecks(params){

}

function registerUser(params){

}

function verifyUser(params){
    //returns boolean
}

function deleteDeck(params){
    //returns null?
}

function saveDeck(params){

}