var mongoose = require('mongoose');
var Farm = require('../data/farms.model.js');

//Get all review for a farm
module.exports.reviewsGetAll = function(req, res){

var farmID= req.params.farmID;
    
    Farm
        .findById(farmID)
        .select('reviews')
        .exec(function(err, docs){
            console.log("Get Farms", docs)
            res 
                .status(200)
                .json(docs.reviews);
        });



};

//Get single review for a farm
module.exports.reviewsGetOne = function(req, res){

};