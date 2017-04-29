//var mongoose = require('mongoose');

var Farm = require('../data/farms.model.js');

module.exports.farmsGetAll = function (req, res) {

// to limit the results 
    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count= parseInt(req.query.count, 10);
    }

    Farm
        .find()
        .skip(offset)
        .limit(count)
        .exec(function(err, farms) {
            console.log("Found Farms", farms.length);
            res 
              .json(farms);
        });

   // collection
   //     .find()
   //     .skip(offset)
   //    .limit(count)
   //     .toArray(function(err, docs){
   //         console.log("Found farms", docs)
   //        res 
   //            .status(200)
   //             .json(docs);
   //    });

};

module.exports.farmsGetOne = function (req, res) {

    var farmID= req.params.farmID;
    
    Farm
        .findById(farmID)
        .exec(function(err, docs){
            console.log("Get Farms", docs)
            res 
                .status(200)
                .json(docs);
        });
};
        
    // console.log("db", db)
    // console.log(req.method, req.url);
    //         res
    //             .status(200)
    //             .json(farmsData);
    //             //.sendFile(path.join(__dirname, 'data', 'farms.json'))
    // };