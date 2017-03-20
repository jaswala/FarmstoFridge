var dbconn = require('../data/dbconnection.js');
var farmsData = require('../data/farms-data.json');

module.exports.farmsGetAll = function (req, res) {
    var db = dbconn.get();
    var collection = db.collection('dev');

    collection
        .find()
        .toArray(function(err, docs){
            console.log("Found farms", docs)
            res 
                .status(200)
                .json(docs);
        });

    
        
    // console.log("db", db)
    // console.log(req.method, req.url);
    //         res
    //             .status(200)
    //             .json(farmsData);
    //             //.sendFile(path.join(__dirname, 'data', 'farms.json'))
};