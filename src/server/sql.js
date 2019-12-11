var mysql = require('mysql');
module.exports.getDeck = getDeck;
module.exports.getUserDecks = getUserDecks;
module.exports.registerUser = registerUser;

function runQuery(sqlString){
    var con = mysql.createConnection({
        host: "18.234.74.106", 
        user: "hs_user",
        password: "hearthstone",
        database: "hs_decks"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      
    con.query(sqlString, function (err, result) {
      if (err) throw err;
      return result;
    });
}


function getDeck(deckID){
    var sqlQuery = 'SELECT cardData FROM decks \
                    WHERE ID=\'' + deckID + '\';'; //consider adding LIMIT 1 to return inner JSON
    var result = runQuery(sqlQuery);
    return result;
}

function getUserDecks(userID){
    var sqlQuery = 'SELECT ID FROM decks \
                    WHERE userID=\'' + userID + '\';';
    var result = runQuery(sqlQuery);
    return result;
}

function registerUser(username, password){
    var sqlQuery = 'INSERT INTO users (username, password) \
                    VALUES (\'' + username + '\', \'' + password + '\');'
    var result = runQuery(sqlQuery);
}

function verifyUser(params){
}

function deleteDeck(params){
}

function saveDeck(params){
} 



registerUser('maple', 'syrup');
