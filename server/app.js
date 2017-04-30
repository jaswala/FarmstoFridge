// developed modules
var {mongoose} = require('./db/mongoose')
var {Farm} = require('./models/farms');
var {Order} = require('./models/orders');

// npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const hbs = require('hbs');


//Set app from express
var app = express();

//require('./api/data/db.js');
//var routes = require('.././api/routes');

// set up port
const port = process.env.PORT || 3000;

//middleware

app.use(bodyParser.json());

// POST APIs
app.post('/farms', (req, res) => {
    var farm = new Farm ({
        name: req.body.name
    });
    farm.save().then((doc)=> {
        res.send(doc)
            .status(200);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/orders', (req, res) => {
    var order = new Order ({
        product: req.body.product
    });
    order.save().then((doc) => {
        res.send(doc)
            .status(200)
    }, (e) => {
        res.status(400).send('message123', e)
            
    });
});

// GET APIs
app.get('/farms', (req, res) => {
    Farm.find().then((farms)=>{
        res.send({
            farms
        });
    }, (e)=> {
        res.status.send(e, 'named err');
    })
})
app.get('/orders', (req, res) => {
    Order.find().then((orders)=>{
        res.send({
            orders
        });
    }, (e)=> {
        res.status.send(e, 'named err');
    })
})
// var newFarm = new Farm ({
//     name:'Nanda Farms'
// });
// newFarm.save().then((doc)=> {
//     console.log(`saved farm ${doc}`)
// }, (e)=> {
//     console.log('Unable to save Farm');
// })

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});
//set view engine

app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     res.render('index.hbs', {
//         welcome: 'Sourcing local food',
//         pageTitle: 'Farm 2 Fridge'
//     })
// });
//set public static directory
const publicPath = path.join(__dirname+'/../public');

app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, 'node_modules')));

//load partials
hbs.registerPartials(__dirname + '/views/partials');

//app.use('/api/', routes);


// hbs.registerHelper('screamIT', (text) => {
// return text.toUpperCase();
// });

// app.get('/farms', (req, res) => {
//     res.render('farms.hbs', {
//         pageTitle: 'rms'
//     });
// });

// app.get('/locations', (req, res) =>{
//     res.render('locations.hbs', {
//         pageTitle: 'Farm Locations'
//     });
// });

// app.get('/reviews', (req, res) =>{
//     res.render('reviews.hbs', {
//         pageTitle: 'Farm Reviews'
//     });
// });

// app.get('/bad', (req, res)=>{
//     res.send({
//         error: 'unable to handle'
//         });  
// });

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});


