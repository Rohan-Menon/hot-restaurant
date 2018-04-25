//Dependencies
var express = require("express");
var $ = require('jquery');
global.jQuery = require('jquery');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");


//Express Setup 
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
//Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


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











