var mysql = require('mysql');

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




var sql = "select * from users where username='test' LIMIT 1;";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result[0].ID);
});