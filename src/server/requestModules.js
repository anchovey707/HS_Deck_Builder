var sql = require('./sql.js');

module.exports.handleRequest = function handleRequest(url) {
    let params = splitParams(url);

    if(url.includes('getdeck')) {
        return getDeck(params);
    }
    else if(url.includes('savedeck')) {
        return saveDeck(params);
    }
    else if(url.includes('deletedeck')) {
        return deleteDeck(params);
    }
    else if(url.includes('registerUser')) {
        return registerUser(params);
    }
    else if(url.includes('verifyUser')) {
        return verifyUser(params);
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

function getDeck(params) {
    console.log("GETDECK(){ deckname="+params['deckname']);
    return sql.getDeck(params);
}

function saveDeck(params) {
    return sql.saveDeck(params);
}

function deleteDeck(params) {
    return sql.deleteDeck(params);
}

function registerUser(params) {
    return sql.registerUser(params);
}

function verifyUser(params) {
    return sql.verifyUser(params);
}