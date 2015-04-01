"use strict";

var events = require('./models/events'),
	users = require('./models/users'),
	User = users.getUser,
	Event = events.getEvent;

module.exports = function (app) {

	app.get('/entrance/api/events', function(req, res) {
	    // use mongoose to get all events in the database
	    Event.find(function(err, ev) {
	        if (err) res.send(err);
	        res.json(ev);
	    });
/*	Event.find().remove().exec();*/
	});


	app.get('/entrance/api/users', function(req, res) {
	    // use mongoose to get all events in the database
	    User.find(function(err, user) {
	        if (err) res.send(err);
	        res.json(user);
	    });
	    
	});



	app.post('/api/createEvent', function (req, res) {
			var event = new Event(req.body);
			var author = 0;
			User.find().distinct('_id', function(error, ids) {
				author = ids[0];
				event.participants = [author];
				event.author = author;
				/*console.log(event);*/
				event.save(function (err, data) {
					if (err) {
						console.log(err);
					} else {
						console.log('Saved ', data );
					}
				});
				 res.send('POST request: event created!');
			});





	});
/*	app.get('/api/createAdmin', function  (req, res) {
		var admin = new User({ username: 'admin', password: 'admin'});
		admin.save(function (err) {
		  if (err) return handleError(err);
		  console.log("Saved!");
		})
	});*/

	//all routes =========================================
	app.get('*', function(req, res) {
	          res.sendFile(__dirname + '/public/index.html'); // load our public/index.html file
	});

};