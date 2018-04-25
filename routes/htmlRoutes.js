// dependencies
var path = require('path');

var jquery = require('jquery');

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
};