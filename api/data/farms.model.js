var mongoose = require('mongoose');

var farmSchema = new mongoose.Schema({
  name : String,
  description : String,
  products :  [String],
  location : {
      city : String,
      state : String,
      // always store coordinates in longtitude, latitude order
      coordinates : [Number]
  }

});

var Farm = mongoose.model('Farm', farmSchema, 'farms');
module.exports=Farm;