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
        console.log('Connection Error');
        throw err;
      }

      console.log('Connected!');
      
        con.query(sqlString, (err, result) => {
          if (err) {
            console.log('Query Error');
            throw err;
          }
          if(method==="GET"){
            callback(JSON.stringify(result));
          }else if(method==="POST"){
            callback(result.affectedRows);
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
                    VALUES (\'' + params['username'] + '\', \'' + params['password'] + '\');'
    runQuery(sqlQuery, callback,"POST");
}

function verifyUser(params, callback){ 
  var sqlQuery = 'SELECT ID,username FROM users \
                  WHERE username=\'' + params['username'] + '\' and password=\'' + params['password'] + '\';';
  runQuery(sqlQuery, callback, "GET");
}

function deleteDeck(params, callback){
<<<<<<< HEAD
  var sqlQuery = 'DELETE FROM users WHERE ID=\'' + params['deckid'] + '\';';
  runQuery(sqlQuery, callback,"POST");
}

function saveDeck(params, callback){
  var sqlQuery = 'INSERT INTO decks (name, cardData) \
                  VALUES (\'' + params['name'] + '\', \'' + params['carddata'] + '\');'
  runQuery(sqlQuery, callback,"POST");
=======
  var sqlQuery = 'DELETE FROM decks WHERE ID=\'' + params['deckid'] + '\';';
  runQuery(sqlQuery, callback);
}

function saveDeck(params, callback){
  var sqlQuery = "INSERT INTO decks (userID, name, cardData)"
                  +"VALUES ("+params['userid']+",'"+ params['name'] + "','" + params['carddata'] + "');"
  runQuery(sqlQuery, callback);
>>>>>>> cb001bb89e3329a0f50560d61e129e87e48cc479
} 



//registerUser('maple', 'syrup');
