require('./api/data/dbconnection.js').open();
var express = require('express');
var app = express();
var path = require('path');
const hbs = require('hbs');

//require('./api/data/db.js');
var routes = require('./api/routes');


const port = process.env.PORT || 3000;


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
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//load partials
hbs.registerPartials(__dirname + '/views/partials');

app.use('/api/', routes);


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


