var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://test:test@ds025583.mlab.com:25583/nodetodosample-aj';


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