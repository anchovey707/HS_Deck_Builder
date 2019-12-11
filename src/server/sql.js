var mysql = require('mysql');

module.exports.getDeck = getDeck;
module.exports.getUserDecks = getUserDecks;
module.exports.registerUser = registerUser;
module.exports.verifyUser = verifyUser;
module.exports.deleteDeck = deleteDeck;
module.exports.saveDeck = saveDeck;

function runQuery(sqlString, callback,method){
    var con = mysql.createConnection({
        host: "34.227.68.162", 
        user: "hs_user",
        password: "hearthstone",
        database: "hs_decks"
      });

    con.connect((err) => {
      if (err) {
<<<<<<< HEAD
        return callback(err, null);
=======
        let error = new Error();
        error.message = "SQL: Connection Error";
        return callback(null,error);
>>>>>>> 02f39c3bccf1881d43f9bbc4d0a11ea60d6e031b
      }

      console.log('Connected!');
      
      con.query(sqlString, (err, result) => {
        if (err) {
<<<<<<< HEAD
          return callback(err, null);
=======
          let error = new Error();
          error.message = "SQL: Query Error";
          return callback(null,error);
>>>>>>> 02f39c3bccf1881d43f9bbc4d0a11ea60d6e031b
        }
        if(method === "GET") {
          callback(JSON.stringify(result),null);
        } else if (method === "POST"){
          callback(result.affectedRows,null);
        }
      });
    });
}





function getDeck(deckID,callback){
    var sqlQuery = 'SELECT cardData FROM decks \
                    WHERE ID=\'' + deckID + '\';'; //consider adding LIMIT 1 to return inner JSON
    var result = runQuery(sqlQuery,callback,"GET");
    //return result;
}

function getUserDecks(params, callback){
    var sqlQuery = 'SELECT ID,name FROM decks \
                    WHERE userID=\'' + params['userid'] + '\';';
    var result = runQuery(sqlQuery,callback,"GET");
    //return result;
}

function registerUser(params, callback){
    var sqlQuery = 'INSERT INTO users (username, password) \
                    VALUES (\'' + params['username'] + '\', \'' + params['password'] + '\');';
    runQuery(sqlQuery, callback, "POST");

      
}

function verifyUser(params, callback){ 
  var sqlQuery = 'SELECT ID,username FROM users \
                  WHERE username=\'' + params['username'] + '\' and password=\'' + params['password'] + '\';';
  runQuery(sqlQuery, callback, "GET");
}

function deleteDeck(params, callback){
  var sqlQuery = 'DELETE FROM users WHERE ID=\'' + params['deckid'] + '\';';
  runQuery(sqlQuery, callback,"POST");
}

function saveDeck(params, callback){
  var sqlQuery = 'INSERT INTO decks (userID, name, cardData) \
                  VALUES (\'' + params['userid'] + '\', \'' + params['name'] + '\', \'' + params['carddata'] + '\');'
  runQuery(sqlQuery, callback,"POST");
} 

function saveDeck(params, callback){ //tester code. use above saveDeck() instead of this one.
  var customSqlQuery = 'SELECT * FROM decks'
  runQuery(customSqlQuery, callback,"GET");
}

//registerUser('maple', 'syrup');
