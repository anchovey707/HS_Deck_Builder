module.exports.handleRequest = function handleRequest(url) {
    let params = getParams(url);

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

function getParams(url) {
    
}

function getDeck(params) {

}

function saveDeck(params) {

}

function deleteDeck(params) {

}