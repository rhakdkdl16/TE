var Client = require('mongodb').MongoClient;
var username = require
Client.connect('mongodb://localhost:27017/school', function(error, db){
    if(error) {
        console.log(error);
    } else {
        console.log("connected:"+db);
        db.close();
    }
});

var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:3000', function(error, db){
    if(error) {
        console.log(error);
    } else {
   
        var michael = {name:'aaa', score: 15, username:'M'};
               db.collection('student').insert(michael);

        db.close();
    }
});