var express = require('express');
var router = express.Router();

var ctrlFarms = require('../controllers/farms.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

router
    .route('/farms')
    .get(ctrlFarms.farmsGetAll);

router
    .route('/farms/:farmID')
    .get(ctrlFarms.farmsGetOne);

// Review routes

router
    .route('/farms/:farmID/reviews')
    .get(ctrlReviews.reviewsGetAll);

router
    .route('/farms/:farmID/reviews/:reviewID')
    .get(ctrlReviews.reviewsGetOne);


module.exports = router;