var sql = require('./sql.js');

module.exports.handleRequest = function handleRequest(url) {
    let params = splitParams(url);

    if(url.includes('getdeck')) {
        getDeck(params);
    }
    else if(url.includes('savedeck')) {
        saveDeck(params);
    }
    else if(url.includes('deletedeck')) {
        deleteDeck(params);
    }
    else if(url.includes('registerUser')) {
        registerUser(params);
    }
    else if(url.includes('verifyUser')) {
        verifyUser(params);
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
    sql.getDeck(params);
}

function saveDeck(params) {
    sql.saveDeck(params);
}

function deleteDeck(params) {
    sql.deleteDeck(params);
}

function registerUser(params) {
    sql.registerUser(params);
}

function verifyUser(params) {
    sql.verifyUser(params);
}