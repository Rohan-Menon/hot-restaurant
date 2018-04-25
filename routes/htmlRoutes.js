// dependencies
var path = require('path');
var jquery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

// HTML routes
module.exports = function(app, reservations) {
    console.log('export worked html');


    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/tables.html'));

    });
    // app.get('/tables', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // });

    // app.get('/reserve', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // });

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/tables.html'));
    });

    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/reservation.html'));
    });
};