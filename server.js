// server.js

// modules ====================================
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');
//=============================================

// config files ===============================
var db = require('./config/db');
//=============================================

// port
var port = process.env.PORT || 4000; 

// connect to database ========================
var uristring =
		process.env.MONGOLAB_URI ||
		process.env.MONGOHQ_URL ||
		db.url;
mongoose.connect(uristring, function () {
	console.log("Connected to database: " + db.url);
}); 


// middleware =================================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); 


//routes ======================================
require('./app/routes')(app); // configure our routes

// make server=================================
app.listen(port, function () {
	console.log("Listening port: " + port);
});