var sql = require('./sql.js');

module.exports.handleRequest = function handleRequest(url, callback) {
    let params = splitParams(url);

    if(url.includes('getdeck')) {
        sql.getDeck(params, callback);
    }
    else if(url.includes('savedeck')) {
        sql.saveDeck(params, callback);
    }
    else if(url.includes('deletedeck')) {
        sql.deleteDeck(params, callback);
    }
    else if(url.includes('registerUser')) {
        sql.registerUser(params, callback);
    }
    else if(url.includes('verifyUser')) {
        sql.verifyUser(params, callback);
    }
}

function splitParams(url){
    let params=[];
    let paramString=url.split('?')[1];
    if(paramString!=undefined){
        let array=paramString.split('&');
        for(let i=0;i<array.length;i++){
            pair=array[i].split('=');
            if(pair[0]!==undefined){
                if(pair[1]===undefined)
                    pair[1]='';
                    params[pair[0].toLowerCase()]=pair[1].toLowerCase();
            }
            console.log("   "+pair[0]+"="+pair[1]);
        }
    }
    return params;
}