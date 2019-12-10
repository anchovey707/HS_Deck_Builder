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
}

function splitParams(url){
    let data=new Map();
    url=url.split('?')[1].split('&');
    for(let p=0;p<url.length;p++){
        params[p]=params[p].split('=');
        data.set(params[p][0].toLowerCase(),params[p][1].toLowerCase());
        console.log("   "+params[p][0]+"="+params[p][1]);
    }
    return data;
}

function getDeck(params) {

}

function saveDeck(params) {

}

function deleteDeck(params) {

}