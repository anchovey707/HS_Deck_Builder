var mysql = require('mysql');
var passwordHash = require('./PasswordHash.js');

module.exports.getDeck = getDeck;
module.exports.getAllDecks = getAllDecks;
module.exports.getUserDecks = getUserDecks;
module.exports.registerUser = registerUser;
module.exports.deleteUser = deleteUser;
module.exports.getUsers = getUsers;
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
        return callback(err, null);
      }

      console.log('Connected!');
      
      con.query(sqlString, (err, result) => {
        if (err) {
          return callback(err, null);
        }
        if(method === "GET") {
          callback(null,JSON.stringify(result));
        } else if (method === "POST"){
          callback(null,result.affectedRows);
        }
      });
    });
}





function getDeck(params,callback){
    var sqlQuery = 'SELECT carddata FROM decks \
                    WHERE ID=\'' + params['deckid'] + '\';'; //consider adding LIMIT 1 to return inner JSON
    runQuery(sqlQuery,callback,"GET");
}

function getAllDecks(params, callback) {
  var sqlQuery = 'SELECT * FROM decks \;';
  runQuery(sqlQuery, callback, "GET");
}

function getUserDecks(params, callback){
    var sqlQuery = 'SELECT ID,name FROM decks \
                    WHERE userID=\'' + params['userid'] + '\';';
    runQuery(sqlQuery,callback,"GET");
}
//http://localhost:8080/registerUser?username=DarkSamus&password=smashchamp
function registerUser(params, callback){
  //var hashedPassword = passwordHash.generate(params['password']);
  var sqlQuery = 'INSERT INTO users (username, password) \
                  VALUES (\'' + params['username'] + '\', \'' + params['password'] + '\');';
  runQuery(sqlQuery, callback, "POST");
}

function deleteUser(params, callback) {
  var sqlQuery = 'DELETE FROM users WHERE ID=\'' + params['userid'] + '\';';
  runQuery(sqlQuery, callback, "POST");
}

function verifyUser(params, callback){ 
  //var hashedPassword = passwordHash.generate(params['password']);
  var sqlQuery = 'SELECT ID,username FROM users \
                  WHERE username=\'' + params['username'] + '\' and password=\'' + params['password'] + '\';';
  runQuery(sqlQuery, callback, "GET");
}

function getUsers(params, callback) {
  var sqlQuery = 'SELECT * FROM users \;';
  runQuery(sqlQuery, callback, "GET");
}

function deleteDeck(params, callback){
  var sqlQuery = 'DELETE FROM decks WHERE ID=\'' + params['deckid'] + '\';';
  runQuery(sqlQuery, callback,"POST");
}

function saveDeck(params, callback){
  var sqlQuery = 'INSERT INTO decks (userID, name, cardData) \
                  VALUES (\'' + params['userid'] + '\', \'' + params['name'] + '\', \'' + params['carddata'] + '\');'
  runQuery(sqlQuery, callback,"POST");
}
