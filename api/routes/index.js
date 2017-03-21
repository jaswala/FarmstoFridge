var express = require('express');
var router = express.Router();

var ctrlFarms = require('../controllers/farms.controllers.js')

router
    .route('/farms')
    .get(ctrlFarms.farmsGetAll);

router
    .route('/farms/:farmID')
    .get(ctrlFarms.farmsGetOne);


module.exports = router;