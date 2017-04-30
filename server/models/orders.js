var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: null
    },
     number: {
        type: Number,
        default: null
    },
   createdAt: {
       type: Number,
       default: null
 }
});

var Order = mongoose.model('Order', orderSchema, 'orders');

module.exports = {Order};