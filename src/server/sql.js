var mysql = require('mysql');
module.exports.getDeck = getDeck;
module.exports.getUserDecks = getUserDecks;
module.exports.registerUser = registerUser;

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



function getDeck(deckID){
    sqlQuery = 'SELECT cardData FROM decks \
                WHERE ID=\'' + deckID + '\';'; //consider adding LIMIT 1 to return inner JSON
    return sqlQuery;
}

function getUserDecks(userID){
    sqlQuery = 'SELECT ID FROM decks \
                WHERE userID=\'' + userID + '\';';
    return sqlQuery;
}

function registerUser(username, password){
    sqlQuery = 'INSERT INTO users (username, password) VALUES (\'' + username + '\', \'' + password + '\');'
    return sqlQuery;
}

function verifyUser(params){

}

function deleteDeck(params){

}

function saveDeck(params){
    
} 




var sql = registerUser('avocado', 'toast');
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});