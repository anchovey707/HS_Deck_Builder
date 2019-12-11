var mysql = require('mysql');

module.exports.getDeck = getDeck;
module.exports.getUserDecks = getUserDecks;
module.exports.registerUser = registerUser;
module.exports.verifyUser = verifyUser;
module.exports.deleteDeck = deleteDeck;
module.exports.saveDeck = saveDeck;

function runQuery(sqlString, callback){
    var con = mysql.createConnection({
        host: "34.227.68.162", 
        user: "hs_user",
        password: "hearthstone",
        database: "hs_decks"
      });

    con.connect((err) => {
      if (err) {
        console.log('Connection Error');
        throw err;
      }

      console.log('Connected!');

      con.query(sqlString, (err, result) => {
        if (err) {
          console.log('Query Error');
          throw err;
        }
        callback(result);
      });
    });
}


function getDeck(deckID, callback){
    var sqlQuery = 'SELECT cardData FROM decks \
                    WHERE ID=\'' + deckID + '\';'; //consider adding LIMIT 1 to return inner JSON
    runQuery(sqlQuery, callback);
}

function getUserDecks(params, callback){
    var sqlQuery = 'SELECT ID FROM decks \
                    WHERE userID=\'' + params['userid'] + '\';';
    runQuery(sqlQuery, callback);
}

function registerUser(params, callback){
    console.log('Here');
    var sqlQuery = 'INSERT INTO users (username, password) \
                    VALUES (\'' + params['username'] + '\', \'' + params['password'] + '\');'
    runQuery(sqlQuery, callback);
}

function verifyUser(params, callback){ 
  var sqlQuery = 'SELECT * FROM users \
                  WHERE username=\'' + params['username'] + '\' and password=\'' + params['password'] + '\';';
  runQuery(sqlQuery, callback);
}

function deleteDeck(params, callback){
  var sqlQuery = 'DELETE FROM users WHERE ID=\'' + params['deckid'] + '\';';
  runQuery(sqlQuery, callback);
}

function saveDeck(params, callback){
  var sqlQuery = 'INSERT INTO decks (name, cardData) \
                  VALUES (\'' + params['name'] + '\', \'' + params['carddata'] + '\');'
  runQuery(sqlQuery, callback);
} 



//registerUser('maple', 'syrup');
