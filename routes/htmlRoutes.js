// dependencies
var path = require('path');
var headContent = `
    <link rel="stylesheet" href="/css/bootstrap">
    <script src="/js/bootstrap"></script>
`;

// HTML routes
module.exports = function(app, reservations) {
    console.log('export worked html');


    app.get('/', function(req, res) {
        res.render('tables.html', {head:headContent});

    });
    // app.get('/tables', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // });

    // app.get('/reserve', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // });

    app.get('/tables', function(req, res) {
        res.render('tables.html', {head:headContent});
    });

    app.get('/reserve', function(req, res) {
        res.render('reservation.html', {title:'Make a reservation'});
    });
};