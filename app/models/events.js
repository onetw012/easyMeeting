var mongoose = require('mongoose'),
	users = require('./users'),
	relationship = require("mongoose-relationship"),
	ObjectId = mongoose.Schema.ObjectId;


var EventsSchema = new mongoose.Schema({
  coords: {latitude: Number, longitude: Number},
  name: String,
  description: String,
  participants:[{type: ObjectId, ref: 'userSchema'}],
  private: Boolean,
  author: {type: ObjectId, ref: 'userSchema'},
  dateOfEvent: Date,
  dateOfCreation: Date
});

module.exports.getEvent = mongoose.model('events', EventsSchema);
