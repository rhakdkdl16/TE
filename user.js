var express = require('express');
var router = express.Router();
var crypto = require('crypto');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/addscore', function(req, res, next) {
  var username = req.body.username;
  var score = req.body.score;
  var name = req.body.name;

  var db = req.app.get('database');

  if (db == undefined) {
    res.json({message:'503 Server Error'});
    return;
  }

  var validate = userValidation(username, score);
  if (validate == false) {
    res.json({message:'400 Bad Request'});
  }
  
  var usersCollection = db.collection('users');

  usersCollection.count({'username':username}, function(err, result) {
    if (err) throw(err);

    if (result > 0) {
      res.json({message: '400 Bad Request'});
      return;
    } else {
      // var cryptoPassword = crypto.createHash('sha512').update(password).digest('base64');
    
      crypto.pdkdf2(password,'10',100,64,'sha512',function(err,key){
      
      });



      usersCollection.insertOne({'username': username, 
      'password': cryptoPassword, 'name': name}, function(err, result) {
        if (err) throw(err);
        if (result.ops.length > 0)
          res.json(result.ops[0]);
        else
          res.json({message:'503 Server Error'});
      });
    }
  });
});

var userValidation = function(username, score,name) { 
  if (score >= 10) {
    return false;
  }
  return true;
}

/* 로그인 */
router.post('/signin', function(req, res, next) {

  // POST /login ({id= username, pa= password})
  // if(id = usersCollection.id && crypto.pdkdf2(password,'10',100,64,'sha512',function(err,key) = usersCollection.cryptoPassword))
  // {
  //   return true;
  // }
  
  

module.exports = router;
});