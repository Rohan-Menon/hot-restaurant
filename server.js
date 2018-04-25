//Dependencies
var express = require("express");
global.jQuery = require('jquery');
global.$ = global.jQuery;
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");



//Express Setup 
var app = express();
var http = require('http').Server(app);
var PORT = process.env.PORT || 3001;

//Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//Static file setup
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use('/css',express.static(__dirname + '/public/assets/style.css'));
app.use('/css/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.css'));
app.use('/js/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'));

var reservations = [
    {
        name: "dummydata",
        id: "dummyid"
    }
];



var waitList;

//var server = http.createServer(handleRequest);

// Add the application routes

require( './routes/apiRoutes')(app, reservations, waitList);
require( './routes/htmlRoutes')(app, reservations);


// Starts our server, 3001
app.listen(PORT, function () {
   console.log("Server is listening on PORT: " + PORT);
});











