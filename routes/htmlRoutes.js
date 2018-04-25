// dependencies
var path = require('path');

// HTML routes
module.exports = function(app, reservations) {
    console.log('export worked html');


    app.get('/', function(req, res) {
        res.render('tables.html', {title:'Home'});

    });
    // app.get('/tables', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // });

    // app.get('/reserve', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // });

    app.get('/tables/:name', function(req, res) {
        var params = {title:'Reservations'};
        if(req.params.name) params.name = req.params.name;
        res.render('tables.html', params);
    });

    app.get('/reserve', function(req, res) {
        res.render('reservation.html', {title:'Make a reservation'});
    });
};