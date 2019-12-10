var mysql = require('mysql');

var con = mysql.createConnection({
  host: "18.234.74.106", 
  user: "hs_user",
  password: "hearthstone",
  database: "hs_decks"
});




function getDeck(userID, deckName){
    sqlQuery = 'SELECT cardData FROM decks \
                WHERE userID=\'' + userID + 
                '\' AND name=\'' + deckName + '\';';
    return sqlQuery;
}

function getUserDecks(userID){
    sqlQuery = 'SELECT ID FROM decks \
                WHERE userID=\'' + userID + '\';';
    return sqlQuery;
}

function registerUser(params){

}

function verifyUser(params){

}

function deleteDeck(params){

}

function saveDeck(params){
    
} 

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DESC decks;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });