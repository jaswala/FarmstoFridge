var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://127.0.0.1:27017/dev';


var _connection = null;

var open = function(){
    MongoClient.connect(dburl, function(err, db){
        if (err) {
            console.log("DB connection Error")
            return;
        } 
        _connection = db;
        console.log("DB connection open ", dburl)
    });
    // set _connection
};

var get = function(){
    return _connection;
}

module.exports = {
    open: open,
    get: get
};