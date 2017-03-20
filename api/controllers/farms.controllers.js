var farmsData = require('../data/farms-data.json');

module.exports.farmsGetAll = function (req, res) {

        console.log(req.method, req.url);
            res
                .status(200)
                .json(farmsData);
                //.sendFile(path.join(__dirname, 'data', 'farms.json'))

};