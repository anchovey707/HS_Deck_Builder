var mysql = require('mysql');
var passwordHash = require('./PasswordHash.js');

module.exports.getDeck = getDeck;
module.exports.getDecks = getDecks;
module.exports.getUserDecks = getUserDecks;
module.exports.registerUser = registerUser;
module.exports.deleteUser = deleteUser;
module.exports.getUsers = getUsers;
module.exports.verifyUser = verifyUser;
module.exports.deleteDeck = deleteDeck;
module.exports.saveDeck = saveDeck;
var con = mysql.createConnection({
  host: "34.227.68.162", 
  user: "hs_user",
  password: "hearthstone",
  database: "hs_decks"
});

function runQuery(sqlString, callback,method){
    

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

//used to determine if there is anything
function basicQuery(sqlString){
  if(con.state==='disconnected')
    con.connect((err) => {
      if (err) throw err;
      console.log('Connected!');
      con.query(sqlString, (err, result) => {
        if (err) throw err;
        console.log(result);
        if(result.lenght===1)
          return result[0].found;
        return 0;
      });
    });
  else
    con.query(sqlString, (err, result) => {
      if (err) throw err;
      console.log(result);
      if(result.lenght===1)
        return result[0].found;
      return 0;
    });
}




function getDeck(params,callback){
    var sqlQuery = 'SELECT carddata FROM decks \
                    WHERE userID=1 and deckname=\'' + params['deckname'] + '\' LIMIT 1;'; //consider adding LIMIT 1 to return inner JSON
    runQuery(sqlQuery,callback,"GET");
}

function getDecks(params, callback) {
  console.log('getDecks');
  var sqlQuery = 'SELECT * FROM decks \;';
  runQuery(sqlQuery, callback, "GET");
}

function getUserDecks(params, callback){
    var sqlQuery = 'SELECT ID,name FROM decks \
                    WHERE userID=\'' + params['userid'] + '\';';
    runQuery(sqlQuery,callback,"GET");
}

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
  var sqlQuery = 'DELETE FROM decks WHERE userID=1 and deckname=\'' + params['deckname'] + '\';';
  runQuery(sqlQuery, callback,"POST");
}

function saveDeck(params, callback){


  while(params['carddata'].indexOf('%20')>=0)
    params['carddata']=params['carddata'].replace('%20',' ');
  while(params['carddata'].indexOf('%22,%22')>=0)
    params['carddata']=params['carddata'].replace('%22,%22','/');
    params['carddata']=params['carddata'].substring(4,params['carddata'].length-4);
  console.log('Saving='+params['carddata']);

  let found=basicQuery("select 1 as 'found' from decks where userID="+params['userid']+" and deckname='"+params['deckname']+"' limit 1;");
  if(!found){
    var sqlQuery = 'INSERT INTO decks (userID, deckname, cardData) \
                    VALUES (\'' + params['userid'] + '\', \'' + params['deckname'] + '\', \'' + params['carddata'] + '\');';
    runQuery(sqlQuery, callback,"POST");
  }else{
    callback(null,'ER_DECK_EXSIST');
  }
}
