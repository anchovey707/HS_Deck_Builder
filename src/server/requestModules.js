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
    let array=(url.split('?')[1]).split('&');
    for(let i=0;i<array.length;i++){
        array[i]=array[i].split('=');
        data.set(array[i][0].toLowerCase(),array[i][1].toLowerCase());
        console.log("   "+array[i][0]+"="+array[i][1]);
    }
    return data;
}

function getDeck(params) {

}

function saveDeck(params) {

}

function deleteDeck(params) {

}