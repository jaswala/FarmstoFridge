var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res){
//     console.log('get the homepage');
//     res.send('Homepage')
// })

app.get('/data', function(req, res){
    console.log('get the dataPage');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'data', 'farms.json'))
});


var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('port is listening yea ' + port);
});

console.log('named string');