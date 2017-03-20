var express = require('express');
var router = express.Router();

var ctrlFarms = require('../controllers/farms.controllers.js')

router
    .route('/farms')
    .get(ctrlFarms.farmsGetAll);

module.exports = router;