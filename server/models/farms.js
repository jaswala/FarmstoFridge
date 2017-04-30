var mongoose = require('mongoose');

var farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
   },
  description: {
      type:String
    },
  products:  [String],
  location: {
      city: {
          type:String
        },
      state: {
          type: String
        },
      // always store coordinates in longtitude, latitude order
      coordinates: {
        type: [Number],
        index: '2dsphere'
      }
  },
  price: {
    type: Number
  }
});

var Farm = mongoose.model('Farm', farmSchema, 'farms');

module.exports = {Farm};