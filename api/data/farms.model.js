var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
   name : {
     type : String,
     required : false
   },
   rating : {
     type : Number,
     min : 0,
     max : 5,
     required : true
   },
   review : {
     type : String,
     required : false
   },
   createdOn : {
     type : Date,
     "default" : Date.now
   }
});

var farmSchema = new mongoose.Schema({
  name : {
    type: String,
    required : true
   }
   ,
  description : String,
  products :  [String],
  location : {
      city : String,
      state : String,
      // always store coordinates in longtitude, latitude order
      coordinates :{
        type: [Number],
        index: '2dsphere'
      }
  },
  price: {
    type : Number
  },
  reviews : [reviewSchema]
});

//var Farm = mongoose.model('Farm', farmSchema, 'farmdata');
var Farm = mongoose.model('Farm', farmSchema, 'farms');
module.exports=Farm;

// UPDATING MONGODB data by running update command
//db.farms.update(
//{"name" : "Acme Farm" },
// { $set : {  "reviews" : [ { "name": "aj" ,"rating" : "3" , "review":"Great meat products", "createdON": ""} ] }}) 

