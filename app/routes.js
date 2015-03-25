var events = require('./models/events'),
	users = require('./models/users'),
	User = users.getUser;

module.exports = function (app) {

	app.get('/entrance/api/events', function(req, res) {
	    // use mongoose to get all events in the database
	    events.getEvent.find(function(err, ev) {
	        if (err) res.send(err);
	        res.json(ev);
	    });
	});


	app.get('/entrance/api/users', function(req, res) {
	    // use mongoose to get all events in the database
	    User.find(function(err, user) {
	        if (err) res.send(err);
	        res.json(user);
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
	          res.sendFile('./public/index.html'); // load our public/index.html file
	});

};