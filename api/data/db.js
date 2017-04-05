var mongoose = require('mongoose');
var dburl = 'mongodb://test:test@ds025583.mlab.com:25583/nodetodosample-aj';
//var dburl= 'mongodb://127.0.0.1:27017/meantest';

mongoose.connect(dburl);

// listen to different events
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

//BRING IN SCHEMA AND MODELS
//require('./farms.model.js');
