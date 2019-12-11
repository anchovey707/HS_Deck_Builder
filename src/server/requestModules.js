module.exports.handleRequest = function handleRequest(url) {
    let params = splitParams(url);

    if(url.includes('getDeck')) {
        getDeck(params);
    }
    else if(url.includes('saveDeck')) {
        saveDeck(params);
    }
    else if(url.includes('deleteDeck')) {
        deleteDeck(params);
    }
    else if(url.includes('registerUser')) {
        registerUser(params);
    }
    else if(url.includes('verifyUser')) {
        verifyUser(params);
    }
}
/*
function splitParams(url) {
    let data=new Map();
    let array=(url.split('?')[1]).split('&');
    for(let i=0;i<array.length;i++){
        array[i]=array[i].split('=');
        data.set(array[i][0].toLowerCase(),array[i][1].toLowerCase());
        console.log("   "+array[i][0]+"="+array[i][1]);
    }
    return data;
}
*/
function splitParams(url) {
    let params = [];
    let paramIndex = url.indexOf('?') + 1;
    let paramString = url.substring(paramIndex, url.length);
    let individualParams = paramString.split('&');

    for( let i = 0; i < individualParams.length; i++ ) {
        let keyValueSplit = individualParams[i].split('=');
        let key = keyValueSplit[0];
        let value = keyValueSplit[1];

        params[key] = value;
    }

    for (key in params) {
        console.log(key + ': ' + params[key]);
    }

    return params;
}

function getDeck(params) {

}

function saveDeck(params) {

}

function deleteDeck(params) {

}

function registerUser(params) {

}

function verifyUser(params) {

}